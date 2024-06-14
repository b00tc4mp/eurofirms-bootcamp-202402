//[{{camiseta}, cantidad}]   
//[{{id: '1234' 'name:'Taza', image: 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png', description: 'preciosa taza', stock:50, price: 8, quantity: 1} },
//{id: '12345' name:'Camiseta manuel', image: 'https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png', description: 'preciosa camiseta', stock:50, price: 8, quantity: 1} }]
//validar campos de la función
// comprobar si el userId existe
//comprobar que los produtos del carrito existan
//comprobar si hay stock del producto
//actualizar el stock del producto eliminando los producctos comprados
//añadir la compra al registro de pedidos
//registro = {el nombre del comprador, carrito, precio de la compra completa, fecha}
import { User, Product, Order, Cart, Item } from '../data/index.js'
import { validate, errors } from 'com'
const { SystemError, MatchError } = errors

function createOrder(userId, items) {
   validate.id(userId, 'userId')

   items.forEach(item => {
      validate.id(item.id)
      validate.number(item.quantity)
   })

   return User.findById(userId)
      .catch(error => { throw new SystemError(error.message) })
      .then(user => {
         if (!user) throw new MatchError('user not found')

         let subtotal = 0

         const cart = new Cart

         return Promise.all(
            items.map(item => {
               return Product.findById(item.id)
                  .catch(error => { throw new SystemError(error.message) })
                  .then(product => {
                     if (!product) throw new MatchError('product not found')
                     
                        if (product.stock === 0)
                        throw new MatchError('insuficient stock')
                     
                     if (item.quantity > product.stock)
                        throw new MatchError('insuficient stock')
                     
                     product.stock = product.stock - item.quantity

                     cart.items.push(new Item({ product, quantity: item.quantity }))

                     return product.save()
                        .catch(error => { throw new SystemError(error.message) })
                  })
            })
         )
            .then(() => {
               const order = new Order({
                  buyer: userId,
                  cart: cart,
                  date: new Date(),
               })
               
               return order.save()
                  .catch(error => { throw new SystemError(error.message) })
                  .then(() => { })
            })
      })




}

export default createOrder
// Crear el objeto products con todos sus campos o elementos
var products = [
    {
        title: 'Portatil ASUS Vivobook',
        image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106186290?x=600&y=450&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=600&ey=450&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=600&cdy=450',
        imageAlt: 'Portatil ASUS Vivobook',
        description: 'Portátil - ASUS Vivobook F1605PA-MB143, 16" WUXGA, Intel® Core™ i7-11370H, 8GB RAM, 512GB SSD, Iris® Xe Graphics, Sin sistema operativo',
        price: '499€'
    },
    {
        title: 'Portatil HP',
        image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_133306750?x=320&y=320&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=320&ey=320&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=320&cdy=320',
        imageAlt: 'Portail HP',
        description: 'Portátil - HP 15-fd0041ns, 15.6" Full HD, Intel® Core™ i3-N305, 8GB RAM, 512GB SSD, UHD Graphics, W11 H',
        price: '449€'
    }
]

// funcion para ejecutar el bucle for y renderizar los elementos en el html
function renderProducts() {

    // Trae del docuemnto html el id 
    
    var productsContainer = document.getElementById('products-container')
    // var productsContainer = document.querySelector('#products-container')

    // hacer que se vacien los campos del formulario cuando se ha agregado un producto
    productsContainer.innerHTML = ''

        //Crear elemeento span

    var productsCounter = document.createElement('span')

    productsCounter.textContent = products.length + ' Products'

    productsContainer.appendChild(productsCounter)

    // Bucle para recorrer todos los productos

    for (var i = products.length - 1; i >= 0; i--) {
        var product = products[i]

        // Crear elemento article

        var productArticle = document.createElement('article')

        // Crear clase para 
        productArticle.className = 'product'

        // Crear elemento h2 para el tamaño del titulo del producto

        var productTitle = document.createElement('h2')
        productTitle.textContent = product.title

        // Crear elemento div que sera el padre de img

        var productImageContainer = document.createElement('div')

        // Crear clase para 

        productImageContainer.className = 'product-image-container'

        // Crear elemento img para la imagen

        var productImage = document.createElement('img')

        // Crear clase para 

        productImage.className = 'product-image'
        productImage.src = product.image
        productImage.alt = product.imageAlt

        // ProductImageContainer es el nodo padre y se le esta agregando un productImage que es el nodo hijo

        productImageContainer.appendChild(productImage)

        // Crear elemento span para la descripcion

        var productDescription = document.createElement('span')
        productDescription.textContent = product.description

        // Crear elemento span para el precio

        var productPrice = document.createElement('span')
        productPrice.textContent = product.price

        productArticle.append(productTitle, productImageContainer, productDescription, productPrice)



        productsContainer.appendChild(productArticle)
    }
}

    // Trae del docuemnto html el id 
var createProductForm = document.getElementById('create-product-form')
createProductForm.onsubmit = function (event) {

    // Hacer que no tarde en refrescar la pagina web 
    event.preventDefault()
    
    // Este código se utiliza típicamente en un manejador de eventos de formulario, como el evento 'submit', para recopilar los valores ingresados por el usuario en un formulario. Los valores se extraen de los campos del formulario y se almacenan en variables para su posterior procesamiento o envío a un servidor, según sea necesario.

    var title = event.target.title.value
    var image = event.target.image.value
    var imageAlt = event.target['image-alt'].value
    var description = event.target.description.value
    var price = event.target.price.value

    var product = {
        title,
        image,
        imageAlt,
        description,
        price
    }

    // indica que se está agregando un nuevo elemento al final de un array llamado products. se usa para mantener una lista dinámica de elementos, con que se está construyendo una lista de productos
    products.push(product)

    //borra o restablece los valores de todos los campos del formulario a cadenas vacías, lo que podría ser útil después de que el usuario haya enviado la información y se desee limpiar el formulario para una nueva entrada.
    event.target.title.value = ''
    event.target.image.value = ''
    event.target['image-alt'].value = ''
    event.target.description.value = ''
    event.target.price.value = ''

    renderProducts()
}

renderProducts()
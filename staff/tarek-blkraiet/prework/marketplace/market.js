var products = [
    {
        title: 'Product Asus portatil'
        image:
            imageAlt:
        description:
            price: '499€'
    }

]









for (var i = 0; i <= products.length; i++) {
    var product = products[i]
    
    var productsContainer = document.getElementById('products-container')

    var product = document.createElement('article')

    product.className = 'product'

    var productTitle = document.createElement('h2')
    productTitle.textContent = 'Portátil Asus VIVOBOOK'

    var productImagecontainer = document.createElement('img')
    productImageContainer.className = 'product-image-container'

    productImage.src = 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_126739539?x=600&y=450&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=600&ey=450&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=600&cdy=450'
    productImage.alt = 'Portatil ASUS Vivobook'
    productImageContainer.appendChild(productImage)


    var productDescription = document.createElement('span')
    productDescription.textContent = 'Portátil - 90NB0Q65-M00WX0 ASUS, 15,59 ", Full-HD, Intel®, 8 GB, 256 GB, 220 Multicolor'


    var productPrice = document.createElement('span')
    productPrice.textContent = '499€'


    product.append(productTitle, productImageContainer, productDescription)
    productsContainer.appendChild(product)
}

var createProductForm =document.getElementById('create-product-form')
createProductForm.onsubmit=function(event){
    event.preventdefault()
    console.log('hola')
    var title = event.target.title.value
}
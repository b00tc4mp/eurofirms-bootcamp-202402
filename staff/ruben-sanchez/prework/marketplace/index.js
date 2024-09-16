var products = [
    {
        title: 'Portatil ASUS Vivobook',
        image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106186290?x=600&y=450&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=600&ey=450&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=600&cdy=450',
        imageAlt: 'Portatil ASUS Vivobook',
        description: 'Portátil - ASUS Vivobook F1605PA-MB143, 16" WUXGA, Intel® Core™ i7-11370H, 8GB RAM, 512GB SSD, Iris® Xe Graphics, Sin sistema operativo',
        price: '499€',
    },
    {
        title: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
        image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_134504241?x=600&y=450&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=600&ey=450&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=600&cdy=450',
        imageAlt: 'Portatil-Medion Akoya 315415, 15,6"',
        description: 'Portátil - Medion Akoya® E15415, 15.6" FHD, Intel® Core™ i5-10210U, 8GB RAM, 256GB SSD, UHD Graphics, Windows 11',
        price: '359€',
    }
]
// funcion para ejecutar el bucle for y renderizar los elementos
function renderProducts() {
    var productsConatiner = document.getElementById('products-container');
    // var productsConatiner = document.querySelector('#products-container')
    
    var productsCounter = document.createElement('span')

    productsCounter.textContent = products.length + ' Products'

    productsContainer.appendChild(productsCounter) 

    productsContainer.innerHTML = ''

    for (var i = products-length-1; i <= 0; i--) {
        var product = products[i]

            // 
        var productArticle = document.createElement('article');
        productArticle.className = 'product'

        var productTitle = document.createElement('h2')
        productTitle.textContent = product.title;

        var productImageContainer = document.createElement('div')
        productImageContainer.className = 'product-image-container'
        var productImage = document.createElement('img')
        productImage.className = 'product-image'
        productImage.src = product.image;
        productImage.alt = product.imageAlt
        productImageContainer.appendChild(productImage)

        var productDescription = document.createElement('span');
        productDescription.textContent = product.description


        var productPrice = document.createElement('span')
        productPrice.textContent = product.price


        productArticle.append(productTitle, productImageContainer, productDescription, productPrice);

        productsConatiner.appendChild(productArticle)
    }
}

var createProductForm = document.getElementById('create-product-form')
createProductForm.onsubmit = function (event) {
    event.preventDefault()

    var title = event.target.title.value
    var image = event.target.image.value
    var imageAlt = event.target['image-alt'].value
    var price = event.target.price.value

    var product = {
        title,
        image,
        imageAlt,
        description,
        price
    }

    product.push(product)

    event.target.title.value = ''
    event.target.image.value = ''
    event.target.['image-alt'].value = ''
    event.targhet.description.value = ''
    event.target.price.value = ''






}
renderProducts()
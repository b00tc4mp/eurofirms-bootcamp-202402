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
    var productsContainer = document.getElementById('products-container')
    // var productsContainer = document.querySelector('#products-container')

    productsContainer.innerHTML = ''

    var productsCounter = document.createElement('span')

    productsCounter.textContent = products.length + ' Products'

    productsContainer.appendChild(productsCounter)

    for (var i = products.length - 1; i >= 0; i--) {
        var product = products[i]

        var productArticle = document.createElement('article')
        productArticle.className = 'product'

        var productTitle = document.createElement('h2')
        productTitle.textContent = product.title

        var productImageContainer = document.createElement('div')
        productImageContainer.className = 'product-image-container'
        var productImage = document.createElement('img')
        productImage.className = 'product-image'
        productImage.src = product.image
        productImage.alt = product.imageAlt
        productImageContainer.appendChild(productImage)

        var productDescription = document.createElement('span')
        productDescription.textContent = product.description

        var productPrice = document.createElement('span')
        productPrice.textContent = product.price

        productArticle.append(productTitle, productImageContainer, productDescription, productPrice)

        productsContainer.appendChild(productArticle)
    }
}

var createProductForm = document.getElementById('create-product-form')
createProductForm.onsubmit = function (event) {
    event.preventDefault()

    var title = event.target.title.value
    var image = event.target.image.value
    var imageAlt = event.target['image-alt'].value
    var description = event.target.description.value
    var price = event.target.price.value

    var isValidTitle = stringValidator(title, 'Title') && lengthValidator(title, 4, 'Title')

    if (!isValidTitle) return

    var product = {
        title,
        image,
        imageAlt,
        description,
        price
    }

    products.push(product)

    event.target.title.value = ''
    event.target.image.value = ''
    event.target['image-alt'].value = ''
    event.target.description.value = ''
    event.target.price.value = ''

    renderProducts()
}

renderProducts()
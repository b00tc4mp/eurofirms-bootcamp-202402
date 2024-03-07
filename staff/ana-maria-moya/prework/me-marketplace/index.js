var productsContainer = document.getElementById('products-container')
// var productsContainer = document.querySelector('#products-container')
productsContainer.innerHTML = ''
var productsCounter = document.createElement('span')
productsCounter.textContent = products.length + 'Products'
productsContainer. appendChild (productsCounter)

for (var i = products.length - 1; i >= 0; i--) ´
var product = products[i]

var productArticle = document.createElement('article')
productArticle.className = 'product'

var productTitle = document.createElement










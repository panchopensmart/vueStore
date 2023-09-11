function processProduct(productElement) {
    var artProduct = productElement.childNodes[0].childNodes[1].innerHTML;
    console.log(artProduct)
}

var productElements = document.querySelectorAll('._product');

for (var i = 0; i < productElements.length; i++) {
    processProduct(productElements[i])
}

`use strict`
function ProductImage(image) {
    this.timesClicked = 0;
    this.timesShown = 0;
    this.image = image

ProductImage.allImages.push(this);
}


ProductImage.allImages = [];
//creates magazine image and runs push operation inthe constructor
new ProductImage(`image/cruise.path`);
console.log(ProductImage.allImages)
// select elements from my html to render your images
var prodContainer = document.getElementById("mag-container");

var leftProdImage = document.getElementById("left-mag");
var leftProdClickCount = docutment.getElementById("left-count");

var rightProdImage = documment.getElementById("right-mag");
var rightProdClickCount = docutment.getElementById("right-count");

function generateRandomItem(){
    var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    var rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);

    while(leftIndex === rightIndex ){
        rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);

    }
    var leftProd= ProductImage.allImages[leftIndex];
    var rightProd = ProductImage.allImages[rightIndex];
    return [leftProd, rightProd]
}

function renderItem(leftProd,rightProd){
    leftProdImage.src = leftProd.image;
    rightProdImage.src = rightProd.image;
    leftProdClickCount.content = leftProd.timesClicked;
    rightProdClickCount.content = rightProd.timesClicked;
    //set an id attribute for each product
}

var randomProduct = generateRandomItem();
renderItem(randomProduct[0],randomProduct[1]);
 

prodContainer.addEventListener('click', function(event) {
console.log(event.target);
console.log(event.src);

for(var i = 0; i < ProductImage.allImages.length; i++){
    if(event.target.src.includes(ProductImage.allImages[i].image)){
        ProductImage.allImages[i].timesClicked++;
        console.log(ProductImage.allImages[i])
    }
}
var newProd = generateRandomItem();
renderItem(newProd[0], newProd);
});
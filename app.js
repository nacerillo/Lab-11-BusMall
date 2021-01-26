`use strict`
var rounds = 0;
function ProductImage(image, name) {
    this.name = name;
    this.timesClicked = 0;
    this.timesShown = 0;
    this.image = image;
    //this.image = 'assets/assets/${name}'

ProductImage.allImages.push(this);
//mapping using bracket notation on a product
//ProductImage.ImageMap(this.name) = this;
}
//productImage.ImageMap = {};

ProductImage.allImages = [];

/* for(var z = 0; z < product.length; z++){
    new ProductImage(product,product[i]);
} */
//creates magazine image and runs push operation inthe constructor
new ProductImage(`assets/assets/bag.jpg`, 'bag.jpg');
new ProductImage('assets/assets/banana.jpg', 'banana.jpg');
new ProductImage('assets/assets/bathroom.jpg','bathroom.jpg');
new ProductImage('assets/assets/boots.jpg','boots.jpg');
new ProductImage('assets/assets/breakfast.jpg','breakfast.jpg');
new ProductImage('assets/assets/chair.jpg','chair.jpg');
new ProductImage('assets/assets/cthulhu.jpg','cthulhu.jpg');
new ProductImage('assets/assets/dog-duck.jpg','dog-duck.jpg');
new ProductImage('assets/assets/dragon.jpg','dragon.jpg');
new ProductImage('assets/assets/pen.jpg','pen.jpg');
new ProductImage('assets/assets/pet-sweep.jpg','pet-sweep.jpg');
new ProductImage('assets/assets/scissors.jpg','scissors.jpg');
new ProductImage('assets/assets/shark.jpg','shark.jpg');
new ProductImage('assets/assets/sweep.png','sweep.png');
new ProductImage('assets/assets/tauntaun.jpg','auntaun.jpg');
new ProductImage('assets/assets/unicorn.jpg','nicorn.jpg');
new ProductImage('assets/assets/usb.gif','usb.gif');
new ProductImage('assets/assets/water-can.jpg','water-can.jpg');
new ProductImage('assets/assets/wine-glass.jpg','wine-glass.jpg');



//console.log(ProductImage.allImages)
// select elements from my html to render your images
var prodContainer = document.getElementById("mag-container");
var resultShower = document.getElementById("show-results");
//resultsShower.visibility = "hidden";
var leftProdImage = document.getElementById("left-mag");
var leftProdClickCount = document.getElementById("left-count");

var rightProdImage = document.getElementById("right-mag");
var rightProdClickCount = document.getElementById("right-count");

var centerProdImage = document.getElementById("center-mag");
var centerProdClickCount = document.getElementById("center-count");

var centerShown = document.getElementById("center-shown");
var leftShown = document.getElementById("left-shown");
var rightShown = document.getElementById("right-shown");

function generateRandomItem(){
    var leftIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    var rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    var centerIndex = Math.floor(Math.random() * ProductImage.allImages.length);
    while(leftIndex === rightIndex || centerIndex === leftIndex){
        if(leftIndex === rightIndex){
        rightIndex = Math.floor(Math.random() * ProductImage.allImages.length);
        }
        if(leftIndex === centerIndex){
            centerIndex = Math.floor(Math.random() * ProductImage.allImages.length);
        }

    }

    while(rightIndex === centerIndex ){    
            centerIndex = Math.floor(Math.random() * ProductImage.allImages.length);  
    }
    var leftProd = ProductImage.allImages[leftIndex];
    var rightProd = ProductImage.allImages[rightIndex];
    var centerProd = ProductImage.allImages[centerIndex];
    return [leftProd, centerProd, rightProd];
}

function renderItem(){
    //add a name addtribute to the divs containins the products
    var currentImages = [leftProdImage.name, centerProdImage.name, rightProdImage.name];
    var newImages = generateRandomItem();

    
    while(currentImages[0] === newImages[0].name ||
           currentImages[1] === newImages[0].name ||
           currentImages[2] === newImages[0].name ||
           currentImages[0] === newImages[1].name ||
           currentImages[1] === newImages[1].name ||
           currentImages[2] === newImages[1].name ||
           currentImages[0] === newImages[2].name ||
           currentImages[1] === newImages[2].name ||
           currentImages[2] === newImages[2].name){
           newImages = generateRandomItem();
    }
    

    leftProdImage.src = newImages[0].image;
    leftProdImage.name = newImages[0].name;
    leftProdClickCount.textContent = "Times Clicked: " + newImages[0].timesClicked;
    newImages[0].timesShown ++;

    rightProdImage.src = newImages[2].image;
    rightProdImage.name = newImages[2].name;
    rightProdClickCount.textContent = "Times Clicked: " + newImages[2].timesClicked;
    newImages[2].timesShown ++;
    
    centerProdImage.src = newImages[1].image;
    centerProdImage.name = newImages[1].name;
    centerProdClickCount.textContent = "Times Clicked: " + newImages[1].timesClicked;
    newImages[1].timesShown ++;

    leftShown.textContent = "Times Shown: " + newImages[0].timesShown;
    rightShown.textContent = "Times Shown: " + newImages[2].timesShown;
    centerShown.textContent = "Times Shown: " + newImages[1].timesShown;


 //   leftProdClickCount.content = leftProd.timesClicked;
  //  rightProdClickCount.content = rightProd.timesClicked;
    //set an id attribute for each product
}

//var randomProduct = generateRandomItem();
renderItem();
 


/*
function handleProdClick(event){
for(var i = 0; i < ProductImage.allImages.length; i++){
    if(event.target.src.includes(ProductImage.allImages[i].image)){
        ProductImage.allImages[i].timesClicked++;
        //console.log(ProductImage.allImages[i])
    }
}
//var newProd = generateRandomItem();
renderItem();
if(rounds === 25){
    resultShower.style.visibility = "visible";
    prodContainer.removeEventListener('click',handleProdClick);

}
}
*/
prodContainer.addEventListener('click', function(event) {
    rounds+=1; 


//console.log(event.target);
//console.log(event.src);
if(rounds === 25){
    resultShower.style.visibility = "visible";
   // 
    console.log("end of round");

}
for(var i = 0; i < ProductImage.allImages.length; i++){
    if(event.target.src.includes(ProductImage.allImages[i].image)){
        ProductImage.allImages[i].timesClicked++;
        //console.log(ProductImage.allImages[i])
    }
}
//var newProd = generateRandomItem();
renderItem();

});

/*function handleVoteClick(event){

} */
resultShower.addEventListener('click', function(event) {
    renderResults();
});
function renderResults(){

    var resultsContainer = document.getElementById("results-list");
    console.log("this is running")
    for(var j = 0; j < ProductImage.allImages.length; j++ ){
        var listItem = document.createElement('li');
        listItem.textContent = ProductImage.allImages[j].name + ": " + ProductImage.allImages[j].timesClicked;
        resultsContainer.appendChild(listItem);
    }
};
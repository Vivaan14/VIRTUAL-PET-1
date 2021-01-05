//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImage;
var happydogimage
function preload(){
  //load images here
   dogImage = loadImage("images/dogImg.png");
   happydogimage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('food')
  foodStock.on("value",readStock);
  dog = createSprite(250,250,20,50);
  dog.addImage(dogImage);
  dog.scale = 0.1
}


function draw() {  
background(46, 139, 87);
if(keyDown("UP_ARROW")){
writeStock(foodS);
dog.addImage(happydogimage)
}
  dog.display();
  //add styles here
  drawSprites();
  textSize(10);
  fill("blue");
text("PRESS UP_ARROW TO FEED DRAGO MILK!!", 150,350);
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }

  database.ref('/').update({
  Food:x
  })
}


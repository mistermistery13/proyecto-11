var mar,mar1;
var barco,barco1;
function preload(){
barco1 = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
mar1 = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
mar = createSprite (200,200,10,10);
mar.addImage (mar1);
mar.scale = 0.25;
barco = createSprite (100,200,20,20);
barco.addAnimation ("movimiento",barco1);
barco.scale = 0.3;
}

function draw() {
background("blue");
drawSprites();
}
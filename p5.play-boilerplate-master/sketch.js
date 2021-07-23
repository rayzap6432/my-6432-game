var bg,bgimg
var z1,z1img
var z2,z2img
function preload(){
bgimg=loadImage("f/bg.jpg")
z1img=loadImage("f/z1.png")
z2img=loadImage("f/z2.png")



}


function setup() {
  createCanvas(800,400);
  bg=createSprite(400, 200, 50, 50);
  bg.addImage(bgimg)

  z1=createSprite(400, 200, 50, 50);
  z1.addImage(z1img)
  z1.scale=0.5

  z2=createSprite(100, 200, 50, 50);
  z2.addImage(z2img)
  z2.scale=1.7
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
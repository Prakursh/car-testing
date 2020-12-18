var car;
var wall;
var speed,weight;
var deform;






function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200, 50, 50);
  wall= createSprite(1500,200,60,200);

  speed = random(55,90);
  car.velocityX = speed;
  weight = random(400,1500);
}

function draw() {
  background(0,0,0);  

if(wall.x-car.x < (car.width+wall.width)/2){

car.velocityX = 0;
deform = 0.5*weight*speed*speed/22500;
if(deform <100){
  car.shapeColor = color(0,255,0);
}else if(deform >100&& deform<180){
  car.shapeColor = color(230,230,0);
}else if( deform>180){
  car.shapeColor = color(255,0,0);
}







}

  drawSprites();
}
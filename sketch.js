var car,car2,car3wall,wall2,wall3;

var speed,speed2,speed3,weight,weight2,weight3;

function setup() {
  createCanvas(1370,640);
  speed = 15;
  speed3 = 10;
  speed2 = 7;
  weight = 2260;
  weight2 = 1522;
  weight3 = 3000;
  car = createSprite(50,140,50,50);
  car.shapeColor = "white";
  car2 = createSprite(50,340,50,50);
  car2.shapeColor = "white";
  car3 = createSprite(50,540,50,50);
  car3.shapeColor = "white";
  wall = createSprite(1150,140,40,150);
  wall.shapeColor = color(80,80,80);
  wall2 = createSprite(1150,340,40,150);
  wall2.shapeColor = color(80,80,80);
  wall3 = createSprite(1150,540,40,150);
  wall3.shapeColor = color(80,80,80);
}

function draw() {
  background(0);  
  
  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
  
  textFont("Times New Roman");
  textSize(50);
  fill("white");
  text("CGSO Car Test",450,60);
  textSize(15);
  text("Car Name = Zenia",1200,80);
  text("Weight = " + weight,1200,110);
  text("Speed = ",1200,140);
  text("Deformation = ",1200,170);
  text("Rating = ",1200,199);
  text("Car Name = Tourus",1200,280);
  text("Weight = " + weight2,1200,310);
  text("Speed = ",1200,340);
  text("Deformation = ",1200,370);
  text("Rating = ",1200,399);
  text("Car Name = Cyclap",1200,480);
  text("Weight = " + weight3,1200,510);
  text("Speed = ",1200,540);
  text("Deformation = ",1200,570);
  text("Rating = ",1200,599);

if(wall.x - car.x < car.width/2 + wall.width/2) {
  car.velocityX = 0;
  car.shapeColor = "red";
  textFont("Times New Roman");
  textSize(15);
  text(speed,1255,140);
  text("190",1295,170);
  text("D-",1257,199);
}
if(wall2.x - car2.x < car2.width/2 + wall2.width/2) {
  car2.velocityX = 0;
  car2.shapeColor = "green"
  textFont("Times New Roman");
  textSize(15);
  text(speed2,1255,340);  
  text("74",1295,370);
  text("A-",1257,399);  
  textSize(45);
  text("Tourus Is The Savest Car For Diving",290,300); 
}
if(wall3.x - car3.x < car3.width/2 + wall3.width/2) {
  car3.velocityX = 0;
  car3.shapeColor = "yellow";
  textFont("Times New Roman");
  textSize(15);
  text(speed3,1255,540);
  text("140",1295,570);
  text("B+",1257,599); 
}
  drawSprites();
}
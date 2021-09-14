 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Constraint = Matter.Constraint;

 var bg;    ;
 var engine,world;
 var snow = []

 function preload(){
    bg = loadImage("snow3.jpg");
 }

function setup() {

  createCanvas(displayWidth,displayHeight);
  engine = Engine.create() 
  world = engine.world;
}

function draw() {
  background(bg);  
  Engine.update(engine);
  fill("red")
  textSize(20)
  text("Press Space for Snowfall",50,100);
  if(keyCode  ===  32){
       if(frameCount%50 === 0){
           snow.push(new Snow(random(800,10),20,20));
       }
       for(var a = 0; a<snow.length; a++){
             snow[a].display();
       }
  }
  drawSprites();
}
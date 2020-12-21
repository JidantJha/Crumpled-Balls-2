
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,dustbin,paper,paperball,paperImage,bin,binImage;
function preload(){
   binImage=loadImage("dustbingreen.png");
   paperImage=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    
  
	dustbin = new Dustbin(720,390,100,10);
	paper = new Paper(100,300,10);
	ground = Bodies.rectangle(width/2,400,width,10,{isStatic:true})

	World.add(world,ground);
}


function draw() {
    background("black");
	rectMode(CENTER);
	background(0);
	
  
	dustbin.display();
	paper.display();
  
  drawSprites();
 
}

function keyPressed(){
     if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:12,y:-13});
	 }
}
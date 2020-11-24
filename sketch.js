
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);

	Ground=createSprite(700, 200, 500, 40);

	engine = Engine.create();
	world = engine.world;
	
	bobObject1=new paper(700,400,70)
	bobObject2=new paper(750,400,70)
	bobObject3=new paper(800,400,70)
	bobObject4=new paper(650,400,70)
	bobObject5=new paper(600,400,70)

	bobObject1c=createSprite(700,200,1,1)
	bobObject2c=createSprite(750,200,1,1)
	bobObject3c=createSprite(800,200,1,1)
	bobObject4c=createSprite(650,200,1,1)
	bobObject5c=createSprite(600,200,1,1)

	bobObject1C=new chain(bobObject1,bobObject1c)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
}




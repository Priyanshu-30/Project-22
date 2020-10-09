var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	

	packageSprite=createSprite(400,200, 30,30);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400,200,10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(400,590,800,20);
	groundSprite.shapeColor=color("green")


	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: true,
		restitution:1.2
	}

	packageBody = Bodies.rectangle(400,200,30,30,options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(400,590,800,20 , {isStatic:true} );
 	World.add(world, ground);


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("cyan");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed()
  drawSprites();
 
}

function keyPressed() {
 if (keyDown(DOWN_ARROW)) {
	// Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody,false);
    
  }
}




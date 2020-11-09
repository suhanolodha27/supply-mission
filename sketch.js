var helicopterIMG, helicopterSprite, packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var package;
var rect1,rect2,rect3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
    var canvas = createCanvas(400,400);
	rectMode(CENTER);
	

	package = new Box(230,100,10,10);
	//package.addImage(packageIMG)
	package.scale=0.2;

	helicopterSprite=createSprite(230,100, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	rect1=createSprite(width/2, height-43,100,10);
	rect2=createSprite(150,330,10,60);
	rect3=createSprite(250,330,10,60);
	rect1.shapeColor=color(252,0,20);
	rect2.shapeColor=color(255,0,20);
	rect3.shapeColor=color(252,0,20);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
    rect1= Bodies.rectangle(width/2,100, width, 10 , {isStatic:true} );
 	World.add(world, rect1);
	 rect1= Bodies.rectangle(100,100,100, 100, {isStatic:true} );
 	World.add(world, rect1);
	 rect1= Bodies.rectangle(300,100,10, 100, {isStatic:true} );
 	World.add(world, rect1);

	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(0);
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  package.display();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  package.velocityY=-6;
// package.collide(rect1);
 package.shapeColor=color(0,255,0);
  }
}

if (package.isTouching(rect1||rect2||rect3)){
	package.velocityY=0;
	package.velocityX=0;}

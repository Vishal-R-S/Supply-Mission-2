var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var side1, side2;
var bottom;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	bottomSprite = createSprite(width/2, height-45, 150, 10);
	bottomSprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic : true});
	World.add(world, ground);
	bottom = Bodies.rectangle(width/2, 643, 150, 10, {isStatic : true});
	World.add(world, bottom);

	side1 = new sides(width/2.5, 630, 10, 70);
	side2 = new sides(width/1.7, 630, 10, 70);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

  keyPressed();

  side1.display();
  side2.display();

  drawSprites();
}

function keyPressed() 
{
 if (keyCode === DOWN_ARROW)
 {
	Matter.Body.setStatic(packageBody,false);
 }
}
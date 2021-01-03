
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperObject=new PaperBall(100,620);
    ground=new Ground(400,650,810,10);
	
  dustbin1=new Dustbin(600,595,20,100);
  dustbin2=new Dustbin(670,635,130,20);
  dustbin3=new Dustbin(740,595,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperObject.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  
  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW ){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:60,y:-70})

  } 
 }





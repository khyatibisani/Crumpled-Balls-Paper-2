
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1, dustbin2, dustbin3, dustbinImage;
var groundSprite;

function preload(){
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	ground = new Ground(800,690,1600,10);
	paper = new Paper(100,680,50);
	dustbin1 = new Dustbin(1200,670,180,20);
	dustbin2 = new Dustbin(1130,600,20,120);
	dustbin3 = new Dustbin(1270,600,20,120);

	
}


function draw() {
  background("lightblue");
  //Engine.update(engine);
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

   image(dustbinImage, 1100, 520, 200, 170);

 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(paper.body, paper.body.position,{x:125,y:-120});
	}
}


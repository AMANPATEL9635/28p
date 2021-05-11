
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Render.Body;
var dustbineObj,paperObject,groundObject
var world


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(100,600,10)

 ground = new Ground(400,600,800,20)

 leftside = new Dustbine(550,620,20,100)
 bottom = new dustbine(610,660,100,20)
 rightside = new Dustbine(670,620,20,100)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine);
paper.display();
ground.display()

leftside.display()
bottom.display()
rightside.display()



  drawSprites();
 
}
  
function  keyPressed(){
  if(keyCode===UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y: -15})

  }

}



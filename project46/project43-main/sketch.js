
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var cow, ground;
var cow1, cow2, cow3;
var horse,horse1,horse2;
var hen1, hen2, hen;
var machine;
var hay1;
var mouse,mConstraint;
function preload()
{
  bg = loadImage("bg.png");
  //sound = loadSound("hd.mp3");
}

function setup() {
	var canvas = createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   cow = new Cow(100,400,70,60);
   cow1 = new Cow(20,400,70,60);
   cow2 = new Cow(50,460,70,60);
   ground = new Ground();
   horse = new Horse(610,350,50,50);
   horse1 = new Horse(700,380,50,50);
   horse2 = new Horse(700,330,50,50);
   hen = new Hen(350,320,30,30);
   hen1 = new Hen(400,320,30,30);
   hen2 = new Hen(370,340,30,30);
   hay1 = new Hay(90,300,40,40);
   machine = new Machine();
   mouse = Mouse.create(canvas.elt);
   var options = {
     mouse : mouse
   }
   
   mConstraint = MouseConstraint.create(engine,options);
   World.add(world,mConstraint)
   console.log(mConstraint);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  //sound.play();
  cow.display();
  cow1.display();
  cow2.display();
  horse.display();
  horse2.display();
  horse1.display();
  ground.display();
  hen.display();
  hen1.display();
  hen2.display();
  machine.display();
  drawSprites();
  console.log(hay1.body);
  if(mConstraint.body === machine.body){
    hay1.display();
  
  }
  textSize(20);
 text("press the machine to get hay",20,50);
 
}



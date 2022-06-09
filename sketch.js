//Create namespace for Engine
const Engine = Matter.Engine;
//Create namespace for World
const World = Matter.World;
//Create namespace for Bodies
const Bodies = Matter.Bodies;
//Create namespace for Body
const Body = Matter.Body;

var world, engine;

function setup() {
  createCanvas(400,400);
  //create the engine
  engine = Engine.create();
  //Add world to the engine
  world = engine.world;

   var ball_options = {
    restitution: 1,
    frictionAir:0.01,
  }
   
  var ground_options = {
     isStatic: true
  };
  
//create a ground
  ground = Bodies.rectangle(0, 400, 1000, 100, ground_options);
//add to world
  World.add(world,ground);

  ball = Bodies.circle(200,20,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  
  fill("red");
  ellipse(ball.position.x,ball.position.y,20);

  //write a rectangle function to display ground.
  fill("blue");
  rect(ground.position.x,ground.position.y, 1000, 100);
 


  
  
}


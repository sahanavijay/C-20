const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
var world,engine;
var ball1,ball2,ground,wall;
var angle=1;
function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var ball_options=
  {
    restitution:2
  }
  ball1=Bodies.circle(200,200,50,ball_options);
  World.add(world,ball1);
  ball2=Bodies.circle(100,200,50,ball_options);
  World.add(world,ball2);
  var ground_options=
  {
    isStatic:true
  }
  ground=Bodies.rectangle(5,300,800,20,ground_options);
  World.add(world,ground);
  wall=Bodies.rectangle(200,200,400,20,ground_options);
  World.add(world,wall);
}

function draw()
{
  background("black");
  Engine.update(engine);
  ellipse(ball1.position.x,ball1.position.y,50);
  ellipse(ball2.position.x,ball2.position.y,50);
  rect(ground.position.x,ground.position.y,800,20);
  push();
  translate(wall.position.x,wall.position.y);
  rotate(angle);
  angle=angle+1;
  rect(0,0,400,20);
  pop();
}
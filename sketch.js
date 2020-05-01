const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var log,bob,string;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  //log code
  var log_options={
    isStatic: true
  }
  log = Bodies.rectangle(200,50,200,20,log_options);
  World.add(world,log);

  //bob code
  var bob_options = {
  restitution : 1.0,
  density : 1.0
  }
  bob  = Bodies.circle(220,200,40,bob_options);
  World.add(world,bob);

  //string code
  var options = {
  bodyA : bob,
  bodyB : log,
  stiffness: 0.01,
  length : 100
  }
  string = Constraint.create(options);
  World.add(world,string);
  fill("White");
}


function draw() 
{
  background(0); 
  Engine.update(engine);
  
  text("Press space bar to oscillate",130,300);
  text("Press Enter to stop",150,350);

  //log details
  fill (155, 48, 242);
  rectMode(CENTER);
  rect(log.position.x,log.position.y,200,20);

  //bob details
  fill(48, 255, 217);
  ellipseMode(RADIUS);
  ellipse(bob.position.x,bob.position.y,25);

  //string details
  strokeWeight(3);
  stroke(48, 158, 242);
  line(bob.position.x,bob.position.y,log.position.x,log.position.y)

  if(keyCode === 32)
  {
  bob.position.y = mouseY;
  bob.position.x = mouseX;
  }

  else if (keyCode === ENTER)
  {
  bob.position.x = 200;
  }

}
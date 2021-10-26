const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world,bodies,ground, ball;

function setup() {
  canvas=createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  
  var ground_options={
    isStatic: true
}
ground=Bodies.rectangle(200,390,400,50,ground_options);
 World.add(world,ground);

 var ball_oprions={
   restitution:1.0
 }
 ball=Bodies.circle(200,100,30,ball_oprions)
 World.add(world,ball);


}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,50);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);
  drawSprites();
}
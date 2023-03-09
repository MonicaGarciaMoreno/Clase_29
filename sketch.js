const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var fruit
var fruit_con;
//declarar una variable para agregar el suelo (ground)

//declarar una variable para crear la cuerda (rope)

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
//crear el suelo usando la clase Ground

//crear la cuerda usando la clase Rope

 // fruit = Bodies.circle(300,300,20);
  //Matter.Composite.add(rope.body,fruit);

  //fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  //mostrar la cuerda con la función show()

  ellipse(fruit.position.x,fruit.position.y,30,30);
  Engine.update(engine);
  //mostrar el suelo con la función show()


 
   
}

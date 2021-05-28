const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var c1,c2,c3,c4,c5,c6
var chain1;
var chain2,chain3,chain4,chain5;
var trainSound 
var crashSound
var flag = 0;
var rock;


function preload(){
  bg= loadImage("images/bg.jpg");
  
  trainSound =loadSound("sound/train.mp3")
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1800,700);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(900,650,1800,20);
c1 = new Cabinet(280,400,100,100)
c2 = new Cabinet(320,400,100,100)
c3 = new Cabinet(360,400,100,100)
c4 = new Cabinet(400,400,100,100)
c5 = new Cabinet(440,400,100,100)
c6 = new Cabinet(480,400,100,100)
rock=new Rock(1300,400,200,200)
chain1=new Chain(c1.body,c2.body);
chain2=new Chain(c2.body,c3.body);
chain3=new Chain(c3.body,c4.body);
chain4=new Chain(c4.body,c5.body);
chain5=new Chain(c5.body,c6.body);

var collision = Matter.SAT.collides(c6.body,rock.body);
if(collision.collided)
{
  flag=1;
  
  
}
if(flag ===1){
  textSize(60);
  stroke(3);
  fill('blue');
  text("CRASH",400,100);
  crashSound.play();
}



}

function draw() {
  background(bg);  
  Engine.update(myEngine);
fill("black");
ground.display();
text(mouseX+","+mouseY,100,100) ;
c1.display();
c2.display();
c3.display();
c4.display();
c5.display();
c6.display();

rock.display();
chain1.display()
chain2.display()
chain3.display()
chain4.display()
chain5.display()

  }

function keyPressed(){
  if(keyCode==(RIGHT_ARROW)){
  Matter.Body.applyForce(c6.body,{x:c6.body.position.x,y: c6.body.position.y},{x:0.5,y:0});
  trainSound.play();
}}


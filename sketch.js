const Engine=Matter.Engine;
const World=Matter.World;
const Body=Matter.Body;
const Bodies = Matter.Bodies;

var engine,world

var division=[];
var particle=[];
var plinko=[];

var divisionHeight=300;

function setup() {

  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world

  ground=new Ground(200,790,1000,20); 

  sidewall1=new Ground(0,400,10,1000); 

  sidewall2=new Ground(480,400,10,10000);

  for(a=80;a<width;a=a+80){
    division.push(new Division(a,height-divisionHeight/2,10,300))
  }

  for(var b=40;b<=width;b=b+50){
    plinko.push(new Plinko(b,75))
  }

  for(var b=15;b<=width+10;b=b+50){
    plinko.push(new Plinko(b,175))
  }

  for(var b=80;b<=width-80;b=b+50){
    plinko.push(new Plinko(b,275))
  }

  for(var b=40;b<=width;b=b+50){
    plinko.push(new Plinko(b,375))
  }

  
}

function draw() {
  background("black"); 

  Engine.update(engine)
  
  ground.display();

  sidewall1.display();

  sidewall2.display();

 

  for(var k=0;k<division.length;k++){
    division[k].display()
  }

 
  for(var c=0;c<plinko.length;c++){
    plinko[c].display()
  }

  if(frameCount%60==0){
    particle.push(new Particle(random(width/2-10,width/2+10),20,10))
  }

  for(var d=0;d<particle.length;d++){
    particle[d].display();
  }

  drawSprites();
}
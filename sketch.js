const Bodies = Matter.Bodies;
const Body = Matter.Bodies;
const Engine = Matter.Engine;
const World =Matter.World;

var walking;
var umbrella;
var maxDrops = 100;
var drops = [];
var dropImg;
var engine,world;

function preload(){
    walking = loadAnimation("walking_1-300x300.png","walking_2-300x300.png","walking_3-300x300.png","walking_4-300x300.png","walking_5-300x300.png","walking_6-300x300.png","walking_7-300x300.png","walking_8-300x300.png");
    dropImg = loadImage("drop-removebg-preview-20x20.png")
}

function setup(){
   createCanvas(500,800)
   engine = Engine.create()
   world = engine.world;
   umbrella = new Umbrella(250,500,10,10)
  
   for (var i=0; i<100; i++){  

    drops.push(new Drops(random(0,500),random(0,20),10,10))
    
  }

}

function draw(){
    background("black")
    umbrella.display()

    console.log(drops)
    
       
        for (var j=0; j<100; j++){
            if(frameCount%200===0){
            drops[j].drawEllipse()
            drops[j].updatePosition()
            console.log(frameCount)
            }
            
        }
    

   drawSprites(); 
}   


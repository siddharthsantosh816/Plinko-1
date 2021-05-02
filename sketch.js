const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Plinko;
var particles=[];
var plinkos=[];
var divisions=[];

function setup() {
	createCanvas(480, 680);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
		
	//Create the Bodies Here.
	ground = new Ground(0,675,1600,10);

    
	for(var x=0; x <=width; x=x+80){
        divisions.push(new Divisions(x,height-10, 10,350));
    }
    //Creating Plinkos
    for(var x=40; x<=width; x=x+50){
        for (var y = 50; y<=250; y=y+200) {
             plinkos.push(new Plinkos(x,y,5));
        }
    }
    for(var x=15; x<=width; x=x+50){
        for(var y =150; y<=350;y=y+200){
            plinkos.push(new Plinkos(x,y,5));
        }
    }
       
	Engine.run(engine);
}


function draw() {
	background(0);
	fill("white");
    ground.display();
    
    for(var i=0; i <divisions.length; i++){
        divisions[i].display();  
    }
    for(var i=0; i <plinkos.length; i++){
        plinkos[i].display();   
    }
      //Creating Particles at every 60 frame    
    if(frameCount%60===0){
        particles.push(new Particles(random(width/2-10, width/2+10),10,6));
    }
    
    for(var i=0; i <particles.length; i++){
        particles[i].display();
    }
    
	drawSprites();
 }
 


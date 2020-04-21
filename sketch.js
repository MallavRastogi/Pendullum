const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;
	Ground = new ground(600,395,1200,20);
    
    var ground_option={
		isStatic:true
	}


	ground2= Bodies.rectangle(600,100,150,20,ground_option)
    World.add(world,ground2);
    var ball_options = {

		restitution : 1.0,
		density : 1.0
	  
	  }

	ball=Bodies.circle(600,150,20,ball_options);
	World.add(world,ball);

   var option_con={
	   bodyA:ground2,
	   bodyB:ball,
	   length:100,
       stiffness:0.004
   }
   var string=Constraint.create(option_con);
   World.add(world,string);
}


function draw(){
	
	background("black");
	Engine.update(engine);
	Ground.display();
	textSize(20);
	textFont("timesnewroman");
	
	text("Press space to control the pendullum.",450,30);
	text("Press enter to stop the pendullum from oscillating.",450,50)
	fill("white");
	rectMode(CENTER);
 fill("brown");
 rect(ground2.position.x,ground2.position.y,150,20);

	fill("blue");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20);
strokeWeight(8);
stroke("yellow");
line(ground2.position.x,ground2.position.y,ball.position.x,ball.position.y);
console.log(keyCode);
if(keyCode===32){
	ball.position.x=mouseX;
	ball.position.y=mouseY;
	
}

else if (keyCode === 13){
	ball.position.x = ball.position.x;
	ball.position.y = ball.position.y;
	
	}
}
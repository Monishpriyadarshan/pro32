const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5;
var polygon, rope;
var score = 0;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(700,320,70,70);
    box3 = new Box(900,320,70,70);
    box4 = new Box(800,320,70,70);
    box5 = new Box(800,320,70,70);

    polygon = new polygon(200,50);
    rope = new Rope(rope.body,{x:200, y:50});
}

function draw(){
    background("blue");
    textSize(25);
    fill("black");
    text("score:"+score,200,20);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();

    polygon.display();
    rope.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(polygon.body);
    }
}

async function getbackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Africa/Nouakchott")
    var responseJSON = await response.json();
    console.log(responseJSON);
     var dateTime = responseJSON.dateTime
     var hour = dateTime.slice(11,13);
     if(hour>=06 && hour<=19){
         background("black");
     }
     else{
        background("blue");
     }
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;




function setup() {
 canvas = createCanvas(windowWidth/2,windowHeight/1.5);
 engine = Engine.create();
 world = engine.world();

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
  mouse = canvasmouse
};
mConstraint = MouseConstraint.create(engine,options);
World.add(world,mConstraint);



}

function draw() {
  background(255,255,255);  
  EngineUpdate(Engine);
}

function mouseDragged(){
Matter.Body.setPosition(pendulum.body,{ x: mouseX,y:mouseY});

}


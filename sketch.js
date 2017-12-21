let Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body
let engine,world,ground
let particles = []
function setup() {
  createCanvas(500,500)
  engine = Engine.create()
  world = engine.world
  Engine.run(engine)
  ground = Bodies.rectangle(250 , width, height, 40, { isStatic: true })
  World.add(world,ground)
}

function mousePressed() {
  if (particles.length != particles.length+1) {
    particles.push(new Particle(mouseX, mouseY, 40, 40))
  }
}
function draw() {
  background(0);

  for(let i = 0; i < particles.length; i++) {
    particles[i].show()
  }

  fill(255,0,0)
  rect(ground.position.x,ground.position.y,width,40)
}

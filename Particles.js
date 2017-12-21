function Particle(x, y, w, h) {
  let options = {
    friction: 0.5,
    restitution: 0.6
  }
  this.particle = Bodies.rectangle(x, y, w, h, options)
  World.add(world, this.particle)
  this.w = w;
  this.h = h;
  this.show = function() {
    let pos = this.particle.position
    let angle = this.particle.angle

    push()
    noFill()
    stroke(255,0,0)
    translate(pos.x, pos.y)
    rotate(angle)
    rectMode(CENTER)
    rect(0, 0, this.w, this.h)
    pop()
  }
}

function Particle(x, y, hu, firework) {
  this.pos = createVector(x, y);
  this.firework = firework;
  this.lifespan = 255;
  this.hu = hu;

  if (firework) {
    this.vel = createVector(0, random(-17, -5));
  } else {
    // this velocity creates a ring explosion
    // changing vectors applied to these particles here
    // could allow you to design shape fireworks, ie hearts, etc!
    this.vel = p5.Vector.random2D();
    // this scales magnitude
    this.vel.mult(random(2, 10));
  }
  this.acc = createVector(0, 0);
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); // zero out acceleration every frame
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    if (!this.firework) {
    strokeWeight(2);
    stroke(hu, 255, 255, this.lifespan)
    // fill(hu, 255, 255, this.lifespan)
  } else {
    strokeWeight(4);
    stroke(hu, 255, 255, 255);
    fill(hu, 255, 255, 255);
  }
    rect(this.pos.x, this.pos.y, 5 , 5);
    point(this.pos.x, this.pos.y)
  }
}

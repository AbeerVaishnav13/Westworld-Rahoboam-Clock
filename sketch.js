let zoff = 0;
let slider;
let r = 0
let noiseMax = 1.8
let phase = 0

let Hr = 0, Min = 0, Sec = 0;

let sec_rad = 240
let min_rad = 200
let hour_rad = 160
let amp = 30

function drawRahoboam() {
  stroke(0);
  strokeWeight(1);
  noFill();
  
  push();
  strokeWeight(12)
  push();
  translate(-70, 0)
  rotate(radians(-20))
  line(0, 70, 0,  -50)
  line(20, 50, 20,  -40)
  pop();
  
  push();
  translate(70, 0)
  rotate(radians(20))
  line(0, 70, 0,  -50)
  line(-20, 50, -20,  -40)
  pop();
  
  push();
  line(0, -20, -33, 42)
  line(0, -20, 33, 42)
  pop();
  pop();

  noiseSeed(0)
  for (let a = 0; a < TWO_PI; a += radians(0.65)) {
    let xoff = map(cos(a + phase), -1, 1, 0, 15);
    let yoff = map(sin(a + phase), -1, 1, 0, 15);
    r = map(noise(xoff, yoff, zoff), 0, 1, 110, 150);
    let x = r * cos(a);
    let y = r * sin(a);
    line(125 * cos(a), 125 * sin(a), x, y)
  }
  
  noiseSeed(1)
  for (let a = 0; a < TWO_PI; a += radians(0.65)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    r = map(noise(xoff, yoff, zoff), 0, 1, 70, 170);
    let x = r * cos(a);
    let y = r * sin(a);
    line(125 * cos(a), 125 * sin(a), x, y)
  }
  
  noiseSeed(2)
  for (let a = 0; a < TWO_PI; a += radians(0.65)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    r = map(noise(xoff, yoff, zoff), 0, 1, 80, 160);
    let x = r * cos(a);
    let y = r * sin(a);
    line(125 * cos(a), 125 * sin(a), x, y)
  }
  
  noiseSeed(3)
  for (let a = 0; a < TWO_PI; a += radians(0.65)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    r = map(noise(xoff, yoff, zoff), 0, 1, 90, 150);
    let x = r * cos(a);
    let y = r * sin(a);
    line(125 * cos(a), 125 * sin(a), x, y)
  }
  
  noiseSeed(4)
  for (let a = 0; a < TWO_PI; a += radians(0.65)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    r = map(noise(xoff, yoff, zoff), 0, 1, 100, 140);
    let x = r * cos(a);
    let y = r * sin(a);
    line(125 * cos(a), 125 * sin(a), x, y)
  }

  noiseSeed(5)
  for (let a = 0; a < TWO_PI; a += radians(0.65)) {
    let xoff = map(cos(a + phase), -1, 1, 0, 1.8*a);
    let yoff = map(sin(a + phase), -1, 1, 0, 1.8*a);
    r = map(noise(xoff, yoff, zoff), 0, 1, 110, 130);
    let x = r * cos(a);
    let y = r * sin(a);
    line(125 * cos(a), 125 * sin(a), x, y)
  }
  
  noiseSeed(6)
  for (let a = 0; a < TWO_PI; a += radians(0.55)) {
    let xoff = map(cos(a + phase), -1, 1, 0, 1.8*a);
    let yoff = map(sin(a + phase), -1, 1, 0, 1.8*a);
    r = map(noise(xoff, yoff, zoff), 0, 1, hour_rad - amp, hour_rad + amp);
    let x = r * cos(a);
    let y = r * sin(a);
    line(hour_rad * cos(a), hour_rad * sin(a), x, y)
  }
  
  noiseSeed(7)
  for (let a = 0; a < TWO_PI; a += radians(0.45)) {
    let xoff = map(cos(a + phase), -1, 1, 0, 1.8*a);
    let yoff = map(sin(a + phase), -1, 1, 0, 1.8*a);
    r = map(noise(xoff, yoff, zoff), 0, 1, min_rad - amp, min_rad + amp);
    let x = r * cos(a);
    let y = r * sin(a);
    line(min_rad * cos(a), min_rad * sin(a), x, y)
  }
  
  noiseSeed(8)
  for (let a = 0; a < TWO_PI; a += radians(0.35)) {
    let xoff = map(cos(a + phase), -1, 1, 0, 1.8*a);
    let yoff = map(sin(a + phase), -1, 1, 0, 1.8*a);
    r = map(noise(xoff, yoff, zoff), 0, 1, sec_rad - amp, sec_rad + amp);
    let x = r * cos(a);
    let y = r * sin(a);
    line(sec_rad * cos(a), sec_rad * sin(a), x, y)
  }
  
  phase += 0.003;
  zoff += 0.01;
}

function drawHand(r) {
  let x1 = 0, y1 = 0, x2 = 0, y2 = 0;
  for(let a = radians(-20); a < radians(20); a += radians(0.65)) {
    x1 = r * cos(a);
    y1 = r * sin(a);
    y2 = abs(35/a * sin(a))
    x2 = (r+y2) * cos(a)
    line(x1, y1, x2, y2)
  }
}

function drawClock() {
  stroke(0);
  strokeWeight(1);
  noFill();
  
  push();
  rotate(-HALF_PI-radians(8.5))
  // Seconds display
  let secAngle = map(Sec, 0, 60, 0, TWO_PI);
  push();
  rotate(secAngle + radians(1.5));
  drawHand(sec_rad);
  pop();
  
  // Minute display  
  let minAngle = map(Min, 0, 60, 0, TWO_PI) + secAngle/60;
  push();
  rotate(minAngle);
  drawHand(min_rad);
  pop();
  
  // Hours display
  let hourAngle = map(Hr % 12, 0, 12, 0, TWO_PI) + minAngle/12;
  push();
  rotate(hourAngle - radians(1.5));
  drawHand(hour_rad);
  pop();
  
  pop();
}

function setup() {
  createCanvas(550, 550);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  
  Hr = hour()
  Min = minute()
  Sec = second()
  
  drawRahoboam();
  drawClock();
}
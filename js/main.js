var stars = [];
var density = 600;
var starImage;

function setup() { 
  createCanvas(600, 400);
  capture = createCapture(VIDEO);
  capture.hide();
	for(var i=0;i < density;i++){
		var pos = {
			x: random(-width, width),
			y: random(-height, height),
			z: random(width)
		}
		stars[i] = new Star(pos, 5, 20);
	}
} 

function draw() { 
	background(50);
	image(capture, 0, 0);
	translate(width/2, height/2);
	stars.map(star => {
		star.move()
		star.show();
	});
}

class Star{
	constructor(pos, radius, speed){
		this.pos = pos;
		this.radius = radius;
		this.speed = speed;
	}
	
	show(){
				
		var sx = map(this.pos.x/this.pos.z, 0, 1, 0, width);
		var sy = map(this.pos.y/this.pos.z, 0, 1, 0, height);
		
		noStroke();
		ellipse(sx, sy, this.radius, this.radius);
	}
	
	move(){
		this.pos.z -= this.speed;
		if(this.pos.z < 1) {
			this.pos.x = random(-width, width);
			this.pos.y = random(-height, height);
			this.pos.z = width;
		}
	}
}
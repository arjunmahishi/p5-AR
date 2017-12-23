var stars = [];
var density = 100;
var snowImage;
var snowSize = 20;

function preload(){
	snowImage = loadImage("assets/images/snow.jpg");
}

function setup() { 
  createCanvas(window.innerWidth, window.innerHeight);
  capture = createCapture(VIDEO);
  capture.hide();
	for(var i=0;i < density;i++){
		var pos = {
			x: random(0, width),
			y: random(0, height)
		}
		var speed = random(5, 10);
		stars[i] = new Star(pos, snowSize, speed);
	}
} 

function draw() { 
	background(50);
	image(capture, 0, 0, width, height);
	// translate(width/2, height/2);

	if(stars.length < 5){
		var pos = {
			x: random(0, width),
			y: 0
		}
		var speed = random(5, 10);
		stars.push(new Star(pos, 5, speed));
	}

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
		noStroke();
		// ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
		image(snowImage, this.pos.x, this.pos.y, this.radius, this.radius);
	}
	
	move(){
		this.pos.y = this.pos.y > height ? 0 : this.pos.y + this.speed;
	}
}
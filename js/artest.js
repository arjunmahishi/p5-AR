var capture, pos, speed = 10;
function setup(){
	createCanvas(window.innerWidth, window.innerHeight);
	capture = createCapture(VIDEO);
	capture.hide();
	pos = {
		x: 0,
		y: height/2
	}
}

function draw(){
	background(50);
	image(capture, 0, 0, width, height);
	ellipse(pos.x, pos.y, 50, 50);
	pos.x += speed;
	if(pos.x > width){
		speed *= -1;
	}
	if(pos.x < 0){
		speed *= -1;
	}
	// pos.y ++;
}
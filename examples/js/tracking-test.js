var colors;
var capture;
var trackingData;
var cameraConfig; 

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    console.log("mobile detected");
    cameraConfig = {
        audio: false,
        video: {
            facingMode: {
                exact: "environment"
            }
        }
    }
}else{
    console.log("desktop detected");
    cameraConfig = {
        audio: false,
        video:{

        }
    }
}


function setup() {
    createCanvas(windowWidth,windowHeight)

    // capture = createCapture(VIDEO); //capture the webcam
    capture = createCapture(cameraConfig);
    capture.position(0,0) //move the capture to the top left
    capture.style('opacity', 0.5)// use this to hide the capture later on (change to 0 to hide)...
    capture.id("myVideo"); //give the capture an ID so we can use it in the tracker below.
    capture.size(window.innerWidth, window.innerHeight);
    // capture.hide()

    colors = new tracking.ColorTracker(['cyan', 'yellow']);
    tracking.track('#myVideo', colors); // start the tracking of the colors above on the camera in p5

    //start detecting the tracking
    colors.on('track', function(event) { //this happens each time the tracking happens
        trackingData = event.data // break the trackingjs data into a global so we can access it with p5
    });

}

function draw() {
    noFill();
    stroke(0);
    strokeWeight(4);
    textSize(32);
    if(trackingData){ //if there is tracking data to look at, then...
        clear();

        for (var i = 0; i < trackingData.length; i++) { //loop through each of the detected colors
            rect(trackingData[i].x,trackingData[i].y,trackingData[i].width,trackingData[i].height);
            fill(0);
            text(trackingData[i].color, trackingData[i].x,trackingData[i].y)
        }
    }
}
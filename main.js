function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.position(700,400);
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    image(video,0,0,300,300);
}
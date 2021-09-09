function setup(){
canvas=createCanvas(450,400)
video=createCapture(VIDEO)
canvas.center()
video.hide()          
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
song1=""
song2=""
function preLoad(){
song1=loadSound("music.mp3")
song2=loadSound("favourite.mp3")
}
function play(){
song1.play()
song2.play()
}
function draw(){
image(video,0,0,450,400)
}
function modelLoaded(){
    console.log("modelLoaded")
}
function gotPoses(){
    console.log(results)
}

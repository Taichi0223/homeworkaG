var nose_x = 0;
var nose_y = 0;
var left_x = 0;
var right_x = 0;
var fontsize = 50;
var fontsizehalf = 0;


function setup(){
    video = createCapture(VIDEO);
    canvas = createCanvas(640,480);
    canvas.position(1067,153);
    posenet = ml5.poseNet(video,Success);
    posenet.on("pose",ml5posenet);
}

function preload(){
    
}

function draw(){
    background("lightblue");
    document.getElementById("idid").innerHTML = fontsize;
    textSize(fontsize);
    console.log(fontsize);
    fill("red");
    text("Hello World", nose_x - fontsize, nose_y);
    
}

function Success(){
    console.log("Posenet is working correctly");
}

function ml5posenet(results){
if(results.length > 0){
    //console.log(results);

    nose_x = results[0].pose.nose.x;
    nose_y = results[0].pose.nose.y;
    left_x = results[0].pose.leftWrist.x;
    right_x = results[0].pose.rightWrist.x;
    fontsize = ((left_x - right_x).toFixed(0))/2;
    //console.log("Nose X : " + nose_x + " & Y : "+ nose_y + "Left Wrist X : "+ left_x + " & Right Wrist X : "+ right_x + " Difference : "+ fontsize);
   ;
}
}
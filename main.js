status = ""; 
objects = [];


function setup(){
    canvas = createCanvas(600,400);
    canvas.position(400,150);
    video = createCapture(VIDEO);
    video.size(600,400);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", ml);
    document.getElementById("stat").innerHTML = "Status : - Detecting Objects ";

}

function ml(){
    console.log("modelLoaded");
    status = true ;
   
}

function gotResult(error,result){
     if(error){
         console.log(error);
     }
        console.log(result);
        objects = result;

}

function draw(){
    image(video,0,0,600,400);
    if(status != ""){
        r = random(255);
        g = random(255);
        b = random(255);
        objectDetector.detect(video , gotResult);
        for(i = 0; i < objects.length; i++){
        document.getElementById("stat").innerHTML = "Status : - Objects Detected ";
        document.getElementById("noo").innerHTML = "No. Of Object(s) Dectected are :  " + objects.length;
        fill(r,g,b);
        text(objects[i].label + "" , objects[i].x + 15 , objects[i].y + 15);
        noFill();
        stroke(r,g,b);
        rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
    }     
    }
}

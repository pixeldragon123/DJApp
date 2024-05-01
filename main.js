function setup(){
    canvas = createCanvas(600,500)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    model = ml5.poseNet(video, modelLoaded);
    model.on("pose" , showResult)
}

function modelLoaded(){
    console.log("model loaded")
}
lwx = 0
lwy = 0
rwx = 0
rwy = 0


function preload(){
    song1 = loadSound("baixo.mp3")
    song2 = loadSound("ultra.mp3")
    song3 = loadSound("yum.mp3")

}

function draw(){
    image(video, 0, 0, 600, 500);
    fill("yellow");
    stroke("yellow");
    circle(lwx, lwy , 20);
    circle(rwx, rwy , 20);
    

}

function play(){
    song1.setVolume(0.5);
    song1.rate(1);
    song1.play();

}
function pause(){
    song1.stop();
}

function showResult(results)
{
    if(results.length > 0){
        console.log(results);
        lwx = results[0].pose.leftWrist.x;
        lwy = results[0].pose.leftWrist.y;
        console.log("lwx = " + lwx + "lwy = " + lwy)

        rwx = results[0].pose.rightWrist.x;
        rwy = results[0].pose.rightWrist.y;
        console.log("rwx = " + rwx + "rwy = " + rwy)



    }
}


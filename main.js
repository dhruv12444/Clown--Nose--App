nose_X=0;
nose_Y=0;
clown_nose="";

function preload(){
   clown_nose = loadImage('https://i.postimg.cc/3NLdQD3r/clownnose.png');
}
 function setup()
 {
    canvas = createCanvas(300,300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on ('pose', gotPoses);
 }
 function modelLoaded(){
   console.log('PoseNet is Intialized');
 }

 function gotPoses(results)
{
   if(results.length > 0)
   {
      console.log(results);
      nose_X = results[0].pose.nose.x;
      nose_Y = results[0].pose.nose.y;
      console.log("nose_x =" + nose_X);
      console.log("nose_y=" + nose_Y);
   }
}
 

 function draw(){
image(video, 0, 0, 300, 300);
image(clown_nose, nose_X-10, nose_Y-10, 30, 30);
 }

 function take_snapshot()
 {
    save("myFilterImage.png");
 }
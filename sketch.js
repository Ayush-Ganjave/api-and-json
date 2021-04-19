const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    getBackgroundImg()

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
// write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var responseJson = await response.json()
console.log(responseJson)
var dateTime = responseJson.datetime
var hour = dateTime.slice(11,13)
if(hour>=6 && hour<=8){
    bg="PRO_C_32_Template_main/sunrise2.png"
}
else if(hour>=8 && hour>=10){
    bg="PRO_C_32_Template_main/sunrise3.png"
}
else if(hour>=10 && hour>=12){
    bg="PRO_C_32_Template_main/sunrise4.png"
}
else if(hour>=12 && hour>=16){
    bg="PRO_C_32_Template_main/sunrise6.png"
}
else if(hour>=4 && hour>=18){
    bg="PRO_C_32_Template_main/sunrise7.png"
}
else if(hour>=18 && hour>=19){
    bg="PRO_C_32_Template_main/sunrise10.png"
}
else if(hour>=19 && hour>=0){
    bg="PRO_C_32_Template_main/sunrise11.png"
}
else if(hour>=0 && hour>=6){
    bg="PRO_C_32_Template_main/sunrise12.png"
}
backgroundImg=loadImage(bg)
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}

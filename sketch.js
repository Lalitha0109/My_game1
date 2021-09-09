
var ground;
var tiger,tiger_animation;
var gameState=1;
var bg;
var helicopter,helicopter_img;
var start;
function preload(){
   backgroundStory=loadImage("background_story.png");
   background_level1=loadImage("bg2.png");
   helicopter_img=loadAnimation("aeroplane.png","aeroplane.png","aeroplane.png","blast.png");
   tiger_animation=loadAnimation("Tiger animation1.png","Tiger animation 2.png","Tiger animation 3.png");
}

function setup() {
   createCanvas(displayWidth,displayHeight);
   bg=createSprite(displayWidth/2,displayHeight/2,800,40);
   bg.addImage(backgroundStory);
   bg.scale=2;
   helicopter=createSprite(displayWidth/4,displayHeight/3,20,20);
   helicopter.addAnimation("helicopter",helicopter_img);
   helicopter.scale=0.5;
   start=createSprite(displayWidth-200,displayHeight-200,50,50);
   

  
}

function draw() {
   background(180);
   if(gameState===1){

   }
   if (mousePressedOver(start)){
      gameState=2;

      
   }
   if (gameState===2){
      bg.addImage(background_level1);
      bg.scale=0.9;
      //bg.x=displayWidth/3;
      bg.velocityX=-5;
      helicopter.visible=false;
      start.visible=false;
      if(bg.x<100){
         bg.x=displayWidth/2+200;
      }
      
      
   }
   drawSprites();
  
     
   }
   
   
    
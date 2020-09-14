var monkey , monkey_running,ground,bananaGroup,Obstacle;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var SurvivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400); 
  monkey=createSprite(200,240,40,40);
monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.2;
  
  ground=createSprite(200,300,1200,10);
  ground.velocityX=-4;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  SurvivalTime=0;
}


function draw() {  
background(180);
  if(ground.x<0){
   ground.x=ground.width/2;    
  }  
  if(monkey.isTouching(bananaGroup)){
    SurvivalTime=SurvivalTime+10;
    banana.destroy();
  }
  if (keyDown("space") && monkey.y > 230) {
     monkey.velocityY = -14;
      }
  monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
  
 if(monkey.isTouching(obstacleGroup)){
 bananaGroup.destroyEach();
 obstacleGroup.destroyEach();
 bananaGroup.setVelocityXEach(0); 
 obstacleGroup.setVelocityXEach(0);
 SurvivalTime=0;
 monkey.velocityX=0;  
 }
  
      Banana()
   Obstacle()
  
  text("Survival Time: " + SurvivalTime, 300, 50);
SurvivalTime = SurvivalTime + Math.round(getFrameRate()/ 61);
  drawSprites();
}
function Banana(){
if(frameCount % 100 === 0){
banana=createSprite(430,120,30,40);
banana.addImage(bananaImage);
banana.scale=0.15;
banana.velocityX=-4;  
  banana.lifetime=100;
  bananaGroup.add(banana);
}
}
  function Obstacle(){
    if(frameCount % 150 === 0){
 obstacle=createSprite(400,270,30,30); 
  obstacle.addImage(obstacleImage);
 obstacle.scale=0.14;
  obstacle.velocityX=-6;
      obstacleGroup.add(obstacle);
}
  }
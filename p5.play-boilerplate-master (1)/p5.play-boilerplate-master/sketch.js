var boy , boyImg
var bg , bgImg
var ground
var obstacle1,obstacle1Img
var obstacleGroup
var score =0




function preload(){
boyImg = loadAnimation("boy2.gif")
bgImg = loadImage("Road.jpg")
obstacle1Img = loadImage("obstacle1.png")

}
function setup()
{
  createCanvas(1000,500);
  bg = createSprite(200,100,2000,500);
  bg.addImage(bgImg)
  bg.velocityX = -4
  bg.scale = 3;
  boy = createSprite(50,480,50,50)
  boy.addAnimation ("running",boyImg)
  boy.scale = 0.5
  ground = createSprite(50,490,2000,10)
  ground.visible = false;
  obstacleGroup = new Group()
  

}









function draw() 
{
  background(51);
  if(bg.x<100){
  bg.x = bg.width/2
  }


  if(keyDown("space")&& boy.y>=376.25){
    boy.velocityY = -10;

  }
  

  
  boy.velocityY = boy.velocityY + 0.1
  boy.collide(ground)
  console.log(boy.y)
  drawSprites()
  spawnobstacle()
   

  if(obstacleGroup.isTouching(boy)){
    boy.velocityY = 0;
    bg.velocityX = 0;
    obstacleGroup.destroyEach()
    obstacleGroup.setVelocityEach(0)
  
  }
  text("Score"+score,700,350);
  score = score +4
  
}

function spawnobstacle(){


if(frameCount%260==0){



  var obstacle = createSprite(800,450,20,100)
  obstacle.addImage(obstacle1Img)
  obstacle.scale = 0.2
  obstacle.velocityX = -2
  obstacleGroup.add(obstacle)
  

}}
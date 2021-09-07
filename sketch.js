var bg,bgImg;
var player, shooterImg, shooter_shooting,zombie,zombie_Img;


function preload(){
  
  shooterImg = loadImage("shooter_2.png")
  shooter_shooting = loadImage("shooter_3.png")

  bgImg = loadImage("bg.jpeg")

  zombie_Img=loadImage("zombie.png");
  //zombie2=loadImage("zombie2.jpg");
  //zombie3=loadImage("zombie3.jpg");
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombie=createSprite(displayWidth-100,displayHeight-250)
   zombie.addImage(zombie_Img)
   zombie.scale=0.2
   zombie.velocityX=-4.5


   //zombie2=createSprite(displayWidth-100,displayHeight-250)
   //zonbie2.addImage(zombie2)
   //zombie2.scale=0.2
   //zombie2.velocityX=-3.5

   //zombie3=createSprite(displayWidth-100,displayHeight-250)
   //zombie3.addImage(zombie3)
   //zombie3.scale=0.2
   //zombie3.velocityX=-3

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

drawSprites();

}

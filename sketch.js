var path,boy,cash,diamonds,jewllery,shourd;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg;
var treasureCollection = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

//Game States
var PLAY = 1;
var END = 0;
var gameState=1;

function preload(){
 //pre-load image
 pathImg=loadImg("path.png");
 boyImg=loadAnimition("Runner-1.png","Runner-2.png");
 cashImg=loadImg=loadImage("cash.png")
 diamondsImg=loadImage("cash.png");
 jwelleryImg=loadImage("jwell.png");
 swordImg=loadImage("sword.png");
 endImg=loadAnimation("gameOver.png");

}

function setup(){
  createCanvas(windowWidth,windowHeight);
  
 //moving background
 path=createSprite(width/2,200);
 path.addImage(pathImg);
 path.velocityY=15;

 //creating boy running
 boy=createSprite(width/2,height-20,20,20);
 boy.addAnimation("BoyRunning",boyImg);
 boy.scale=0.08;

 cashG=new Group();
 diamondsG=new Group();
 jwelleryG=new Grpup();
 shordGroup=new Group();
  
}

function draw() {

  if (gameState===PLAY) {
    background(0);
    boy.x=World.mouseX;
    
    edges=createEdgeSprite();
    boy.collide(edges);

    //reset background
    if (path.y > height) {
      path.y = height/2;
    }
    createCash();
    createDiamonds();
    createJwellery();
    createSword();

    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+150;
    }
    else if (diamondsG.isTouching(boy)) {
      diamondG.destroyEach();
      treasureCollection=treasureCollection+100;
    }
    else if (jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (swordGroup.isTouching(boy)) {
      gameState=END;
      boy.changeAnimation("boyRunning",endImg);
      boy.x=200;
      boy.y=300;
      boy.scale=0.6;    
      
      cashG.destroyEach();
      diamondsG.destroyEach();
      jwelleryG.destroyEach();
      swordGroup.destroyEach();

      cashG.setVelocityYEach(0);
      diamondsG.setVelocityYEach(0);
      jwelleryG.setVelocityYEach(0);
      swordGroup.setVelocityYEach(0);
    }
  }
  drawSprites();
  textSize(20);
  fill(225);
  text("Treasure:"+treasureCollection,150,30);
}

function createCash() {
  if (World.frameCount % 200 == 0){
    var cash = createSprite(Math.round(random(50,width-350),40,10,10));
    cash.addImage(cashImg);
    cash.scale=0.12;
    cash.velocityY = 3;
    cash.lifetime=150;
    cashG.add(cash);
  }
}

function createDiamonds() {
  if (World.frameCount % 410 == 0) {
    var jwellery = createSprite(Math.round(random(50,width-350),40,10,10));
    jwellery.addImage(jwelleryImg);
    jwellery.scale=0.13;
    jwellery.velocityY=3;
    jwellery.lifetime=150;
    jwelleryG.add(jwellery); 
  }
}

function createSword() {
  if (World.frameCount % 530 == 0) {
    var sword = createSprite(Math.round(random(50,width-350),40,10,10));
    sword.addImage(swordImg);
    sword.scale=0.1;
    sword.velocityY=3;
    sword.lifetime=150;
    swordGroup.add(sword);
  }
}

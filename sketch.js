var bg , bgImg , logo , logoImg ,start,startImg,rules,rulesImg,text,textImg,x,xImg;
var gameState="start";
var plr,plrImg;
var obstacle,o1,o2,o3,o4,o5,o6,o7,o8,o9,o10,o11,o12;
var score=0;

function preload(){
  bgImg = loadImage("images/bg.jpg");
  logoImg = loadImage("images/logo.png");
  startImg = loadImage("images/start.png");
  rulesImg = loadImage("images/rules.png");
  textImg = loadImage("images/ruletext.png");
  xImg = loadImage("images/x.png");
  plrImg = loadImage("images/shuttle.png");
  o1 = loadImage("images/mercury.png");
  o2 =  loadImage("images/venus.png");
  o3 = loadImage("images/earth.png");
  o4 = loadImage("images/mars.png");
  o5 = loadImage("images/jupiter.png");
  o6 = loadImage("images/saturn.png");
  o7 = loadImage("images/uranus.png");
  o8 = loadImage("images/neptune.png");
  o9 = loadImage("images/asteroid.png");
  o10 = loadImage("images/meteor.gif");
  o11 = loadImage("images/rocket.png");
  o12 = loadImage("images/satellite.png");
}

function setup() {
  createCanvas(1250,600);

  //background
  bg=createSprite(width/2,height/2,1000,500);
  bg.addImage(bgImg);
  bg.scale=0.8;

  //logo
  logo = createSprite(width/2,120);
  logo.addImage(logoImg);
  logo.scale=1.3;

  //start
  start=createSprite(width/2,350);
  start.addImage(startImg);
  start.scale=0.25;

  //rules logo
  rules = createSprite(width/2,500);
  rules.addImage(rulesImg);
  rules.scale=0.3;

  //rules text
  text = createSprite(width/2,height/2);
  text.addImage(textImg);
  text.scale=1.3;

  //cross for rules
  x=createSprite(970,50);
  x.addImage(xImg);
  x.scale=0.3;

  //player shuttle
  plr = createSprite(250,height/2);
  plr.addImage(plrImg);
  plr.scale=0.3;

  score=0;
}

function draw() {
  background(0); 

  var edges=createEdgeSprites();

  //making background infinite
  bg.velocityX=-3;
  if(bg.x<500){
    bg.x=width/2;
  }

  if(gameState=="start"){

    logo.visible=true;
    start.visible=true;
    bg.scale=1.1;
    rules.visible=true;
    text.visible=false;
    x.visible=false;
    plr.visible=false;

    if(mousePressedOver(start)){
      gameState="play";
    }

    if(mousePressedOver(rules)){
      gameState="rules";
    }

  }else if(gameState=="rules"){

    logo.visible=false;
    start.visible=false;
    bg.scale=1.1;
    rules.visible=false;
    text.visible=true;
    x.visible=true;
    plr.visible=false;

    if(mousePressedOver(x)){
      gameState="start";
    }

  }else if(gameState=="play"){

    logo.visible=false;
    start.visible=false;
    bg.scale=0.8;
    rules.visible=false;
    text.visible=false;
    x.visible=false;
    plr.visible=true;

    plr.y=World.mouseY;
    plr.collide(edges);
    plr.setCollider("rectangle",0,0,450,300);
    //plr.debug=true;

    //score=score + Math.round(getFrameRate()/100);
    //text("Score"+score,200,20);

    spawnObstacles();

  }else if(gameState=="end"){

    logo.visible=false;
    start.visible=false;
    bg.scale=1.1;
    rules.visible=false;
    text.visible=false;
    x.visible=false;
    plr.visible=false;

  };
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%100===0){
    obstacle=createSprite(1250,100);
    var r=Math.round(random(1,12));
    obstacle.lifetime=400;
    switch(r){
      case 1:obstacle.addImage(o1);
             obstacle.scale=0.04;
             obstacle.y=random(100,500);
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 2:obstacle.addImage(o2);
             obstacle.scale=0.4;
             obstacle.y=random(100,500);
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 3:obstacle.addImage(o3);
             obstacle.scale=0.4;
             obstacle.y=random(100,500);
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 4:obstacle.addImage(o4);
             obstacle.scale=0.2;
             obstacle.y=random(100,500);
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 5:obstacle.addImage(o5);
             obstacle.scale=0.15;
             obstacle.y=random(100,500);
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 6:obstacle.addImage(o6);
             obstacle.y=random(100,500);
             obstacle.scale=0.2;
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 7:obstacle.addImage(o7);
             obstacle.y=random(100,500);
             obstacle.scale=0.2;
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 8:obstacle.addImage(o8);
             obstacle.y=random(100,500);
             obstacle.scale=0.4;
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 9:obstacle.addImage(o9);
             obstacle.scale=0.25;
             obstacle.y=random(100,500);
             obstacle.velocityX=-3;
             obstacle.velocityY=0;
             break;
      case 10:obstacle.addImage(o10);
             obstacle.velocityX=-10;
             obstacle.velocityY=2;
             break;
      case 11:obstacle.addImage(o11);
              obstacle.scale=0.15;
             obstacle.y=500;
             obstacle.velocityX=-10;
             obstacle.velocityY=-3;
             break;
      case 12:obstacle.addImage(o12);
              obstacle.scale=0.075;
              obstacle.y=random(100,500); 
              obstacle.velocityX=-3;
              obstacle.velocityY=0;
              break;
      default:break;
    }
  }
}

var fixedRect, object1;

function setup() {
  createCanvas(1200,800);
  gameobject1 = createSprite(400, 100, 50, 80);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
 movingRect.debug = true;

  movingRect.velocityY = -5;
  gameobject1.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,gameobject1)

  drawSprites();
}

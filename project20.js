var thickness,wall
var bullet,weight,speed

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall = createSprite(1200, 200, thickness, height/2);

  car = createSprite(50,200,10,10);

 
}

function draw() {
  
  background(0);  
  
  wall.shapecolour(80,80,80);

  bullet.velocityX=speed;
  bullet = weight;

  if (hasCollided(bullet,wall)){
bullet.velocityX=0;
var damage = 0.5 * weight * speed* speed/(thickness * thickness * thickness);

if (damage>10) {
    wall.shapeColor=colour(255,0,0);
}
if (damage<10) {
    wall.shapeColor=colour(0,255,0);
}
  }

  drawSprites();
  }

  function hasCollided(Lbullet,Lwall){
      bulletRightEdge=lbullet.x+lbullet.width;
      wallLeftEdge=lwall.x;
      if (bulletRightEdge>=wallLeftEdge) {
          return true;
      }
      return false;
  }
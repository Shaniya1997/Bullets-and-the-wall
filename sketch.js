var bullet , wall , speed , weight , thickness;


function setup() {
  createCanvas(1500,400);

  speed = random(55,90)
  weight = random(400,1500)
  thickness = random(22,83)

  bullet = createSprite(50,200,50,20)

  bullet.velocityX  = speed;

  wall = createSprite(1200 , 200 , thickness , height/2)

}

function draw() {
  background(0);
  
  if(collided(bullet , wall))
  {
    bullet.velocityX = 0;
    var d = 0.5 * weight * speed * speed /  (thickness * thickness * thickness);
    if(d>10)
    {
      bullet.shapeColor = "red";
    }
    if(d < 10)
    {
      bullet.shapeColor = "green";
    }
   }
  
  drawSprites();
}

function collided(b , w)
{
  br = b.x + b.width;
  wl = w.x;
  if(br >= wl)
  {
    return true;
  }
  return false;
}
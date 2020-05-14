

//Souritro take thickness too, and make a separate function for checking
// whtr they are colliding or not , same like isTouching function() we have done in class.
// Pass values inside that function .

//So here i hv created a func called "IsCollided ()"  outside draw and call it inside draw.
//calculate damage and show colors.



//SOURITRO CODE
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*var car,wall,damage, speed, weight;



function setup() {
  createCanvas(1600,400);
 //input= createInput();


  car= createSprite(50, 100, 100,50);
  wall= createSprite(1500,100,50,150);
  wall.shapeColor= color(80,80,80);
 
 


  speed= Math.round(random(50,200));
  weight= Math.round(random((400,1500)))

  damage= (0.5*weight*speed*speed)/22500;

}
function draw(){
  background(0);
  text(`speed:${speed}`,50,50);
  text(`weight:${weight}`, 80,350);
  car.setVelocity(speed,0);
car.debug=true;
wall.debug=true

  if(wall.x-car.x<= car.width/2+wall.width/2){
      car.velocityX=0
    //text(`damage${damage}`,382,382);
    //car.VelocityY=0
      if(damage<100){
        car.shapeColor= color(0,255,0);
        text("Car is GOOD",800,200);
      }
      else if(damage>100 &&  damage<180){
        car.shapeColor = color(230,230,0);
        text("Car is AVERAGE",800,200);

      }
      else if(damage>180){
        car.shapeColor=color(255,0,0);
        text("Car is Dangerous",800,200);

      }
    }
  drawSprites();

}
*/

 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//FINAL CODE


 var wall, thickness;
 var bullet,speed, weight;
 
 function setup() {
   createCanvas(1500, 400);
 
   speed=random(223,321)
   weight=random(30,52)
 
 
   thickness=random(10,100)

     bullet=createSprite(50, 200, 50,5);  
     bullet.velocityX = speed;
     bullet.shapeColor=color(255);


     wall=createSprite(1200, 200, thickness, height/2);  
     wall.shapeColor=color(230,230,230);
   
 }
 
 
 function draw() {
   background(0);  
   
   if(IsCollided(bullet, wall))//calling this func inside if 
   {
     bullet.velocityX=0;  


     var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);
     //damage=( 0.5 * wt* spd*2)/ thickness*3
     
   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);
     
   }
   if(damage<10)
   {
     wall.shapeColor=color(0,255,0);
   }
   
   }
  drawSprites();
  
 }
 
 //definition of the function 
 function IsCollided(bullt, lwall)
 {
   bulletRightEdge=bullt.x +bullt.width;
   wallLeftEdge=lwall.x;

   //same like what we hv done in class
   if (bulletRightEdge>=wallLeftEdge)
   {
     return true
   }
   return false;
 }
 
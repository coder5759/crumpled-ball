class Paper {
  
    constructor(x, y){
      
       var options = {
           isStatic:false,
           restitution : 0.3,
           density : 0.4,
           friction : 1
       }

       this.x=x;
       this.y=y;
       this.image = loadImage("paper.png")
       this.body = Matter.Bodies.circle(x, y, 50,options)
       this.radius = 50
       Matter.World.add(world,this.body);
     
    }

    display(){
        var pos = this.body.position
    /*push()    
       translate(pos.x,pos.y);
       rotate(this.body.angle);
       fill("green"); 
       //stroke("cyan");
    pop()*/
    imageMode(RADIUS)
    image(this.image,pos.x,pos.y,50,50)
    }

}


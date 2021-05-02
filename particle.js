class Particles{

    constructor(x,y,radius){
       
      var options={
          restitution:0.4,
          density:0.5,
          isStatic:false
          
      }
      this.radius=radius;
      this.body=Matter.Bodies.circle(x,y,this.radius,options);
      this.color=color(random(0,255),random(0,255),random(0,255))
      
     // this.height=height;
      World.add(world,this.body);
    }
     
   display() {
       
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
   }
}
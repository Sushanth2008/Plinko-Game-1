class Plinko{
    constructor(x,y){
    var options={
        restitution:1,
        friction:0,
        isStatic:true
    }
    this.body=Bodies.circle(x,y,10,options);
    World.add(world,this.body);
    }

    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push ()
     noStroke()
     translate(pos.x,pos.y)
     rotate(angle);
     ellipseMode(RADIUS);
     fill("white")
     ellipse(0,0,10,10)
     pop ()
    }
}
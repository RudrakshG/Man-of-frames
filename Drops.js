class Drops{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r; 
        this.body= Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(this.body)

    }
    display(){
        var pos=this.body.position;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y,this.width,this.height);
        fill(255,0,255)
		ellipseMode(RADIUS)
        pop();
    }
}
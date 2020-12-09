class Umbrella{
    constructor(x,y,w,h){
        var prop={
            isStatic:true
        }
        this.umbrella = Bodies.rectangle(x,y,w,h,prop)
        this.width = w;
        this.height = h;
        World.add(world,this.umbrella)
    }

    display(){
        var pos = this.umbrella.position;
        rect(pos.x,pos.y,this.width,this.height)
        animation(walking,pos.x,pos.y,this.width,this.height)
    }
}
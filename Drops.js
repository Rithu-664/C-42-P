class Drops {
    constructor(x,y,r){
        var prop={
          isStatic:false,
          friction: 0.1,
          density: 0.2
        }
      this.drop = Bodies.circle(x,y,r,prop)
      this.r=r
      World.add(world,this.drop)
    }

    updatePosition(){
      if(this.drop.position.y > height){
        Matter.Body.setPosition(this.drop,{x:random(0,400),y:random(0,400)})
        Matter.Body.setVelocity(this.drop,{y:6})
      }

    }

    drawEllipse(){
       var drop = createSprite(this.drop.position.x,this.drop.position.y,10,10);
        drop.addImage(dropImg);
        drop.velocityY = 7
       
    }

}
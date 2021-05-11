class Paper{
  constructor(x,y,radius){
var options ={
isStatic: false
,'restititution':0.3,
'friction':0.5

,'density':1.2



}

this.body=Bodies.circle(x,y,radius,option)
this.radius=radius
this.imageloadImage("paper.png")
world.add(world,this.body)

  }
 display(){
ellipseMode(RADIUS)

fill("yellow")


circle(this.body.position.x,this.body.position.y,this.radius)


 }

}
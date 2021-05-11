class Ground{
constructor(x,y,width,height){
var options ={

   ' isStatic': true,
    'restititution':0,
    'friction':0,
    density:0,
}
this.body = Bodies.rectangle(x,y,width,height,options)
this.width = width
this.height = height

world.add(world,this.body)
}
display(){
rectMode(CENTER)

fill(255)

rec(this.body.position.x,this.body.position.y,this.width,this.height)


}

}
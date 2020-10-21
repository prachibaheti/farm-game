class Cow{

constructor(x,y,width,height){
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.height = height;
this.width = width;
World.add(world,this.body);
this.image = loadImage("cow.png");
}

display(){
    image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}

}
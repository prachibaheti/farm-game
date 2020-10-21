class Horse{

constructor(x,y,width,height) {
   var options = {
       isStatic:true
   }
   this.body = Bodies.rectangle(x,y,width,height,options);
   this.width = width;
   this.height = height
   this.image = loadImage("horse.png");
}

display(){
    image(this.image,this.body.position.x, this.body.position.y, this.height, this.width);
}









    
}
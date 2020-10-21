class Machine{

constructor() {
    var options={
        isStatic: true
    }
    this.body = Bodies.rectangle(60,300,90,90,options);
      this.width = 90;
      this.height = 90;
      World.add(world, this.body);
    this.image = loadImage("machine.png");  
}

display(){
    image(this.image, 60, 300, 90, 90);
}
}

class Ground{
  constructor(x,y,width,height){
    var options ={ isStatic: true}
    
    this.body =  Bodies.rectangle(x,y,width,height,options);
    World.add(myWorld,this.body);
    this.width = width;
    this.height = height;
  }
  display()
  {
    
      rectMode(CENTER);
      fill("brown")
      strokeWeight(1);
      rect(this.body.position.x, this.body.position.y,this.width, this.height);
  }


}

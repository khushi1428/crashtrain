class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
       // this.chain1 = loadImage('sprites/sling1.png');
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);
    }
   
   display(){
        //image(this.chain,200,20);
        
     
            var pointA = this.chain.bodyA.position;
            var pointB = this.chain.bodyB.position;
           fill("blue")
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}1
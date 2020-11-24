
    class chain{
        constructor(firstBody,secondBody){
            this.options = {bodyA: firstBody, bodyB: secondBody,stiffness:0.4, length:10}
            this.chain = Constraint.create(this.options)
            World.add(world,this.chain)

        }

display(){
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    strokeWeight(5)
line(pointA.x,pointA.y,pointB.x,pointB.y);
}
    }

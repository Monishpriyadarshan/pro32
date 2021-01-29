class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){
    
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            stroke(48,22,8);
            if(pointA.x<220){
                line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
            }
           else{
            line(pointA.x+25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20,pointA.y,pointB.x+30,pointB.y);
           }
            pop()
        }
    }
    
}
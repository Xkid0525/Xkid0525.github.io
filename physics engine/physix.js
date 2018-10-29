
// function density(obj)
// {
//     let volume=4/3*22/7*Math.pow(obj.r,3);
//     return obj.mass/volume;
// }
let canvas=document.getElementsByClassName("myCanvas")[0];
class Physix
{
canvasDefine(c)
{
    canvas=document.getElementsByClassName(c)[0];
}
randomRange(x,y)
{
    return Math.floor(Math.random()*(y-x)+x);
}

randomX()
{

    let x = Math.floor(Math.random() * canvas.width);
    if (x < 30) {
    x = 30;
    } else if (x + 30 > canvas.width) {
    x = canvas.width - 30;
    }
    return x;
}

randomY()
{
    let y = Math.floor(Math.random() * canvas.height);
    if (y < 30) {
    y = 30;
    } else if (y + 30 > canvas.height) {
    y = canvas.height - 30;
    }
    return y;
}

randomColor()
{
    let color=['red','blue','yellow','orange','green','pink'];
    return color[this.randomRange(0,5)];
}

randomRadius()
{
    let r = this.randomRange(10,40);
    return r;
}
randomH()
{
    let r = this.randomRange(10,40);
    return r;

}
randomW()
{
    let r = this.randomRange(10,40);
    return r;

}

randomWidth()
{
    let r = this.randomRange(10,80);
    return r;
}

randomHeight()
{
    let r = this.randomRange(10,80);
    return r;
}

moveToMouse(obj,e)
{
    obj.x=e.clientX || e.pageX;
    obj.y=e.clientY || e.pageY;
    return obj;
}

gravityAttract(obj1,obj2)
{
    
    var xdiff1=obj2.x-obj1.x;
    var ydiff1=obj2.y-obj1.x;
    var dirX1=xdiff1/Math.abs(xdiff1);
    var dirY1=ydiff1/Math.abs(ydiff1);
    var xdiff2=obj1.x-obj2.x;
    var ydiff2=obj1.y-obj2.x;
    var dirX2=xdiff2/Math.abs(xdiff2);
    var dirY2=ydiff2/Math.abs(ydiff2);

        obj1.dx=dirX1*obj1.dx;
        obj1.dy=dirY1*obj1.dy;
        obj2.dx=dirX2*obj2.dx;
        obj2.dy=dirY2*obj2.dy;
        
    
}
force(obj,e)
{
    
}
velocity(obj,velx,vely)
{
    obj.x+=velx;
    obj.y+=vely;
    return obj;

}

gravityAdd(particle,factor)
{
    return particle.dy += factor;
}

frictionAdd(particle)
{
    particle.dy *= 0.99;
    particle.dx *= 0.99;
    return particle;

}
//context.rotate rotates the entire canvas, then alter the velocities, then revert them back
//this makes the other objects on the canvas to rotate accordingly, and hence messes with 
//the position of all other objects too
//so to rotate only the object we need to alter the velocities wrt the angle 
rotate(velocity, angle) 
{
    const rotatedVelocities = {
        x: Math.floor(velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle)),
        y: Math.floor(velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle))
    };

    return rotatedVelocities;
}


angle()
{
    const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

}

distance(x1,y1,x2,y2)
{
    // console.log("calculating")
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}

resolveCollision(particle, otherParticle) 
{
    
    
    // console.log("resolving")
    const xVelocityDiff = particle.dx - otherParticle.dx;
    const yVelocityDiff = particle.dy - otherParticle.dy;
    particle.velocity={
        x:particle.dx,y:particle.dy
    }
    otherParticle.velocity={
        x:otherParticle.dx,y:otherParticle.dy
    }
    

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = this.rotate(particle.velocity, angle);
        const u2 = this.rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: Math.floor(u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2)), y: Math.floor(u1.y) };
        const v2 = { x: Math.floor(u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2)), y: Math.floor(u2.y) };

        // Final velocity after rotating axis back to original location
        const vFinal1 = this.rotate(v1, -angle);
        const vFinal2 = this.rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.dx = vFinal1.x;
        particle.dy = vFinal1.y;

        otherParticle.dx = vFinal2.x;
        otherParticle.dy = vFinal2.y;

        
    }
}
}
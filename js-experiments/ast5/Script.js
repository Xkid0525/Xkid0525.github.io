var canvas=document.getElementsByTagName('canvas')[0];
var cd=canvas.getContext('2d');
var container={x:0,y:0,width:1200,height:600};
var circles;
var score=0;
var div=document.getElementsByClassName('score')[0];
var newEle=document.createElement('div');
newEle.style.position="relative"
newEle.style.right="30px";
newEle.style.width="50px";
newEle.style.height="50px";
var text=document.createTextNode("SCORE:"+score);
newEle.appendChild(text);
div.appendChild(newEle);

canvas.addEventListener('click', function(e){
    console.log('clicked');

    const pos = {
        x: e.clientX,
        y: e.clientY
    };
    mouse = pos;

    // console.log(mouse);
    
    for (var i = 0 ; i < circles.length; i++ )
    {
        if ( mouse.x && mouse.y && circles[i].x && circles[i].y)
        {
            var mouseDistance = distance(circles[i].x,circles[i].y,mouse.x,mouse.y);
            if (mouseDistance < circles[i].r)
            {
                score++;
                div.removeChild(newEle);
                text=document.createTextNode("SCORE:"+score);
                newEle.appendChild(text);
                div.appendChild(newEle);
            destroy(i);
            }
                
        }
        
    }


})

function destroy(i)
{
    circles.splice(i,1);
}


function rotate(velocity, angle) 
{
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

function resolveCollision(particle, otherParticle) 
{
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

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
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
}

function init(){
    circles=[];
    for(i=0;i<50;i++)
    {
        var r=randomRange(15,50);
        var x=randomRange(r,container.width-r);
        var y=randomRange(r,container.height-r);
        
        const color='blue';
        if(i!==0)
        {
            
            for(j=0;j<circles.length;j++)
            {
                if((distance(x,y,circles[j].x,circles[j].y)-(r+r))<0)
                    {
                        x=randomRange(r,container.width-r);
                        y=randomRange(r,container.height-r);
                        j=-1;
                    }
            }
        }
        circles.push(new circle(x,y,r,color));
    }
    console.log(circles);
}
function randomRange(x,y){
    return Math.floor(Math.random()*(y-x)+x);
}

function distance(x1,y1,x2,y2)
{
    return Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
}

function circle(x,y,radius,color)
{
    this.x=x;
    this.y=y;
    this.velocity={
        x:randomRange(-4,8),
        y:randomRange(-4,8)
    }
    this.r=radius;
    this.mass=1;
    this.color=color;
    this.update=function(circles)
    {
        this.draw();
        for(i=0;i<circles.length;i++)
        {
            if(this==circles[i]){
                continue;
            }
            if((distance(this.x,this.y,circles[i].x,circles[i].y)-(this.r+this.r))<0)
                    {
                        resolveCollision(this,circles[i]);
                    }
            
        }
        if(this.x -this.r <=0 || this.x+this.r >=container.width){
            this.velocity.x=-this.velocity.x;
        }
        if(this.y -this.r <=0 || this.y+this.r >=container.height){
            this.velocity.y=-this.velocity.y;
        }
        this.x+=this.velocity.x;
        this.y+=this.velocity.y;
        
    };
    this.draw = function()
    {
        
        cd.beginPath();
        cd.arc(this.x,this.y,this.r,0,Math.PI * 2, false);
        cd.fillStyle=this.color;
        cd.fill();
        cd.closePath();
        
        
    };
    
    
        
        
}

function animate()
{
    requestAnimationFrame(animate);
    cd.clearRect(0,0,canvas.width,canvas.height);
    circles.forEach(circle =>
    {
        circle.update(circles);
    });
}
init();
animate();

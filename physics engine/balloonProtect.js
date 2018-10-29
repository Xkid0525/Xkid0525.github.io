


const can = document.getElementsByClassName("myCanvas")[0];
const cd= can.getContext("2d");
let counter=0;
class GameWorld extends World
{
    constructor()
    {
        super(can);
        this.score=0;
        this.balloon=this.createBalloon();
        this.protector=this.createProtect();
        this.obstacleArray=[];
        //this.obstacleSpawner();
    }
    obstacleSpawner()
    { 
        for(let i=0;i<8;i++)
        {
            this.createObstacle();
            
        }
    }
    createBalloon()
    {
        const temp= new Circle(200,400,20,super.randomColor(),cd);
        temp.dx = 0;
        temp.dy = 0;
        temp.type='circle';
        temp.vdx=temp.dx;
        temp.vdy=temp.dy;
        return temp;
    }

    createObstacle()
    {
        let selector=super.randomRange(1,3);
            //.log(selector);
        
            let temp;
            temp=this.spawnRect();
            // switch (selector)
            // {   
                
            //     case 1:
            //         temp=this.spawnRect();
            //         break;    
            //     case 2:
            //         temp=this.spawnTri();
            //         break;
            // }
            this.obstacleArray[this.obstacleArray.length] = temp;
            //.log(this.obstacleArray);    
    }
    moveObstacle()
    {
        for(let obj in this.obstacleArray)
        {
            this.obstacleArray[obj].x+=this.obstacleArray[obj].dx;
            this.obstacleArray[obj].y+=this.obstacleArray[obj].dy;
            
        }

    }


    spawnRect()
        {
            const temp=new rectangle(super.randomX(),0,super.randomRange(10,30), super.randomRange(10,30),super.randomColor(),cd);
            temp.dx=super.randomRange(-4,4);
            if(temp.dx==0)
            {
                temp.dx=super.randomRange(1,4);
            }
            temp.dy=super.randomRange(1,5);
            temp.vdx=temp.dx;
            temp.vdy=temp.dy;
            for(var j=0;j<this.obstacleArray.length;j++)
                {
                    if(this.obstacleArray.length==0)
                    {
                        break;
                    }
                    switch(this.obstacleArray[j].type)
                    {
                        case 'rectangle':
                            if(super.rectRectCollision(temp,this.obstacleArray[j])==true)
                            {
                                //.log('rect rect Coll spawn');
                                temp.x=super.randomRange(temp.w,can.width-temp.w);
                                
                                j=-1;
                            }
                            break;

                        case 'triangle':
                            if(super.triRectColliding(temp,this.obstacleArray[j])==true)
                            {
                                //.log('tri rect Coll spawn');
                                temp.x=super.randomRange(temp.w,can.width-temp.w);
                                
                                    j=-1;
                            }
                            break;
                    }
                }
            return temp;

        }
    spawnTri()
        {
        const temp=new triangle(super.randomX(),0,super.randomH(),super.randomW(),super.randomColor(),cd)
        temp.dx=super.randomRange(0,4);
        temp.dy=super.randomRange(0,5);
        temp.vdx=temp.dx;
        temp.vdy=temp.dy;
        for(let j=0;j<this.obstacleArray.length;j++)
            {
                if(this.obstacleArray.length== 0)
                {
                    break;
                }
                switch(this.obstacleArray[j].type)
                {
                    case 'triangle':
                        if(super.triTriColliding(temp,this.obstacleArray[j])==true)
                        {
                            //.log('tri tri Coll spawn');
                            temp.x=super.randomRange(temp.b,can.width-temp.b);
                            
                            j=-1;

                        }
                        break;

                    case 'rectangle':
                        if(super.triRectColliding(this.obstacleArray[j],temp)==true)
                        {
                            //.log('tri rect Coll spawn');
                            temp.x=super.randomRange(temp.b,can.width-temp.b);
                            
                            j=-1;
                        }
                        break;
                }
            }
            return temp;
        }
    collisionUp(particle1,particle2)
    {
        if(particle1.type=='circle' && particle2.type=='rectangle')
        {

        }
    }
    createProtect()
    {
        const temp= new Circle(200,250,10,'white',cd);
        temp.dx = 5;
        temp.dy = 8;
        temp.vdx=temp.dx;
        temp.vdy=temp.dy;
        return temp;
    }

    followCursor(e)
    {
        // if(this.protectorCollisionChecker()==false)
        super.moveToMouse(this.protector,e);
        // //.log("moveto"+e.clientX+","+e.clientY);


    }

    drawBalloon()
    {
        this.balloon.draw();

    }
    drawObstacles()
    {
        for (let obj in this.obstacleArray) 
        {
            
             
            if(this.protectorCollisionChecker()==false)
            {
                super.gravityAdd(this.obstacleArray[obj],0.02)
            }
            this.protectorCollisionChecker();
            this.balloonCollisionChecker();
            this.obstacleArray[obj].draw();

        }
        

    }
    drawProtector()
    {
        this.protector.draw();
        this.protectorCollisionChecker();

    }

    balloonCollisionChecker()
    {
        for (let obj in this.obstacleArray) 
        {
        let check=super.rectCircleColliding(this.balloon,this.obstacleArray[obj]);
        
        if(check==true)
        {
            console.log("gameOver");
            paused=!paused;
        }
        }
    }
    protectorCollisionChecker()
    {
        for (let obj in this.obstacleArray) 
        {
        let check=super.rectCircleColliding(this.protector,this.obstacleArray[obj]);
        if(check==true)
        {
            super.resolveCollision(this.protector,this.obstacleArray[obj]);
            return true;
        }
        }
        return false;

    }
    wallCollisionObstacles()
    {
        let ball;
        for(let obj in this.obstacleArray)
        {
            ball=this.obstacleArray[obj];
            switch (ball.type)
            {
                case 'circle':
                    if (ball.x - ball.r + ball.dx < 0 || ball.x + ball.r + ball.dx > this.canvas.width) 
                    {
                        ball.dx *= -1;
                    }
                    if (ball.y - ball.r + ball.dy < 0) 
                    {
                        ball.dy *= -1;
                    }
                    if (ball.y - ball.r < 0) 
                    {
                        ball.y = ball.r;
                    }
                    if (ball.x + ball.r > this.canvas.width) 
                    {
                        ball.x = this.canvas.width - ball.r;
                    }
                    if (ball.x - ball.r < 0) 
                    {
                        ball.x = ball.r;
                    }
                    break;
        
                case 'rectangle':
                    if(ball.x - ball.w + ball.dx < 0 || ball.x + ball.w + ball.dx > this.canvas.width)
                    {
                        ball.dx *= -1;
                    }
                    if(ball.y - ball.h + ball.dy < 0)
                    {
                        ball.dy *= -1;
                    }
                    if (ball.y - ball.h < 0) 
                    {
                        ball.y = ball.h;
                    }
                    if (ball.x + ball.w > this.canvas.width) 
                    {
                        ball.x = this.canvas.width - ball.w;
                    }
                    if (ball.x - ball.w < 0) 
                    {
                        ball.x = ball.w;
                    }
                    break;

                case 'triangle':
                    if(ball.x + ball.dx < 0 || ball.x + ball.b + ball.dx > this.canvas.width)
                    {
                        ball.dx *= -1;
                    }
                    if(ball.y + ball.dy < 0)
                    {
                        ball.dy *= -1;
                    }
                    if (ball.y < 0) 
                    {
                        ball.y = ball.l;
                    }
                    if (ball.x + ball.b > this.canvas.width) 
                    {
                        ball.x = this.canvas.width - ball.b;
                    }
                    if (ball.x < 0) 
                    {
                        ball.x = ball.b;
                    }
                    break;
                        
            }
        }
    }
    checkOldObstacles()
    {
        for(let obj in this.obstacleArray)
        {
            switch(this.obstacleArray[obj].type)
            {
                case 'rectangle':
                    if(this.obstacleArray[obj].y + this.obstacleArray[obj].h + this.obstacleArray[obj].dx < this.canvas.height)
                    {
                        this.score++;
                        return false;

                    }

                
                case 'triangle':
                if(this.obstacleArray[obj].y + this.obstacleArray[obj].h + this.obstacleArray[obj].dx < this.canvas.height)
                {
                    this.score++;
                    return false;

                }


            }
        }
        return true;

    }
    
    

    draw()
    {
        if(clearCanv==true) this.clearCanvas();
            this.canvasBackground();
        if(!paused)
        {
            this.moveObstacle();
        }
        if(this.checkOldObstacles())
        {
            this.obstacleSpawner();
        }
        
        
        this.drawBalloon();
        this.drawProtector();
        this.drawObstacles();
        this.protectorCollisionChecker();
        this.wallCollisionObstacles();
        super.ballCollision(this.obstacleArray);
        this.balloonCollisionChecker();
        requestAnimationFrame(this.draw.bind(this));
        
    }

    

}

let world1=new GameWorld();
world1.draw();

document.addEventListener("mousemove", mouseMover);
function mouseMover(e)
{        
    world1.followCursor(e);
    world1.protectorCollisionChecker();
}
document.addEventListener("keydown", keyDownHandler);
    function keyDownHandler(event)
    {        
        if(event.keyCode === 71)
        { //g
            gravitySwitch= !gravitySwitch;
        }
        else if (event.keyCode === 80) 
        { // p
            paused = !paused;
        }
        else if (event.keyCode === 67) 
        { // c
            w.spawn();
        }
    }


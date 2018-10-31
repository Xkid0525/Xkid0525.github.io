
let can = document.getElementsByClassName("myCanvas")[0];
let cd= can.getContext("2d");
let counter=0;
let gameover=false;
let gmo=false;
class GameWorld extends World
{
    constructor()
    {
        super(can);
        
        this.balloon=this.createBalloon();
        this.protector=this.createProtect();
        this.obstacleArray=[];
        this.score=0;
        this.level=0;
        this.pinArray=[];
        //this.obstacleSpawner();
    }
    obstacleSpawner()
    { 

        for(let i=0;i<(5+this.level*2);i++)
        {
            this.createObstacle();
            
        }
        this.pinArrayAssign();
    }
    clearCanvas()
    {
        cd.clearRect( 0 ,  0 , can.width , can.height );
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
    moveProtector()
    {
        this.protector.x+=this.protector.dx;
        this.protector.y+=this.protector.dy;
    }


    spawnRect()
        {
            const temp=new rectangle(super.randomX(),0,super.randomRange(10,20), super.randomRange(20,30),super.randomColor(),cd);
            temp.dx=super.randomRange(-4,4);
            if(temp.dx==0)
            {
                temp.dx=super.randomRange(1,4);
            }
            temp.dy=super.randomRange(1,this.level);
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
    // collisionUp(particle1,particle2)
    // {
    //     if(particle1.type=='circle' && particle2.type=='rectangle')
    //     {

    //     }
    // }
    createProtect()
    {
        const temp= new Circle(200,250,12,'gray',cd);
        temp.dx = 0;
        temp.dy = 0;
        temp.vdx=temp.dx;
        temp.vdy=temp.dy;
        return temp;
    }

    followCursor(e)
    {
        let xmouse=e.clientX;
        let ymouse=e.clientY;

        this.protector.dx=(xmouse-this.protector.x)*0.125;
        this.protector.dy=(ymouse-this.protector.y)*0.125;
        if(Math.abs(this.protector.dx)+Math.abs(this.protector.dy)<0.1)
        {
            this.protector.x=xmouse;
            this.protector.y=ymouse;
        }
        else 
        {
            this.protector.x+= this.protector.dx;
            this.protector.y+= this.protector.dy;
        }
        // if(this.protectorCollisionChecker()==false)
        // super.moveToMouse(this.protector,e);
        // //.log("moveto"+e.clientX+","+e.clientY);


    }

    drawBalloon()
    {
        // this.balloon.draw();
        const balloonImg=new Image();
        balloonImg.src='images/balloon.png';
    
        cd.drawImage(balloonImg,this.balloon.x-this.balloon.r,this.balloon.y-this.balloon.r,this.balloon.r+this.balloon.r,70);

    }

    pinArrayAssign()
    {
        for(let i=0;i<this.obstacleArray.length;i++)
        {
        const pinType=super.randomRange(1,6);
        this.pinArray[i]=pinType;
        }
    }
    drawObstacles()
    {
        const temp=new Image();
        
        
        for (let i=0; i<this.obstacleArray.length;i++) 
        {
            switch (this.pinArray[i])
            {
                case 1:
                    temp.src='images/pin.png';
                break;
                case 2:
                temp.src='images/pushpinBlue.png';
                break;
                case 3:
                temp.src='images/pushpinGreen.png';
                break;
                case 4:
                temp.src='images/pushpinOrange.png';
                break;
                case 5:
                temp.src='images/pushpinYellow.png';
                break;         
            }
            if(this.protectorCollisionChecker()==false)
            {
                super.gravityAdd(this.obstacleArray[i],0.02)
            }
            this.protectorCollisionChecker();
            this.balloonCollisionChecker();
            //cd.drawImage(temp,this.obstacleArray[i].x,this.obstacleArray[i].y,this.obstacleArray[i].w,this.obstacleArray[i].h);
            this.obstacleArray[i].draw();


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
            gameover=true;
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
    obstacleRemove()
    {
        if(this.checkOldObstacles()==false)
        {
         
            for(let i=0; i< this.obstacleArray.length;i++)
                {
                    if(this.obstacleArray[i].y+this.obstacleArray[i].h>=this.canvas.height)
                    {
                        this.score+=1;
                        this.obstacleArray.splice(i,1);
                        console.log(this.obstacleArray);
                        
                    }
                }
        }
    }


    checkOldObstacles()
    {
        
        if(this.obstacleArray[0]==null)
        {
            this.level++;
            return true;
        }
        else
        {
            return false;
            
                // switch(this.obstacleArray[i].type)
                // {
                //     case 'rectangle':
                //         if(this.obstacleArray[i].y + this.obstacleArray[i].h + this.obstacleArray[i].dx < this.canvas.height)
                //         {
                            
                //             return false;

                //         }

                    
                //     case 'triangle':
                //     if(this.obstacleArray[i].y + this.obstacleArray[i].h + this.obstacleArray[i].dx < this.canvas.height)
                //     {
                        
                //         return false;

                //     }


                // }
            
        }

    }
    
    gameOver()
    {
        this.clearCanvas();
        cd.font="50px Arial";
        cd.strokeText("GAME OVER",50,50);
        cd.font="20px Arial";
        cd.strokeText("Click anywhere on the screen to restart",30,100);
        cd.font="30px Arial";
        let finalScore=this.score;
        if(Number.isNaN(finalScore))
        {
            finalScore=0;
        }
        cd.strokeText("Score:"+finalScore,150,250);
        gmo=true;
    }

    draw()
    {
        if(clearCanv==true) this.clearCanvas();
            this.canvasBackground();
        if(!paused)
        {
            this.moveObstacle();
            this.moveProtector();
        }
        if(this.checkOldObstacles())
        {
            this.obstacleArray=[];
            
            this.obstacleSpawner();
        }
        
        cd.font="20px Arial";
        cd.strokeText("Level:"+(this.level),10,50);
        cd.font="20px Arial";
        let finalScore=this.score;
        if(Number.isNaN(finalScore))
        {
            finalScore=0;
        }
        cd.strokeText("Score:"+finalScore,10,70);
        this.drawBalloon();
        this.drawProtector();
        this.drawObstacles();
        this.protectorCollisionChecker();
        this.wallCollisionObstacles();
        this.obstacleRemove();
        super.ballCollision(this.obstacleArray);
        this.balloonCollisionChecker();
        if(!gameover)
        requestAnimationFrame(this.draw.bind(this));
        else
        this.gameOver();
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
document.addEventListener("click", function()
{
    if(gmo==true)
    {
        location.reload();  
    }
}
);
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


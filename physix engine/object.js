
class ObjectMaker extends Physix
{
    constructor()
        {
            super();
        }

    findAreaTri(x1,y1,x2,y2,x3,y3)
        {
            const area=Math.abs(0.5*(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)));
            return area;
        }

    triCircleColliding(circle,tri)
        {
            const a1=this.findAreaTri(circle.x+circle.r,circle.y,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a2=this.findAreaTri(circle.x+circle.r,circle.y,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a3=this.findAreaTri(circle.x+circle.r,circle.y,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const a4=this.findAreaTri(circle.x,circle.y+circle.r,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a5=this.findAreaTri(circle.x,circle.r+circle.y,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a6=this.findAreaTri(circle.x,circle.r+circle.y,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const a11=this.findAreaTri(circle.x-circle.r,circle.y,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a12=this.findAreaTri(circle.x-circle.r,circle.y,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a13=this.findAreaTri(circle.x-circle.r,circle.y,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const a14=this.findAreaTri(circle.x,circle.y-circle.r,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a15=this.findAreaTri(circle.x,circle.r-circle.y,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a16=this.findAreaTri(circle.x,circle.r-circle.y,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const area1=a1+a2+a3;
            const area2=a4+a5+a6;
            const area11=a11+a12+a13;
            const area12=a14+a15+a16;
            if(area1<=tri.area || area2 <= tri.area || area11<=tri.area || area12 <= tri.area)
            {
                return true;
            }
            return false;
        }

    triRectColliding(rect,tri)
        {
            const a1=this.findAreaTri(rect.x,rect.y,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a2=this.findAreaTri(rect.x,rect.y,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a3=this.findAreaTri(rect.x,rect.y,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const a4=this.findAreaTri(rect.x-rect.w,rect.y,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a5=this.findAreaTri(rect.x-rect.w,rect.y,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a6=this.findAreaTri(rect.x-rect.w,rect.y,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const a7=this.findAreaTri(rect.x,rect.y-rect.h,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a8=this.findAreaTri(rect.x,rect.y-rect.h,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a9=this.findAreaTri(rect.x,rect.y-rect.h,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const a10=this.findAreaTri(rect.x-rect.w,rect.y-rect.h,tri.x,tri.y,tri.x,tri.y+tri.l);
            const a11=this.findAreaTri(rect.x-rect.w,rect.y-rect.h,tri.x,tri.y+tri.l,tri.x+tri.b,tri.y+tri.l);
            const a12=this.findAreaTri(rect.x-rect.w,rect.y-rect.h,tri.x+tri.b,tri.y+tri.l,tri.x,tri.y);

            const area1=a1+a2+a3;
            const area2=a4+a5+a6;
            const area3=a7+a8+a9;
            const area4=a10+a11+a12;
            if(area1<=tri.area || area2 <= tri.area || area3<=tri.area || area4<=tri.area)
            {
                return true;
            }

            return false;    
        }

    triTriColliding(tri1,tri2)
        {
            const a1=this.findAreaTri(tri1.x,tri1.y,tri2.x,tri2.y,tri2.x,tri2.y+tri2.l);
            const a2=this.findAreaTri(tri1.x,tri1.y,tri2.x,tri2.y+tri2.l,tri2.x+tri2.b,tri2.y+tri2.l);
            const a3=this.findAreaTri(tri1.x,tri1.y,tri2.x+tri2.b,tri2.y+tri2.l,tri2.x,tri2.y);

            const a4=this.findAreaTri(tri1.x,tri1.y+tri1.l,tri2.x,tri2.y,tri2.x,tri2.y+tri2.l);
            const a5=this.findAreaTri(tri1.x,tri1.y+tri1.l,tri2.x,tri2.y+tri2.l,tri2.x+tri2.b,tri2.y+tri2.l);
            const a6=this.findAreaTri(tri1.x,tri1.y+tri1.l,tri2.x+tri2.b,tri2.y+tri2.l,tri2.x,tri2.y);

            const a7=this.findAreaTri(tri1.x+tri1.b,tri1.y+tri1.l,tri2.x,tri2.y,tri2.x,tri2.y+tri2.l);
            const a8=this.findAreaTri(tri1.x+tri1.b,tri1.y+tri1.l,tri2.x,tri2.y+tri2.l,tri2.x+tri2.b,tri2.y+tri2.h);
            const a9=this.findAreaTri(tri1.x+tri1.b,tri1.y+tri1.l,tri2.x+tri2.b,tri2.y+tri2.l,tri2.x,tri2.y);

            const area1=a1+a2+a3;
            const area2=a4+a5+a6;
            const area3=a7+a8+a9;
            if(area1<=tri2.area || area2 <= tri2.area || area3<=tri2.area)
            {
                return true;
            }

            return false;
        }

    rectCircleColliding(circle,rect)
        {
            const distX = Math.abs(circle.x - rect.x-rect.w/2);
            const distY = Math.abs(circle.y - rect.y-rect.h/2);
            if (distX > (rect.w/2 + circle.r)) { return false; }
            if (distY > (rect.h/2 + circle.r)) { return false; }
            if (distX <= (rect.w/2)) { return true; } 
            if (distY <= (rect.h/2)) { return true; }
            const dx=distX-rect.w/2;
            const dy=distY-rect.h/2;
            return (dx*dx+dy*dy<=(circle.r*circle.r));
        }

    rectRectCollision(rect1, rect2) 
        {
            const dx = (rect2.x + rect2.w *0.5) - (rect1.x + rect1.w *0.5);// x difference between centers
            const dy = (rect2.y + rect2.h *0.5) - (rect1.y + rect1.h *0.5);// y difference between centers
            const aw = (rect1.w + rect2.w) * 0.5;// average width
            const ah = (rect1.h + rect2.h) * 0.5;// average height
                /* If either distance is greater than the average dimension there is no collision. */
            if (Math.abs(dx) > aw || Math.abs(dy) > ah) 
                return false;
            return true;
                
        }
        
    createCirle(objArray,canvas,cd) 
        {
            const temp = new Circle(super.randomX(), super.randomY(), super.randomRadius(), super.randomColor(),cd);
            temp.dx = super.randomRange(-10,10);
            temp.dy = super.randomRange(-10,10);
            temp.vdx=temp.dx;
            temp.vdy=temp.dy;

                for(let j=0;j<objArray.length;j++)
                {
                    switch(objArray[j].type)
                    {
                        case 'circle':
                            if((super.distance(temp.x,temp.y,objArray[j].x,objArray[j].y)-(temp.r+objArray[j].r))<0)
                            {
                                //.log('circle circle Coll spawn');
                                temp.x=super.randomRange(temp.r,canvas.width-temp.r);
                                temp.y=super.randomRange(temp.r,canvas.height-temp.r);
                                j=-1;
                            }
                            break;
                            
                        case 'rectangle':
                            if(this.rectCircleColliding(temp,objArray[j])==true)
                            {
                                //.log('circle rect Coll spawn');
                                temp.x=super.randomRange(temp.r,canvas.width-temp.r);
                                temp.y=super.randomRange(temp.r,canvas.height-temp.r);
                                j=-1;
                            }
                            break;

                        case 'triangle':
                            if(this.triCircleColliding(temp,objArray[j])==true)
                            {
                                //.log('tri circle Coll spawn');
                                temp.x=super.randomRange(temp.r,canvas.width-temp.r);
                                temp.y=super.randomRange(temp.r,canvas.height-temp.r);
                                j=-1;
                            }
                            break;
                            
                    }
                }
            
            return temp;
        }

    createTri(objArray,canvas,cd)
        {
            const temp = new triangle(super.randomX(), super.randomY(), super.randomHeight(), super.randomWidth(), super.randomColor(),cd);
            temp.dx = super.randomRange(-10,10);
            temp.dy = super.randomRange(-10,10);
            temp.vdx=temp.dx;
            temp.vdy=temp.dy;
            
                for(let j=0;j<objArray.length;j++)
                {
                    switch(objArray[j].type)
                    {
                        case 'triangle':
                            if(this.triTriColliding(temp,objArray[j])==true)
                            {
                                //.log('tri tri Coll spawn');
                                temp.x=super.randomRange(temp.b,canvas.width-temp.b);
                                temp.y=super.randomRange(temp.l,canvas.height-temp.l);
                                j=-1;

                            }
                            break;

                        case 'rectangle':
                            if(this.triRectColliding(objArray[j],temp)==true)
                            {
                                //.log('tri rect Coll spawn');
                                temp.x=super.randomRange(temp.b,canvas.width-temp.b);
                                temp.y=super.randomRange(temp.l,canvas.height-temp.l);
                                j=-1;
                            }
                            break;

                        case 'circle':
                            if(this.triCircleColliding(objArray[j],temp)==true)
                            {
                                //.log('tri circle Coll spawn');
                                temp.x=super.randomRange(temp.b,canvas.width-temp.b);
                                temp.y=super.randomRange(temp.l,canvas.height-temp.l);
                                j=-1;
                            }
                            break;
                    }
                }
            
            return temp;
        }

    createRect(objArray,canvas,cd)
        {
            const temp = new rectangle(super.randomX(), super.randomY(), super.randomWidth(), super.randomHeight(),super.randomColor(),cd);
            temp.dx = super.randomRange(-10,10);
            temp.dy = super.randomRange(-10,10);
            temp.vdx=temp.dx;
            temp.vdy=temp.dy;
            
                for(var j=0;j<objArray.length;j++)
                {
                    switch(objArray[j].type)
                    {
                        case 'rectangle':
                            if(this.rectRectCollision(temp,objArray[j])==true)
                            {
                                //.log('rect rect Coll spawn');
                                temp.x=super.randomRange(temp.w,canvas.width-temp.w);
                                temp.y=super.randomRange(temp.h,canvas.height-temp.h);
                                j=-1;
                            }
                            break;

                        case 'circle':
                            if(this.rectCircleColliding(objArray[j],temp)==true)
                            {
                                //.log('rect circle Coll spawn');
                                temp.x=super.randomRange(temp.w,canvas.width-temp.w);
                                temp.y=super.randomRange(temp.h,canvas.height-temp.h);
                                    j=-1;
                            }
                            break;

                        case 'triangle':
                            if(this.triRectColliding(temp,objArray[j])==true)
                            {
                                //.log('tri rect Coll spawn');
                                temp.x=super.randomRange(temp.w,canvas.width-temp.w);
                                temp.y=super.randomRange(temp.h,canvas.height-temp.h);
                                    j=-1;
                            }
                            break;
                    }
                }
            return temp;
        }
}

let turned=false;
let clearCanv=true;
let gravitySwitch=false;
let paused=false;

class World extends ObjectMaker
{
    constructor(canv,val)
    {
        super();
        this.objArray = [];
        
        this.canvas=canv;
        this.cd= this.canvas.getContext("2d");
        
        switch(val)
        {
            case 'circle':
            for (let i = 0; i<10; i++) 
            {
                this.spawnCircle();
            }
            break;

            case 'rectangle':
            for (let i = 0; i<10; i++) 
            {
                this.spawnRectangle();
            }
            break;

            case 'triangle':
            for (let i = 0; i<10; i++) 
            {
                this.spawnTriangle();
            }
            break;

            case 'no':
            for (let i = 0; i<10; i++) 
            {
                this.spawn();
            }
            break;
        }
    }
    // constructor(canv)
    // {
    //     super();
    //     this.objArray = [];
        
    //     this.canvas=canv;
    //     this.cd= this.canvas.getContext("2d");
        
        
    //     for (let i = 0; i<10; i++) 
    //     {
    //         this.spawn();
    //     }
    // }
    clearCanvas()
        {
            this.cd.clearRect(0, 0, canvas.width, canvas.height);
        }
        
    applyGravity (objectArray)
        {
            for (var obj in objectArray) {
                if (objectArray[obj].onGround() == false) {
                    super.gravityAdd(objectArray[obj],0.29);
                    super.bounceAdd(objectArray[obj]);
                }   
            }
        }

    canvasBackground() 
        {
            this.canvas.style.backgroundColor = "rgb(215, 235, 240)";
        }
        
    wallCollision(ball)
        {
            switch (ball.type)
            {
                case 'circle':
                    if (ball.x - ball.r + ball.dx < 0 || ball.x + ball.r + ball.dx > this.canvas.width) 
                    {
                        ball.dx *= -1;
                    }
                    if (ball.y - ball.r + ball.dy < 0 || ball.y + ball.r+ ball.dy > this.canvas.height) 
                    {
                        ball.dy *= -1;
                    }
                    if (ball.y + ball.r > this.canvas.height) 
                    {
                        ball.y = this.canvas.height - ball.r;
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
                    if(ball.y - ball.h + ball.dy < 0 || ball.y + ball.h + ball.dy > this.canvas.height)
                    {
                        ball.dy *= -1;
                    }
                    if (ball.y + ball.h > this.canvas.height) 
                    {
                        ball.y = this.canvas.height - ball.h;
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
                    if(ball.y + ball.dy < 0 || ball.y + ball.l + ball.dy > this.canvas.height)
                    {
                        ball.dy *= -1;
                    }
                    if (ball.y + ball.l > this.canvas.height) 
                    {
                        ball.y = this.canvas.height - ball.l;
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
    ballCollision(objArray) 
        {
            for(let i=0;i<objArray.length;i++)
            {
                for(let j=0;j<objArray.length;j++)
                {   
                    if(objArray[j]===objArray[i])
                    {
                        continue;
                    }
                    if(objArray[j].type=='circle' && objArray[i].type=='circle')
                    {
                        if((super.distance(objArray[j].x,objArray[j].y,objArray[i].x,objArray[i].y)-(objArray[j].r+objArray[i].r))<=0)
                            {
                                //.log('circle circle Coll');
                                super.resolveCollision(objArray[j],objArray[i]);
                            }
                    }
                    else if(objArray[j].type=='rectangle' && objArray[i].type=='circle')
                    {
                        if(super.rectCircleColliding(objArray[i],objArray[j])==true)
                        {
                            //.log('rect circle Coll');
                            super.resolveCollision(objArray[j],objArray[i]);
                        }
                        
                    }
                    else if(objArray[j].type=='circle' && objArray[i].type=='rectangle')
                    {
                        if(super.rectCircleColliding(objArray[j],objArray[i])==true)
                        {
                            //.log('circle rect Coll ');
                            super.resolveCollision(objArray[j],objArray[i]);
                        }   
                    }
                    else if(objArray[j].type=='rectangle' && objArray[i].type=='rectangle')
                    {
                        if(super.rectRectCollision(objArray[j],objArray[i])==true)
                        {
                            //.log('rect rect Coll ');
                            // objArray[j].dx=-objArray[j].dx;
                            // objArray[j].dy=-objArray[j].dy;
                            // objArray[i].dx=-objArray[i].dx;
                            // objArray[i].dy=-objArray[i].dy;
                            super.resolveCollision(objArray[j],objArray[i]);
                        }
                    }
                    else if(objArray[j].type=='triangle' && objArray[i].type=='circle' )
                    {
                        if(super.triCircleColliding(objArray[i],objArray[j])==true)
                        {
                            //.log('tri circle Coll ');
                            super.resolveCollision(objArray[j],objArray[i]);
                        }
                    } 
                    else if(objArray[j].type=='triangle' && objArray[i].type=='rectangle' )
                    {
                        if(super.triRectColliding(objArray[i],objArray[j])==true)
                        {
                            //.log('tri rect Coll ');
                            super.resolveCollision(objArray[j],objArray[i]);
                        }
                        
                    } 
                    else if(objArray[j].type=='triangle' && objArray[i].type=='triangle' )
                    {
                        if(super.triTriColliding(objArray[i],objArray[j])==true)
                        {
                            //.log('tri tri Coll ');
                            super.resolveCollision(objArray[j],objArray[i]);
                        }
                        
                    } 
                    else if(objArray[j].type=='circle' && objArray[i].type=='triangle' )
                    {
                        
                        if(super.triCircleColliding(objArray[j],objArray[i])==true)
                        {
                            //.log('circle tri Coll ');
                            super.resolveCollision(objArray[i],objArray[j]);
                        }
                        
                    }
                    else if(objArray[j].type=='rectangle' && objArray[i].type=='triangle' )
                    {
                        if(super.triRectColliding(objArray[j],objArray[i])==true)
                        {
                            //.log('rect tri Coll ');
                            super.resolveCollision(objArray[i],objArray[j]);
                        }
                        
                    } 
                }
                
            }  
        }
    spawnCircle()
    {
        let temp=super.createCirle(this.objArray,this.canvas,this.cd);
        this.objArray[this.objArray.length] = temp;
    }

    spawnRectangle()
    {
        let temp=super.createRect(this.objArray,this.canvas,this.cd);
        this.objArray[this.objArray.length] = temp;
    }

    spawnTriangle()
    {
        let temp=super.createTri(this.objArray,this.canvas,this.cd);
        this.objArray[this.objArray.length] = temp;
    }

    
    spawn()
        {
            let selector=super.randomRange(1,4);
            //.log(selector);
        
            let temp;
            switch (selector)
            {   
                case 1:
                    temp=super.createCirle(this.objArray,this.canvas,this.cd);
                    break;
                case 2:
                    temp=super.createRect(this.objArray,this.canvas,this.cd);
                    break;    
                case 3:
                    temp=super.createTri(this.objArray,this.canvas,this.cd);
                    break;
            }
            this.objArray[this.objArray.length] = temp;
        }
            
    moveObjects() 
        {
            for (let obj in this.objArray) 
            {
                this.objArray[obj].x += this.objArray[obj].dx;
                this.objArray[obj].y += this.objArray[obj].dy;
            }    
        }

    drawObjects() 
        {
            for (let obj in this.objArray) 
            {
                this.objArray[obj].draw();
            }
        }

    draw() 
        {
            if(clearCanv==true) this.clearCanvas();
            this.canvasBackground();
            // if(paused)
            // {
            //     //.log(objArray);
            // }
            if(!paused)
            {
                if(turned==true && gravitySwitch==false)
                {
                    for (let obj in this.objArray) 
                    {
                        this.objArray[obj].dx = this.objArray[obj].vdx;
                        this.objArray[obj].vy = this.objArray[obj].vdy;
                    }
                    turned=false;
                }

                if (gravitySwitch==true) 
                {
                    this.applyGravity(this.objArray);
                    turned=true;
                }
                this.moveObjects();
            }
            this.drawObjects();
            for(let obj in this.objArray)
            {
                this.wallCollision(this.objArray[obj]);
            }
            
            this.ballCollision(this.objArray);
            requestAnimationFrame(this.draw.bind(this));   
        }
        
    isColliding(particle1,particle2)
        {
            if(particle1.type=='circle' && particle2.type=='circle')
            {
                if((distance(particle1.x,particle1.y,particle2.x,particle2.y)-(particle1.r+particle2.r))<=0)
                    {
                        console.log('circle circle Coll');
                        super.resolveCollision(particle1,particle2);
                        return true;
                    }
            }
            else if(particle1.type=='rectangle' && particle2.type=='circle')
            {
                if(super.rectCircleColliding(particle2,particle1)==true)
                {
                    console.log('rect circle Coll');
                    super.resolveCollision(particle1,particle2);
                    return true;
                }
                
            }
            else if(particle1.type=='circle' && particle2.type=='rectangle')
            {
                if(super.rectCircleColliding(particle1,particle2)==true)
                {
                    console.log('circle rect Coll ');
                    super.resolveCollision(particle1,particle2);
                    return true;
                }   
            }
            else if(particle1.type=='rectangle' && particle2.type=='rectangle')
            {
                if(super.rectRectCollision(particle1,particle2)==true)
                {
                    console.log('rect rect Coll ');
                    // particle1.dx=-particle1.dx;
                    // particle1.dy=-particle1.dy;
                    // particle2.dx=-particle2.dx;
                    // particle2.dy=-particle2.dy;
                    super.resolveCollision(particle1,particle2);
                    return true;
                }
            }
            else if(particle1.type=='triangle' && particle2.type=='circle' )
            {
                if(super.triCircleColliding(particle2,particle1)==true)
                {
                    console.log('tri circle Coll ');
                    super.resolveCollision(particle1,particle2);
                    return true;
                }
        
            } 
            else if(particle1.type=='triangle' && particle2.type=='rectangle' )
            {
                if(super.triRectColliding(particle2,particle1)==true)
                {
                    console.log('tri rect Coll ');
                    super.resolveCollision(particle1,particle2);
                    return true;
                }
                
            } 
            else if(particle1.type=='triangle' && particle2.type=='triangle' )
            {
                if(super.triTriColliding(particle2,particle1)==true)
                {
                    console.log('tri tri Coll ');
                    super.resolveCollision(particle1,particle2);
                    return true;
                }
                
            } 
            else if(particle1.type=='circle' && particle2.type=='triangle' )
            {
                
                if(super.triCircleColliding(particle1,particle2)==true)
                {
                    console.log('circle tri Coll ');
                    super.resolveCollision(particle2,particle1);
                    return true;
                }
                
            }
            else if(particle1.type=='rectangle' && particle2.type=='triangle' )
            {
                if(super.triRectColliding(particle1,particle2)==true)
                {
                    console.log('rect tri Coll ');
                    super.resolveCollision(particle2,particle1);
                    return true;
                }
                
            }
        
        }
} 
// function getMouseCoords()

// 
    




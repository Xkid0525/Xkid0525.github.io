var canvas = document.getElementsByClassName("myCanvas")[0];
var cd= canvas.getContext("2d");
var clearCanv=true;
var objArray = [];

function clearCanvas() {
    cd.clearRect(0, 0, canvas.width, canvas.height);
}
function canvasBackground() {
    canvas.style.backgroundColor = "rgb(215, 235, 240)";
}

function wallCollision(ball) 
{
    if(ball.x + ball.dx < 0 || ball.x + ball.b + ball.dx > canvas.width)
        {
            ball.dx *= -1;
        }
        if(ball.y + ball.dy < 0 || ball.y + ball.l + ball.dy > canvas.height)
        {
            ball.dy *= -1;
        }
        if (ball.y + ball.l > canvas.height) 
        {
            ball.y = canvas.height - ball.l;
        }
        if (ball.y < 0) 
        {
            ball.y = ball.l;
        }
        if (ball.x + ball.b > canvas.width) 
        {
            ball.x = canvas.width - ball.b;
        }
        if (ball.x < 0) 
        {
            ball.x = ball.b;
        }
}

function ballCollision() 
{
    for(i=0;i<objArray.length;i++)
    {
        for(j=0;j<objArray.length;j++)
        { 
            if(objArray[j]===objArray[i])
            {
                continue;
            }
            gravityAttract(objArray[i],objArray[j]);
            if(TriTriColliding(objArray[i],objArray[j])==true)
                {
                    console.log('tri tri Coll ');
                    resolveCollision(objArray[j],objArray[i]);
                }
        }
        wallCollision(objArray[i]);
    }
}

function FindAreaTri(x1,y1,x2,y2,x3,y3)
{
    var area=Math.abs(0.5*(x1*(y2-y3)+x2*(y3-y1)+x3*(y1-y2)));
    return area;
}

function TriTriColliding(tri1,tri2)
{
    var a1=FindAreaTri(tri1.x,tri1.y,tri2.x,tri2.y,tri2.x,tri2.y+tri2.l);
    var a2=FindAreaTri(tri1.x,tri1.y,tri2.x,tri2.y+tri2.l,tri2.x+tri2.b,tri2.y+tri2.l);
    var a3=FindAreaTri(tri1.x,tri1.y,tri2.x+tri2.b,tri2.y+tri2.l,tri2.x,tri2.y);

    var a4=FindAreaTri(tri1.x,tri1.y+tri1.l,tri2.x,tri2.y,tri2.x,tri2.y+tri2.l);
    var a5=FindAreaTri(tri1.x,tri1.y+tri1.l,tri2.x,tri2.y+tri2.l,tri2.x+tri2.b,tri2.y+tri2.l);
    var a6=FindAreaTri(tri1.x,tri1.y+tri1.l,tri2.x+tri2.b,tri2.y+tri2.l,tri2.x,tri2.y);

    var a7=FindAreaTri(tri1.x+tri1.b,tri1.y+tri1.l,tri2.x,tri2.y,tri2.x,tri2.y+tri2.l);
    var a8=FindAreaTri(tri1.x+tri1.b,tri1.y+tri1.l,tri2.x,tri2.y+tri2.l,tri2.x+tri2.b,tri2.y+tri2.h);
    var a9=FindAreaTri(tri1.x+tri1.b,tri1.y+tri1.l,tri2.x+tri2.b,tri2.y+tri2.l,tri2.x,tri2.y);

    var area1=a1+a2+a3;
    var area2=a4+a5+a6;
    var area3=a7+a8+a9;
    if(area1<=tri2.area || area2 <= tri2.area || area3<=tri2.area)
    {
        return true;
    }
    return false;

}

function CreateTri()
{
    var temp = new triangle(randomX(), randomY(), randomH(), randomW(), randomColor());
    temp.dx = randomRange(-10,10);
    temp.dy = randomRange(-10,10);
    temp.type = 'triangle';
    temp.vdx=temp.dx;
    temp.vdy=temp.dy;
    return temp;
}

for (i = 0; i<2; i++) 
{
    var temp=CreateTri();
    objArray[objArray.length] = temp;

}
function moveObjects() 
{
    for (var obj in objArray) 
    {
        objArray[obj].x += objArray[obj].dx;
        objArray[obj].y += objArray[obj].dy;
    }    
}

function drawObjects() 
{
    for (var obj in objArray) 
    {
        objArray[obj].draw();
    }
}

function draw() 
{
    if(clearCanv) clearCanvas();
    canvasBackground();
    moveObjects();
    drawObjects();

    ballCollision();
    requestAnimationFrame(draw);
}

draw();

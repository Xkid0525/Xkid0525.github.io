var canvas=document.getElementsByTagName('canvas')[0];
var canvasDraw=canvas.getContext('2d');
var container = {x:0,y:0,width:1200,height:600};
xCollections=[200,240,280,320,360,400,440,480,520,560,600,640,680,720,760,800];
yCollections=[200,250,300,350,400,450];
radiusCollection=[30,35,50,75,80];
colorPalette = [25, 100, 170, 230, 290, 360, 420, 500, 610];
velocityPalette = [-2, -1, 1, 8];


function circleMake()
{
    this.x = xCollections[Math.floor(Math.random()*xCollections.length)];
    this.y = yCollections[Math.floor(Math.random()*yCollections.length)];
    this.r = radiusCollection[Math.floor(Math.random()*radiusCollection.length)];
    this.color = colorPalette[Math.floor(Math.random()*colorPalette.length)];
    this.vx = velocityPalette[Math.floor(Math.random()*velocityPalette.length)];
    this.vy = velocityPalette[Math.floor(Math.random()*velocityPalette.length)];
    console.log("object spawned"+this.color);
    console.log("radius"+ this.r);

    this.circleInit = function(){
        canvasDraw.fillStyle = this.color ;
        canvasDraw.beginPath();
        canvasDraw.arc(this.x,this.y,this.r,0,2*Math.PI,false);
        canvasDraw.fill();
        // console.log("Entered");
    }
    for(var i=0;i<circles.length;i++)
    {
        
        if(circleDistance(this.x,this.y,circles[i].x,circles[i].y)-(this.r+circles[i].r)< 0){
            console.log("spawn smae color:"+circles[i].color+"  "+this.color);
            this.x = xCollections[Math.floor(Math.random()*xCollections.length)];
            this.y = yCollections[Math.floor(Math.random()*yCollections.length)];
            this.r = radiusCollection[Math.floor(Math.random()*radiusCollection.length)];
        
            i=-1;
        }
        else{
            continue;
        }
    }
}

function circleDistance(x1,y1,x2,y2){
    return Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
}

var noOfCircles = 5;
var circles = [];
for(var i=0; i<noOfCircles; i++){
    circles.push(new circleMake());
}
console.log(circles);

function draw()
{
    canvasDraw.fillStyle = 'white';
    canvasDraw.strokeStyle = 'blue';
    canvasDraw.fillRect(container.x,container.y,container.width,container.height);
    //c.clearRect(container.x,container.y,container.width,container.height);
    //c.strokeRect(container.x,container.y,container.width,container.height);
    // var cir1 = new circleMake();
    // var cir2 = new circleMake();
    


    for(var i=0; i <circles.length; i++){
        canvasDraw.fillStyle = 'hsl(' + circles[i].color + ',100%,50%)';;
        canvasDraw.beginPath();
        canvasDraw.arc(circles[i].x,circles[i].y,circles[i].r,0,2*Math.PI,false);
        canvasDraw.fill();
//        circles[i].vx=0;
//        circles[i].vy=0;
        
        
        if(
            (circles[i].x + circles[i].vx + circles[i].r > container.x + container.width) 
            || (circles[i].x - circles[i].r + circles[i].vx < container.x))
            {
                circles[i].vx = - circles[i].vx;
            }
        if((circles[i].y + circles[i].vy + circles[i].r > container.y + container.height) 
        || (circles[i].y - circles[i].r + circles[i].vy < container.y)){
         circles[i].vy = - circles[i].vy;
        }
        
        
        for(j=0;j<circles.length;j++){
            if(circles[i]===circles[j])
            {
                continue;
            }
            if(circleDistance(circles[i].x,circles[i].y,circles[j].x,circles[j].y)-(circles[i].r + circles[j].r)<=0)
            {
                circles[i].vx=-circles[i].vx;
                circles[i].vy=-circles[i].vy;
                circles[j].vx=-circles[j].vx;
                circles[j].vy=-circles[j].vy;
                
            }
            else{
                circles[i].x +=circles[i].vx;
                circles[i].y +=circles[i].vy;
            }
        }
        }
    }


function animate()
{
    canvasDraw.clearRect(container.x,container.y,container.width,container.height);
    draw();
    requestAnimationFrame(animate);
}
animate();


// var newEle=document.createElement('div');
// newEle.style.background="red";
// newEle.style.position="relative"
// newEle.style.left="250px";
// newEle.style.width="50px";
// var newEleWid=newEle.style.height.slice(0,2);
// newEle.style.borderRadius= "50%";
// newEle.style.height="50px";

// var i=0;
// var flag=0;
// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(bluLen);
// console.log(newEleWid);
// var n=getRandomArbitrary(newEleWid,bluLen-newEleWid);
// var r=getRandomArbitrary(newEleWid,bluwid-newEleWid);

// var interval=setInterval(function(){
	
// 	console.log(n);
//     if(flag===0){
// 	newEle.style.left=r++ + "px";
//     newEle.style.top= n-- + "px";
//     blu.appendChild(newEle);
//     if(r==247){
//         flag=1;
//     }
//     }
//     else{
//         newEle.style.top=i-- + "px";
//     blu.appendChild(newEle);
//         if(i==0){
//             flag=0;
//         }
//     }
    
// },10);

// //setTimeout(function(){clearInterval(interval)},10000);
// console.log(i);

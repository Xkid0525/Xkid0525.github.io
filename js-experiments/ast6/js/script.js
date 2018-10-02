(
    function(){
        canvas=document.getElementsByTagName("canvas")[0];
        var context = canvas.getContext("2d");
    

        var car=new Image();
        var car2=new Image();
		var car3=new Image()
        var bg=new Image();
        

        car.src="images/car1.png";
        car2.src="images/car3.png";
		car3.src="images/car2.png"
        bg.src="images/background.jpg"


        var jump=75;

        var bx=110;
        var by=500;
        var playerWidth=50;
        var playerHeight=106;

        var enemyWidth=50;
        var enemyHeight=109;

        document.addEventListener("keydown",shiftCar)

        function shiftCar(event){
           
            console.log(event);
            if(event.code==="ArrowRight")
            {
                if(bx<265)
                {
                bx=bx+jump;
                }
            }
            else if (event.code==="ArrowLeft")
            {
                if(bx>110)
                {
                      bx=bx-jump;
                }
            }
			else if(event.code==="ArrowUp")
			{
				if(by>0)
				{
					by=by-20;
				}
			}
			else if(event.code==="ArrowDown")
			{
				if(by<500)
				{
					by=by+20;
				}
			}
            
        }


        var enemy=[];
        
        var screenCount=1;
        enemy[0]={
            x:265,
            y:50,
            dead:0,
			carno:randomRange(1,10),
			velocity:randomRange(1,10)
        }
        var pos=[110,190,265,340];
		function randomRange(x,y){
    return Math.floor(Math.random()*(y-x)+x);
}
        var yInt=0;
        var yInt2=386;
        function draw(){
            
          
            context.drawImage(bg,0,yInt++);
            context.drawImage(bg,0,yInt-386);
            
            if(yInt==386){
                console.log(yInt);
                yInt=yInt-386;
            }
            context.drawImage(bg,0,yInt2++);
            context.drawImage(bg,0,yInt-386);
            
            if(yInt2==386){
                console.log(yInt2);
                yInt2=yInt2-386;
            }
            
            
           
            context.drawImage(car,bx,by);  //110  190   265  340


            checkCollision();
			
					
          
            for(var i=0;i<enemy.length;i++)
            {
                if(enemy[i]==null){
                    continue;
                }
                if(enemy[i].y>772){
                    enemy.splice(i,1);
                }
                
				console.log(enemy);
				var enemyCar;
				console.log(enemy[i].carno);
                
				var lane=Math.floor(Math.random()*4)+0;
                for(j=0;j<enemy.length;j++){
                    if(enemy[i]==enemy[j]){
                        continue;
                    }
				    if(enemy[j].y===enemy[i].y && lane===enemy[j])
				    {
                        lane=Math.floor(Math.random()*4)+0;
				        j=0;
				    }
                    
                    if(enemy[j].x==enemy[i].x && enemy[j].y+enemyHeight<=enemy[i].y){
                        enemy.splice(j,1);
                        j=0;
                    }
                    if(enemy[j].y>772){
                    enemy.splice(j,1);
                }
                            
                    
						}
                if(enemy[i]==null){
                    continue;
                }
                
					if(enemy[i].carno==1 || enemy[i].carno==5 || enemy[i].carno==3){
						enemyCar=car3;
					}
					else{
						enemyCar=car2;
					}
                if(enemy[i].dead===0)
                {
					
					
                    context.drawImage(enemyCar,enemy[i].x,enemy[i].y);
                    enemy[i].y=enemy[i].velocity+enemy[i].y;

                    if(enemy[i].y==150 && enemy[i].dead===0)
                    {
                       // screenCount++;
                     //  createCount=(Math.floor(Math.random()*3)+1)
                      // console.log(createCount);
                       //for(var temp=0;temp<createCount;temp++)
                      // {
                            enemy.push({
                                x:pos[lane],
                                y:-200,
                                dead:0,
								carno:randomRange(1,10),
								velocity:randomRange(2,10)
                            })
							//console.log(enemy);
                      // }
                     
                    }
                    if(enemy.length>=6){
                        for(p=0;p<enemy.length;p++){
                            if(enemy[p].y>700){
                                enemy.splice(p,1);
                            }
                        }
                    }
                    if(enemy[i]==null){
                    continue;
                }
    
                    if(enemy[i].y>=772)
                    {
                      //  screenCount--;
                        enemy[i].dead=1;
                       
						enemy.splice(i,1);
                        
						enemy.push({
                                x:pos[lane],
                                y:-200,
                                dead:0,
								carno:randomRange(1,10),
								velocity:randomRange(2,10)
                            })
                        
                 }
                    
                } 
				
				
            }
        
            requestAnimationFrame(draw);
        }


        function checkCollision(){

                for (var i=0;i<enemy.length;i++)
                {
                    if(enemy[i].dead===0)
                    {
                        if (enemy[i].x < bx + playerWidth &&
                            enemy[i].x + enemyWidth > bx &&
                            enemy[i].y < by+ playerHeight &&
                            enemyHeight+ enemy[i].y > by) {
                             location.reload();
                         }
                    }
                }
        }
        draw();
    }
)()
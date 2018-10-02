
var leftArrow=document.getElementsByClassName('left')[0];
var rightArrow=document.getElementsByClassName('right')[0];
var slider=document.getElementsByTagName('ul')[0];
var navDots=document.getElementsByClassName('dots');
var i=0;
var flag=0;
var click=0;
var imageCounter=0;
var ender=0;
var speed=5;
var starter=0;
rightArrow.onclick=function(){
    click=1;
   
    var interval=setInterval(function repeater()
    { 
        if(ender==1 && click==1 )
        {
            
//            var inte=setInterval(function()
//            {
//                slider.style.marginLeft=(++i)+ "px";
//                if(i==0){
//                    clearInterval(inte);
//                }
//            },--speed);
            i=0;
            flag=0;
            imageCounter=0;
            ender=0;
            click=0;
            slider.style.marginLeft=i;
            
            
        }
        console.log(ender);
        if(flag===0 && click==1 && imageCounter<4 )
        {
            slider.style.marginLeft=(--i)+ "px";
            console.log(i);
            if(i%536===0)
            {
                flag=1;
                click=0;
                imageCounter++;
                if(imageCounter==4){
                    ender=1;
                    click=0;
                }

            }  
        }
        else
        {
            slider.style.marginLeft=i;
            click=0;
            flag=0;
            clearInterval(interval);

        }

    },5);
    };
    leftArrow.onclick=function(){
    click=1;
        console.log('click'+click);
    var interval=setInterval(function()
    {
        console.log('click'+click);
        if(imageCounter==0 && click==1)
        {
            
//            var inte=setInterval(function()
//            {
//                slider.style.marginLeft=(++i)+ "px";
//                if(i==0){
//                    clearInterval(inte);
//                }
//            },--speed);
            i=-2144;
            flag=0;
         
            imageCounter=4;
            starter=0;
            clearInterval(interval);
            ender=1;
            console.log('i'+i);
            
            
        }
    if(flag===0 && click==1 && imageCounter>0)
    {
        slider.style.marginLeft=(++i)+ "px";
        console.log(i);
        if(i%536===0)
        {
            flag=1;
            --imageCounter;
            console.log( 'imageCounter'+imageCounter);
            if(imageCounter==0)
            {
                starter=1;
                console.log('satrter' + starter);
                click=0;
            }
        
        }
    }
    else
    {
        slider.style.marginLeft=i;
        click=0;
        flag=0;
        clearInterval(interval);
    }
    
},5);

           
        


};
 navDots.onclick={
                function(){
                    
//                    slider.style.marginLeft=-(dot*540) + "px";
//                    console.log(dot);
                    console.log('clicked');
                }
            };

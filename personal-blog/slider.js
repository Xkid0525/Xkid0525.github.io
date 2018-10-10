function init()
{
    imageUl=document.getElementsByClassName("slider-list")[0];
	recSlider=document.getElementsByClassName("reccomended-slide-container")[0];

    var imgNo=imageUl.getElementsByClassName("slide-image");
	var slideNo=recSlider.getElementsByClassName("reccomended-slide");
	
    up=document.getElementsByClassName("upArrow")[0];
    down=document.getElementsByClassName("downArrow")[0];
    text1=document.getElementsByClassName("body-builder-text")[0];
    text2=document.getElementsByClassName("body-builder-text2")[0];
	
	
	bottomLeft=document.getElementsByClassName("bottomLeftButton")[0];
	bottomRight=document.getElementsByClassName("bottomRightButton")[0];
	
	sidebottomLeft=document.getElementsByClassName("side-bottom-slider-left")[0];
	sidebottomRight=document.getElementsByClassName("side-bottom-slider-right")[0];
    
	bottomLeft.onclick=function(){slideLeft();};
	bottomRight.onclick=function(){slideRight();};
	sidebottomLeft.onclick=function(){plusDivs(-1)};
	sidebottomRight.onclick=function(){plusDivs(1)};
	numOfImages=imgNo.length;
	numOfSlides=slideNo.length;
	
    up.onclick=function(){moveup();};
    down.onclick=function(){movedown();};

    console.log(numOfImages);
	console.log("numOfSlides"+numOfSlides);
//    initButton();
//    createDotElement();
//    updateDotElement();
    
}



//function  createDotElement(){ var boxContainer= document.getElementsByClassName("slider-boxes")[0];
//    var dotElement = document.createElement("div");
//    dotElement.setAttribute("class", "slider-dotElement");
//     dotArray = [];
//    
//    for(var i=0;i<numOfImages;i++)
//    {
//        var dotItem = document.createElement("span");
//        //dotItem.setAttribute("class", "dot-item");
//        dotItem.innerHTML = "&nbsp;";
//        dotItem.onclick=(function(index){
//            return function()
//            {
//                var steps=index-currentIndex;
//                console.log(steps);
//                preIndex=currentIndex;
//                currentIndex=index;
//                if(steps>0)
//                {
//                    if(animationActive===0)
//                    {
//                        animationActive=1;   
//                        animate(-1*steps);
//                    }
//                }
//                else if(steps<0){
//                    if(animationActive===0)
//                    {
//                        animationActive=1;
//                        animate(-1*steps);
//                    }
//                }
//            
//            }
//        })(i);
//        dotArray.push(dotItem);
//        dotElement.appendChild(dotItem);
//    
//    }
//    
//     boxContainer.appendChild(dotElement);
//    {
var t1=230;
var t2=263;
function moveup()
{
    var i=0;
    
    var move=0;
    var inte=setInterval(function()
                         {
        if(i>580){
            console.log(t1);
            console.log(t2);
            
            clearInterval(inte);
        }
        console.log(i);
                         imageUl.style.top="-"+ i++ +"px";
        text1.style.top= t1-- +"px";
        text2.style.top=t2-- +"px";
                        },5);
    
    
        
}
function movedown()
{
    var j=580;
    var inte=setInterval(function()
                         {
        if(j<1){
            clearInterval(inte);
        }
        console.log(j);
                         imageUl.style.top= "-"+ j-- +"px";
        text1.style.top= t1++ +"px";
        text2.style.top=t2++ +"px";
                        },5);

    
}

function slideLeft()
{
	var i=0;
	var inte=setInterval(function(){
		if(i>340)
			{
				clearInterval(inte);
			}
		recSlider.style.left="-"+ i++ +"px";
	},5);
}

function slideRight()
{
	var i=340;
	var inte=setInterval(function(){
		if(i<1)
			{
				clearInterval(inte);
			}
		recSlider.style.left="-"+ i-- +"px";
	},5);
}


var myIndex = 0;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlider");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

init();
carousel();


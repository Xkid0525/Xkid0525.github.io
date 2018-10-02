function Animate(){
	var star='';
    var flag=0;
    var i=6;
	var interval=setInterval(function(){
        if(star==='******'){
         flag=1;   
        }
        
        if(flag==0){
            star=star+'*';
            console.log(star);
        }
        else{
            i--;
            star=star.substring(0,i);
            
            console.log(star);
            if(i==1){
                flag=0;
                i=5;
            }
        }
    },30 );
    setTimeout(function(){clearInterval(interval)},10000);
    
};
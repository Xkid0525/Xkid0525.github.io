let can = document.getElementsByClassName("myCanvas")[0];
let can2=document.getElementsByClassName("myCanvas1")[0];
let w=new World(can);
w.draw();
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
let w2=new World(can2);
w2.draw();
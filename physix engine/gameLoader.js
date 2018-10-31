let can = document.getElementsByClassName("myCanvas")[0];
let can2=document.getElementsByClassName("myCanvas1")[0];
let can3=document.getElementsByClassName("myCanvas2")[0];
let can4=document.getElementsByClassName("myCanvas3")[0];
let can5=document.getElementsByClassName("myCanvas4")[0];
let w1=new World(can,'circle');
let w2=new World(can2,'rectangle');
let w3=new World(can3,'triangle');
let w=new World(can4,'no');
let w0=new World(can5,'no');

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
                w1.spawnCircle();
                w2.spawnRectangle();
                w3.spawnTriangle();
                w.spawn();
                w0.spawn();

            }
        }
w.draw();
w0.draw();
w1.draw();
w2.draw();
w3.draw();
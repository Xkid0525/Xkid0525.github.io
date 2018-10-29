class triangle {
    constructor(x, y, height, base, color, cd) {
        this.x = x;
        this.y = y;
        this.l = height;
        this.b = base;
        this.area = Math.abs(this.l * this.b * 0.5);
        this.dx;
        this.dy;
        this.vdx;
        this.vdy;
        this.mass = 1;
        this.color = color;
        this.type='triangle';
        this.draw = function () 
        {
            cd.beginPath();
            cd.moveTo(this.x, this.y);
            cd.lineTo(this.x, this.y + this.l);
            cd.lineTo(this.x + this.b, this.y + this.l);
            cd.fillStyle = this.color;
            cd.fill();
            cd.closePath();
        };

        this.onGround = function () 
        {
            return (this.y + this.l >= canvas.height);
        };
    }
}

class rectangle {
    constructor(x, y, width, height, color, cd) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.dx;
        this.dy;
        this.vdx;
        this.vdy;
        this.mass = 1;
        this.color = color;
        this.type='rectangle';
        this.draw = function () {
            cd.beginPath();
            cd.rect(this.x, this.y, this.w, this.h);
            cd.fillStyle = this.color;
            cd.fill();
            cd.closePath();
        };
        this.onGround = function () {
            return (this.y >= canvas.height);
        };
    }
}

class Circle {
    constructor(x, y, radius, color, cd) {
        this.x = x;
        this.y = y;
        this.dx;
        this.dy;
        this.vdx;
        this.vdy;
        this.r = radius;
        this.mass = 1;
        this.color = color;
        this.type='circle';
        this.draw = function () {
            cd.beginPath();
            cd.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
            cd.fillStyle = this.color;
            cd.fill();
            cd.closePath();
        };
        this.onGround = function () {
            return (this.y + this.r >= canvas.height);
        };
    }
}

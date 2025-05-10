/**
 *
 * @author Henryk Krasuski aka oldhandmixer
 * Flock of dots
 *
 */
class PVector {

    constructor(x_, y_) {
        this.x = x_;
        this.y = y_;
    }

    static sub(v, u) {
        return new PVector(v.x - u.x, v.y - u.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
    }

    mult(f) {
        this.x *= f;
        this.y *= f;
    }

    set(x_, y_) {
        this.x = x_;
        this.y = y_;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    div(n) {
        this.x /= n;
        this.y /= n;
    }

    normalize() {
        var m = this.mag();
        if (m != 0) {
            this.div(m);
        }
    }

    angle() {
        var ang = (Math.asin(this.y) < 0) ? Math.PI / 2 - Math.acos(this.x) + Math.PI : Math.PI / 2 + Math.acos(this.x) + Math.PI;
        return ang;
    }

    static random2D() {
        var angle = 2 * Math.PI * Math.random();
        return (new PVector(Math.cos(angle), Math.sin(angle)));
    }

    dist(p) {
        var dx = this.x - p.x;
        var dy = this.y - p.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    limit(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    }
}



// ======================================================
// ======================================================
// ======================================================
function draw3DText(text, x, y, depth, color, shadowColor) {
/*    for (let i = 0; i < depth; i++) {
        dc.fillStyle = shadowColor;
        dc.fillText(text, x - i, y - i);
    }*/
    dc.fillStyle = color;
    dc.fillText(text, x, y);
}

const crsptext = "CR!SP";
const maxsize = 1000;
var fontsize = 20;
var tick=0;
var statemachine=0;


// Example usage in your animateloop function
function animateloop() {
    switch(statemachine) {
        case 0:
            dc.clearRect(0, 0, width, height);
            fontsize = maxsize * tick / 100;
            if (fontsize > maxsize) {
                fontsize = maxsize;
            }
            dc.font = fontsize + "px Russo One";
            dc.textAlign = "center";
            dc.textBaseline = "middle";
            draw3DText(crsptext, width / 2, height / 2, 10, "orange", "rgba(255, 255, 255, 0.5)");
            tick++;
            if(tick > 100) {
                tick = 0;
                statemachine = 1;
            }
            break;
        case 1:
            dc.clearRect(0, 0, width, height);
            fontsize = maxsize - maxsize * tick / 100;
            if (fontsize <= 300) {
                fontsize = 300;
                statemachine = 2;
                tick = 0;
            }
            dc.font = fontsize + "px Russo One";
            dc.textAlign = "center";
            dc.textBaseline = "middle";
            draw3DText(crsptext, width / 2, height / 2, 10, "orange", "rgba(0, 0, 0, 0.5)");
            tick++;
            break;
        case 2:
            dc.clearRect(0, 0, width, height);
            dc.font = fontsize + "px Russo One";
            dc.textAlign = "center";
            dc.textBaseline = "middle";
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.scale(1 + tick / 100, 1 + tick / 100);
            dc.rotate(tick * Math.PI / 50);
            draw3DText(crsptext, 0, 0, 10, "orange", "rgba(0, 0, 0, 0.5)");
            dc.restore();
            tick++;
            if(tick > 100) {
                tick = 0;
                statemachine = 3;
            }
            break;
        case 3: 
            {
                dc.clearRect(0, 0, width, height);
                fontsize = 0.995 * fontsize;
                if (fontsize <= 100) {
                    fontsize = 100;
                    statemachine = 4;
                    tick = 0;
                }
                dc.font = fontsize + "px Russo One";
                dc.textAlign = "center";
                dc.textBaseline = "middle";
                dc.save();
                if (tick > 200) {
                    tick = 200;
                }
                const xoff = width/2 * (1-tick/200) + (width * (tick/200)/2);
                const yoff = height/2 * (1-tick/200) + 35 * (tick/200);
                dc.translate(xoff, yoff);
                const scale = 2 * (1-tick/200) + (tick/200);
                dc.scale(scale, scale);
                dc.rotate(tick * Math.PI / 50);
                draw3DText(crsptext, 0, 0, 10, "orange", "rgba(0, 0, 0, 0.5)");
                dc.restore();
                tick++;
            }
            break;
        case 4:
            {
                dc.clearRect(0, 0, width, height);
                dc.font = fontsize + "px Russo One";
                dc.textAlign = "center";
                dc.textBaseline = "middle";
                dc.save();
                const xoff = width/2;
                const yoff = 35;
                dc.translate(xoff, yoff);
                const scale = 1.0;
                dc.scale(scale, scale);
                draw3DText(crsptext, 0, 0, 10, "orange", "rgba(0, 0, 0, 0.5)");
                dc.restore();
                tick++;
                if(tick > 200) {
                    tick = 0;
                    statemachine = 0;
                }
            }
            break;

    }

    dc.fillStyle = "white";
    dc.font = "20px Russo One";
    dc.textAlign = "left";
    dc.textBaseline = "top";
    dc.fillText("Statemachine: " + statemachine + "   fontsize: " + fontsize, 10, height-30);


}

function oldanimateloop() {
    switch(statemachine) {
        case 0:
            dc.clearRect(0, 0, width, height);
            var fontsize = maxsize * tick / 100;
            if (fontsize > maxsize) {
                fontsize = maxsize;
            }
            dc.fillStyle = "orange";
            dc.font = fontsize + "px Russo One";
            dc.textAlign = "center";
            dc.textBaseline = "middle";
            dc.fillText("CR!SP", width / 2, height / 2);
            tick++;
            if(tick > 100) {
                tick = 0;
                statemachine = 1;
            }
            break;
        case 1:
            dc.clearRect(0, 0, width, height);
            var fontsize = maxsize - maxsize * tick / 100;
            if (fontsize <= 300) {
                fontsize = 300;
                statemachine = 2;
                tick = 0;
            }
            dc.fillStyle = "orange";
            dc.font = fontsize + "px Russo One";
            dc.textAlign = "center";
            dc.textBaseline = "middle";
            dc.fillText("CR!SP", width / 2, height / 2);
            tick++;
            break;
        case 2:
            dc.clearRect(0, 0, width, height);
            dc.fillStyle = "orange";
            dc.font = fontsize + "px Russo One";
            dc.textAlign = "center";
            dc.textBaseline = "middle";
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.scale(1 + tick / 100, 1 + tick / 100);
            dc.rotate(tick * Math.PI / 50);
            dc.fillText("CR!SP", 0, 0);
            dc.restore();
            tick++;
            if(tick > 100) {
                tick = 0;
                statemachine = 0;
            }


    }
}

// ===================================================
// Main - Program starts here
// ===================================================


const canvas = document.querySelector("canvas");
const width = canvas.width = window.innerWidth - 10;
const height = canvas.height = window.innerHeight - 10;
const dc = canvas.getContext("2d");

var mask = document.createElement("canvas");
mask.width = width;
mask.height = height;
var maskdc = mask.getContext("2d");
maskdc.fillStyle = "rgba(0,0,0,0.6)";
maskdc.fillRect(0, 0, width, height);
maskdc.fillStyle = "orange";
maskdc.font = "300px Russo One";        // 300px
maskdc.textAlign = "center";
maskdc.textBaseline = "middle";
maskdc.fillText("CR!SP", width / 2-8, height / 2-8);
maskdc.fillText("CR!SP", width / 2+8, height / 2+8);
maskdc.fillText("CR!SP", width / 2+8, height / 2-8);
maskdc.fillText("CR!SP", width / 2-8, height / 2+8);
maskdc.globalCompositeOperation = "destination-out";
maskdc.font = "300px Russo One";        // 300px
maskdc.textAlign = "center";
maskdc.textBaseline = "middle";
maskdc.fillText("CR!SP", width / 2, height / 2);
maskdc.globalCompositeOperation = "source-over";

canvas.oncontextmenu = function (e) {
    e.preventDefault();
};
window.setInterval(animateloop, 1000 / 60);

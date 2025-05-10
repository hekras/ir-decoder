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

/**
 * Landinglight class
 */

class PLandinglight{
    constructor(x_, y_, col_, ang_) {
        this.loc = new PVector(x_, y_);
        this.col = col_;
        this.vel = new PVector(Math.cos(ang_ * Math.PI / 180), Math.sin(ang_ * Math.PI / 180));
    }

    display(dc) {
        dc.fillStyle = this.col;
        dc.beginPath();
        dc.arc(this.loc.x, this.loc.y, 5, 0, 6.28);
        dc.fill();
    }

    update() {
        this.loc.add(this.vel);
    }

    checkEdges() {
        if (this.loc.mag() > width / 2) {
            return true;
        }
        return false;
    }
}

class Particle{
    constructor(x,y,color){
      this.x = x;
      this.y = y;
      this.color = color;
      this.dx = canvas.width/2 - this.x;
      this.dy = canvas.height/2 - this.y;
      this.force = -2-Math.random()*4;
      this.angle = Math.atan2(this.dy, this.dx);
      this.vx = this.force * Math.cos(this.angle);
      this.vy = this.force * Math.sin(this.angle);
    }
    draw(){
      dc.fillStyle = this.color;
      dc.fillRect(this.x,this.y,gap,gap);
    }
    update(){
      this.x += this.vx;
      this.y += this.vy;
    }
    downdate(){
      this.x -= this.vx;
      this.y -= this.vy;
    }
}


/**
 * Rotate a point around the origin (0,0)
 * @param {PVector} point - The point to rotate
 * @param {number} angle - The angle in radians
 * @returns {PVector} - The rotated point
 */
function rotatePoint(point, angle) {
    const cosA = Math.cos(angle);
    const sinA = Math.sin(angle);
    const x = point.x * cosA - point.y * sinA;
    const y = point.x * sinA + point.y * cosA;
    return new PVector(x, y);
}

const gap = 2;

// Example usage
function fillText(str) {
    var lstr = str.split("|");
    dc.strokeStyle = "white";
    dc.fillStyle = "white";
    dc.lineWidth = 1.0;
    dc.font = "300px Russo One";
    dc.globalAlpha = 0.5;
    var dy = 150;
    var ysize = dy*lstr.length;
    var y = (height-ysize)/2 + dy;
    lstr.forEach(element => {
        var w = dc.measureText(element).width;
        dc.fillText(element, (width-w)/2, y);
        y+=dy;
    });
    dc.globalAlpha = 1.0;
  }

function textToArray(str) {
    dc.clearRect(0,0,canvas.width,canvas.height);
    fillText(str);
    let arr = [];
    const pixels = dc.getImageData(0, 0, width, height).data;
    for(let y = 0; y < height; y += gap) {
        for(let x = 0; x < width; x += gap) {
            const index = (y * width + x) * 4;
            const alpha = pixels[index + 3];
            if(alpha > 0) {
              const red = pixels[index];
              const green = pixels[index + 1];
              const blue = pixels[index + 2];
              const color = 'rgb(' + red + ',' + green + ',' + blue + ')';
              arr.push(new Particle(x, y, color));
            }
        }
    }
    return arr;
}

function drawTextTemplateEffect(text, backgroundColor, textColor) {
    // Clear the canvas
    dc.clearRect(0, 0, width, height);

    // Draw the background
    dc.fillStyle = backgroundColor;
    dc.fillRect(0, 0, width, height);

    // Set the composite operation to 'destination-out' to create a mask effect
    dc.globalCompositeOperation = 'destination-out';

    // Draw the text
    dc.font = "300px Russo One";
    dc.fillStyle = textColor;
    dc.textAlign = "center";
    dc.textBaseline = "middle";
    dc.fillText(text, width / 2, height / 2);

    // Reset the composite operation to default
    dc.globalCompositeOperation = 'source-over';
}

// Example usage


// ======================================================
// ======================================================
// ======================================================

var tick = 100;
var landingstrip = [];
var polydots = [];
var statemachine = 0;
var rotate = 0;
var rotatevel = 0.0;
var crisparray = [];


function animateloop() {

    tick--;

    switch (statemachine) {
        case 0:
            dc.clearRect(0, 0, width, height);
            if (tick == 0) {
                const dx = width / 2;
                const dy = height / 2;
                const a1 = Math.atan2(dy, dx);
                const a2 = Math.atan2(dy, - dx);
                landingstrip.push(new PLandinglight(0, 0, 'white', a1 * 180 / Math.PI));
                landingstrip.push(new PLandinglight(0, 0, 'white', a2 * 180 / Math.PI));
                landingstrip.push(new PLandinglight(0, 0, 'white', 270));
                tick = 100;
                if (rotatevel < 0.05) {
                    rotatevel += 0.01;
                }
                else {
                    statemachine = 1;
                }
            }
            var newlandingstrip = [];
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.rotate(rotate);
            rotate += rotatevel;
            landingstrip.forEach(function (ll) {
                ll.display(dc);
                ll.update();
                if (!ll.checkEdges()) {
                    newlandingstrip.push(ll);
                }
            });
            dc.restore();
            landingstrip = newlandingstrip;
        
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.rotate(-rotate);
            landingstrip.forEach(function (ll) {
                ll.display(dc);
                ll.update();
            });
            dc.restore();
            dc.drawImage(mask, 0, 0);
            break;
        case 1:
            if (tick == 0) {
                const dx = width / 2;
                const dy = height / 2;
                const a1 = Math.atan2(dy, dx);
                const a2 = Math.atan2(dy, - dx);
                landingstrip.push(new PLandinglight(0, 0, 'white', a1 * 180 / Math.PI));
                landingstrip.push(new PLandinglight(0, 0, 'white', a2 * 180 / Math.PI));
                landingstrip.push(new PLandinglight(0, 0, 'white', 270));
                tick = 100;
                polydots = [];
                statemachine = 2;
            }
            dc.clearRect(0, 0, width, height);
            var newlandingstrip = [];
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.rotate(rotate);
            rotate += rotatevel;
            landingstrip.forEach(function (ll) {
                ll.display(dc);
                ll.update();
                if (!ll.checkEdges()) {
                    newlandingstrip.push(ll);
                }
            });
            dc.restore();
            landingstrip = newlandingstrip;
        
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.rotate(-rotate);
            landingstrip.forEach(function (ll) {
                ll.display(dc);
                ll.update();
            });
            dc.restore();
            dc.drawImage(mask, 0, 0);
            break;
        case 2:
            if (tick == 0) {
                landingstrip = [];
                tick = 500;
                statemachine = 3;
                console.log(polydots.length);
            }
            var newlandingstrip = [];
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.rotate(rotate);
            rotate += rotatevel;
            landingstrip.forEach(function (ll) {
                ll.display(dc);
                ll.update();
                polydots.push( rotatePoint(ll.loc, rotate));
                if (!ll.checkEdges()) {
                    newlandingstrip.push(ll);
                }
            });
            dc.restore();
            landingstrip = newlandingstrip;
        
            dc.save();
            dc.translate(width / 2, height / 2);
            dc.rotate(-rotate);
            landingstrip.forEach(function (ll) {
                ll.display(dc);
                ll.update();
                polydots.push( rotatePoint(ll.loc, -rotate));
            });
            dc.restore();
            dc.save();
            dc.translate(width / 2, height / 2);
            polydots.forEach(function (pd) {
                dc.fillStyle = 'white';
                dc.beginPath();
                dc.arc(pd.x, pd.y, 5, 0, 6.28);
                dc.fill();
            });
            dc.restore();
            dc.drawImage(mask, 0, 0);
            break;
        case 3:
            dc.clearRect(0, 0, width, height);
            dc.save();
            var newpolydots = [];
            //const dist = 0.1*width + tick * width / 1000;
            const dist = tick * width / 1000;
            dc.translate(width / 2, height / 2);
            dc.beginPath();
            dc.arc(0, 0, dist, 0, Math.PI * 2);
            dc.fillStyle = 'black';
            dc.fill();
            dc.strokeStyle = 'red';
            dc.lineWidth = 10;
            dc.stroke();
            dc.rotate(rotate);
            rotate += rotatevel;
            polydots.forEach(function (pd) {
                dc.fillStyle = 'white';
                dc.beginPath();
                dc.arc(pd.x, pd.y, 5, 0, 6.28);
                dc.fill();
                if (pd.mag() < dist) {
                    newpolydots.push(pd);
                }
            });
            dc.restore();
            dc.drawImage(mask, 0, 0);
            polydots = newpolydots;
            if (tick == 0) {
                tick = 500;
                rotatevel = 0.0;
                statemachine = 4;
            }
            break;
        case 4:
            dc.clearRect(0, 0, width, height);
            dc.drawImage(mask, 0, 0);
            if (tick == 0) {
                tick = 10;
                rotatevel = 0.0;
                statemachine = 0;
            }
            break;
    }
    dc.fillStyle = "white";
    dc.font = "20px Russo One";
    dc.fillText("statemachine: " + statemachine, 10, 20);
    //console.log(landingstrip.length);

}

// ===================================================
// Main - Program starts here
// ===================================================


const canvas = document.querySelector("canvas");
const width = canvas.width = window.innerWidth - 10;
const height = canvas.height = window.innerHeight - 10;
const dc = canvas.getContext("2d");

dc.clearRect(0, 0, width, height);
crisparray = textToArray("CR!SP");
//console.log(crisparray.length);
dc.clearRect(0, 0, width, height);

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

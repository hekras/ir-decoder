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
class ScrollerChar{
    constructor(char, xoffset, width){
        this.char = char;
        this.xoffset = xoffset;
        this.width = width; 
    }
}

class Path{
    constructor(x, y, ang, color){
        this.x = x;
        this.y = y;
        this.ang = ang;
        this.color = color;
    }
    draw(dc){
        dc.fillStyle = this.color;
        dc.fillRect(this.x, this.y, 5, 5);
    }
}

class Scroller{
    constructor(text, font, dc, x, width, y, height, dx, dy, color){
        this.text = text;
        this.font = font;
        this.width = width;
        this.x = x;
        this.x0 = x;
        dc.font = font;
        const temp = text.split("");
        this.chars = [];
        let xoffset = 0;
        dc.font = this.font;
        for (let i = 0; i < temp.length; i++) {
            this.chars.push(new ScrollerChar(temp[i], xoffset, dc.measureText(temp[i]).width));
            xoffset += dc.measureText(temp[i]).width;
        }
        this.xmax = xoffset + width;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
        this.ticks = 0;
        this.path = [];
        for (let i = 0; i < this.width; i++) {
            let x = i - width*0.25;
            this.path.push(new Path(x, height*0.8, 0, color));
        }
        let x0 = width*0.75;
        let y0 = height*(0.5+0.15);
        for (let a = -Math.PI/2; a < Math.PI/2; a+=0.005) {
            let x = x0 + 0.15*height*Math.cos(a);
            let y = y0 - 0.15*height*Math.sin(a);
            this.path.push(new Path(x, y, -Math.PI/2 - a, "orange"));
        }
        for (let i = width*0.75; i > width*0.25; i--) {
            this.path.push(new Path(i, height*0.5, Math.PI,color));
        }
        x0 = width*0.25;
        y0 = height*(0.5-0.15);
        for (let a = 1.5*Math.PI; a > 0.5*Math.PI; a-=0.005) {
            let x = x0 + 0.15*height*Math.cos(a);
            let y = y0 - 0.15*height*Math.sin(a);
            this.path.push(new Path(x, y, 0.5*Math.PI - a, "brown"));
        }
        for (let i = 0; i < this.width; i++) {
            let x = i + width*0.25;
            this.path.push(new Path(x, height*0.2, 0, "white"));
        }
        this.x = this.x0 = this.path.length;
        this.xmax = xoffset + this.path.length;
        
    }
    draw(dc){
        var x = this.x;
        dc.fillStyle = this.color;
        dc.font = this.font;

        this.chars.forEach(element => {
            if ((x > 0)&&(x < this.path.length)){
                const i = Math.floor(x);    
                const xx = this.path[i].x;
                const yy = this.path[i].y + 50*Math.sin(x/100 - this.ticks/25);
                dc.save();
                dc.translate(xx, yy);
                dc.rotate(this.path[i].ang);
                dc.fillText(element.char, 0, 0);
                dc.restore();
            }
            x += element.width;
        });
    }
    update(){
        this.ticks++;
        this.x += this.dx;
        this.y += this.dy;
        if (this.x < -this.xmax) this.x = this.x0;
    }
}


class Statemachine{
    constructor(canvas, radardc, width, height){
        this.canvas = canvas;
        this.width = width;
        this.height = height;   
        this.state = 0;
        this.tick = 100;
        this.angle = 0;
        this.dc = radardc;
        this.dc.clearRect(0, 0, width, height);
    }
    update(dc){
        this.tick--;
//        this.dc.fillStyle = "rgba(0, 0, 0, 0.01)";
//        this.dc.fillRect(0, 0, this.width, this.height);
        this.dc.clearRect(0, 0, this.width, this.height);
        this.strokeStyle = "cyan";
        this.dc.lineWidth = 40;
        this.dc.beginPath();
        this.dc.moveTo(500, 500);
        this.dc.lineTo(500 + 400 * Math.cos(this.angle), 500 + 400 * Math.sin(this.angle));
        this.dc.stroke();
        this.angle += 0.01;
        dc.drawImage(this.canvas, 0, 0);
    }
}

window.addEventListener('load', function() {
    // canvas setup
    const scrollText = "Så for 5 dage siden var jeg i DR byen og opleve Svend Brinkmann og Thomas Vinterberg sidde ved kaminen og snakke om hvordan vi kan leve med kriser. De tog udgangspunkt i nutiden og Donald Trumps behandling af Zelenskyj. Thomas fortalte hvordan han var stoppet med at se nyheder, noget som jeg kender fra mig selv og flere i min omgangskreds. Svend havde gjort det modsatte og læser flere nyheder end tidligere. Budskabet fra de to var at man skulle prøve at finde håbet og dyrke fællesskabet og kunsten. Jeg vil ikke sige at jeg blev frelst, men jeg indså at jeg finder håbet i de ting de nævner. Dog synes jeg at der manglede forholdet til naturen. Sammen med fællesskabet og kunsten er der også naturen, som giver plads til refleksion og fordybelse både derude og i vindueskarmen.";
    const crisptext = "CR!SP";
    const canvas = document.querySelector("canvas");
    const width = canvas.width = window.innerWidth - 10;
    const height = canvas.height = window.innerHeight - 10;
    
    const dc = canvas.getContext('2d', {
        willReadFrequently: true
    });

    var scroller = new Scroller(scrollText, "100px Russo One", dc, width, width, height/2, height, -5, 0, "white");

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
    
    var mask = document.createElement("canvas");
    mask.width = width*1.3;
    mask.height = height*1.3;
    const maskdc = mask.getContext("2d");
    maskdc.fillStyle = "rgba(0,0,0,0.6)";
    maskdc.fillRect(0, 0, mask.width, mask.height);
    maskdc.globalCompositeOperation = "destination-out";
    maskdc.font = "300px Russo One";        // 300px
    maskdc.textAlign = "center";
    maskdc.textBaseline = "middle";
    maskdc.fillText(crisptext, mask.width / 2, mask.height / 2);
    maskdc.globalCompositeOperation = "source-over";

    var scrollermask = document.createElement("canvas");
    scrollermask.width = width;
    scrollermask.height = height;
    const scrollerdc = scrollermask.getContext("2d");

    var radarcanvas = document.createElement("canvas");
    radarcanvas.width = width;
    radarcanvas.height = height;
    const radardc = scrollermask.getContext("2d");
    
    let statemachine = new Statemachine(radarcanvas, radardc, width, height);


    function animate() {
//        dc.clearRect(0,0,canvas.width,canvas.height);
        dc.fillStyle = "red";
        dc.fillRect(0,0,canvas.width,canvas.height);

        dc.strokeStyle = "cyan";
        dc.lineWidth = 40;
        dc.beginPath();
        const l = width;
        const cx = width/2 + 0.4 * width * Math.cos(statemachine.angle*2);
        const cy = height/2 + 0.4 * height * Math.sin(statemachine.angle);
        dc.moveTo(cx, cy);
        dc.lineTo(cx + l * Math.cos(statemachine.angle), cy + l * Math.sin(statemachine.angle));
        dc.moveTo(cx, cy);
        dc.lineTo(cx - l * Math.cos(statemachine.angle), cy - l * Math.sin(statemachine.angle));
        dc.stroke();
        statemachine.angle += 0.01;

//        statemachine.update(dc);
        const xoff = mask.width*0.10*Math.cos(statemachine.angle/2) - mask.width*0.1;
        const yoff = mask.height*0.10*Math.sin(statemachine.angle/2) - mask.height*0.1;
        scrollerdc.clearRect(0,0,width,height);
        scrollerdc.fillStyle = "rgba(0,0,0,0.6)";
        scrollerdc.fillRect(0,0,width,height);
        scrollerdc.globalCompositeOperation = "destination-out";
        scroller.draw(scrollerdc);
        scrollerdc.globalCompositeOperation = "source-over";
        dc.drawImage(scrollermask, 0, 0);
        scroller.update();
 
        dc.drawImage(mask, xoff, yoff);
 
        dc.fillStyle = "white";
        dc.font = "20px Russo One";
        dc.fillText("statemachine: " + statemachine, 10, 20);
        requestAnimationFrame(animate);
    }

    animate();
  
    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
    });
});

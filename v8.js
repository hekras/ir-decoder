// ======================================================
// ======================================================
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

    static direction(angle) {
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
class Dot {
    constructor(x, y, vel, maxSpeed) {
        this.pos = new PVector(x, y);
        this.vel = vel;
        this.maxSpeed = maxSpeed;
        this.counter = 50 + 100 * Math.random();
        this.color = "rgba(250, 250, 250, 0.5)";
    }

    update() {
        this.pos.add(this.vel);
        this.counter--;
    }

    show(dc) {
        dc.fillStyle = this.color;
        dc.beginPath();
        let r = this.counter / 10;
        r = (r < 0) ? 0 : r;
        dc.arc(this.pos.x, this.pos.y, r, 0, 2 * Math.PI);
        dc.fill();
    }

    showProgress(dc, factor) {
        dc.fillStyle = this.color;
        dc.beginPath();
        let r = factor * this.counter / 10;
        r = (r < 0) ? 0 : r;
        dc.arc(this.pos.x, this.pos.y, r, 0, 2 * Math.PI);
        dc.fill();
    }
}

// ======================================================
// Globals
// ======================================================
// ======================================================
// runbook
// ======================================================
const runbook = [
    { tick: 0, action: sceneParticelIntro },
];

class PTick{
    constructor(frameBuffer, runbook) {
        this.c = 0; // the counter
        this.pc = 0; // sequence program counter
        this.seq = runbook;
        this.frameBuffer = frameBuffer;
        this.dt = this.seq[0].tick; // delta time
        console.log("PTick initialized with sequence length: " + this.frameBuffer.length);
    }

    t(){
        this.c++
        if (this.c >= this.seq[this.pc].tick){
            this.pc = (this.pc == this.seq.length-1) ? 0 : this.pc+1;
            if (this.pc == 0){
                this.c = 0;
                this.dt = this.seq[this.pc].tick;
            } 
            else{
                this.dt = this.seq[this.pc].tick - this.seq[this.pc-1].tick;
            }
        }
    }

    progress(){
        return (this.seq[this.pc].tick - this.c)/this.dt;
    }

    action(dc) {
        if (this.seq[this.pc].action) {
            this.seq[this.pc].action(dc, this);
        }
    }
}

async function sceneParticelIntro(ctx, tick) {
    var dots = [];
    var angle = Math.random() * 2 * Math.PI;
    var angle2 = Math.random() * 2 * Math.PI;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;

    for(var count = 0; count < 500; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));

        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, count / 500);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.01;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += 0.01;
        tick.frameBuffer.push(buffer);
        await new Promise(resolve => setTimeout(resolve, 10));
    }

    for(var count = 0; count < 500; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].show(dc);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.01;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += 0.01;
        tick.frameBuffer.push(buffer);
        await new Promise(resolve => setTimeout(resolve, 10));
    }

    for(var count = 0; count < 250; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, 1 - count/250);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.01;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += 0.01;
        tick.frameBuffer.push(buffer);
        await new Promise(resolve => setTimeout(resolve, 10));
    }
}


// ======================================================
// Main - Program starts here
// ======================================================
window.addEventListener('load', function() {
    let frameBuffer = [];
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);

    // Set internal resolution
    canvas.width = 1920;
    canvas.height = 1080;

    // Function to maintain aspect ratio and center the canvas
    function resizeCanvasCSS() {
        const aspect = 1920 / 1080;
        let winW = window.innerWidth;
        let winH = window.innerHeight;
        let newW, newH;

        if (winW / winH > aspect) {
            // Window is wider than aspect ratio
            newH = winH;
            newW = winH * aspect;
        } else {
            // Window is taller than aspect ratio
            newW = winW;
            newH = winW / aspect;
        }

        canvas.style.width = newW + "px";
        canvas.style.height = newH + "px";
        canvas.style.position = "absolute";
        canvas.style.left = ((winW - newW) / 2) + "px";
        canvas.style.top = ((winH - newH) / 2) + "px";
        canvas.style.backgroundColor = "black";
    }

    window.addEventListener('resize', resizeCanvasCSS);
    // Fullscreen on user click (required by browsers)
    function goFullscreen() {
        if (canvas.requestFullscreen) {
            canvas.requestFullscreen();
        } else if (canvas.webkitRequestFullscreen) {
            canvas.webkitRequestFullscreen();
        } else if (canvas.msRequestFullscreen) {
            canvas.msRequestFullscreen();
        }
    }
    window.addEventListener('click', goFullscreen);
    resizeCanvasCSS();

    function animate() {
            const ctx = canvas.getContext('2d');
        if (frameBuffer.length > 0) {
            const frame = frameBuffer.shift();
            ctx.drawImage(frame, 0, 0);
        }
        ctx.fillStyle = "gray";
        ctx.font = "40px Arial";
        const str = "buffers: " + frameBuffer.length;
        const xsize = ctx.measureText(str).width;
        ctx.fillRect((canvas.width-xsize)/2, canvas.height-80, xsize+50, 50);
        ctx.fillStyle = "white";
        ctx.fillText(str, (canvas.width-xsize)/2 + 25, canvas.height-40);
        requestAnimationFrame(animate);
    }
    animate(); 

    const t = new PTick(frameBuffer, runbook);
    t.action(canvas.getContext('2d'));
});
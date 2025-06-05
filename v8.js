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
// Tick - Scene Particel Intro
// ======================================================

class PTick{
    constructor() {
        this.frameBuffer = [];
        this.fps = 60;
        this.running = false;
    }
    start() {
        this.running = true;
    }
    action(dc) {
        sceneParticelIntro(dc, this); // 625 frames
    }
}

// ======================================================
// Scene Particel Intro
// ======================================================
async function sceneParticelIntro(ctx, t) {
    var dots = [];
    var angle = Math.random() * 2 * Math.PI;
    var angle2 = Math.random() * 2 * Math.PI;
    var width = ctx.canvas.width;
    var height = ctx.canvas.height;
    const scrollText = "Så for 5 dage siden var jeg i DR byen og opleve Svend Brinkmann og Thomas Vinterberg sidde ved kaminen og snakke om hvordan vi kan leve med kriser. De tog udgangspunkt i nutiden og Donald Trumps behandling af Zelenskyj. Thomas fortalte hvordan han var stoppet med at se nyheder, noget som jeg kender fra mig selv og flere i min omgangskreds. Svend havde gjort det modsatte og læser flere nyheder end tidligere. Budskabet fra de to var at man skulle prøve at finde håbet og dyrke fællesskabet og kunsten. Jeg vil ikke sige at jeg blev frelst, men jeg indså at jeg finder håbet i de ting de nævner. Dog synes jeg at der manglede forholdet til naturen. Sammen med fællesskabet og kunsten er der også naturen, som giver plads til refleksion og fordybelse både derude og i vindueskarmen.";
    const scrollText2 = ".... WE ARE BACK  .... Some finish greetings to friends and all the other people who are reading this. I hope you are all doing well and enjoying the demo. This is a test of the scrolling text functionality. The text should scroll smoothly across the screen, providing a nice visual effect. Let's see how it goes!";
    const crisptext = "CR!SP";

    var mask = document.createElement("canvas");
    mask.width = ctx.canvas.width*1.3;
    mask.height = ctx.canvas.height*1.3;
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
    scrollermask.width = ctx.canvas.width;
    scrollermask.height = ctx.canvas.height;
    const scrollerdc = scrollermask.getContext("2d");

    var radarcanvas = document.createElement("canvas");
    radarcanvas.width = ctx.canvas.width;
    radarcanvas.height = ctx.canvas.height;
    const radardc = scrollermask.getContext("2d");


    while (!t.running) {
        await new Promise(resolve => setTimeout(resolve, 10));
    }


    // add particles
    for(var count = 0; count < 250; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));
        dots.push(new Dot(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle), PVector.direction(angle2+Math.random()), 2));

        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, count / 250);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.02;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += (0.02 * count / 250);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // run intro
    for(var count = 0; count < 250; count++) {
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
                angle2 += 0.02;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += 0.02;
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // fade out
    for(var count = 0; count < 125; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, 1 - count/125);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.02;
                dots[i].counter = 50 + 100 * Math.random();
                dots[i].color = "rgba(255, 255, 255, 0.5)";
            }
        }
        angle += (0.02 * (1-count / 125));
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    // fade out and remove particles
    for(var count = 0; count < 50; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        let newDots = [];
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].showProgress(dc, 0.01);
            if ( dots[i].counter > 0) {
                newDots.push(dots[i]);
            }
        }
        dots = newDots;
        angle += (0.02 * (1-count / 50));
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }

    dots = [];

    // scroller fade in
    for(var count = 0; count < 125; count++) {
        let buffer = document.createElement('canvas');
        buffer.width = width;
        buffer.height = height;
        const dc = buffer.getContext('2d');        
        dc.fillStyle = "black";
        dc.fillRect(0, 0, width, height);
        dc.fillStyle = "rgba(255, 255, 255, " + (count / 125) + ")";
        dc.font = "bold 60px Arial";
        const str = "Welcome to the Particle World!";
        const xsize = dc.measureText(str).width;
        dc.fillText(str, (width - xsize) / 2, height / 2);
        t.frameBuffer.push(buffer);
        while (t.frameBuffer.length > 50) {
            await new Promise(resolve => setTimeout(resolve, 10));
        }
    }
    

}


// ======================================================
// Main - Program starts here
// ======================================================
let lastFrameTime = performance.now();
let frameCount = 0;

window.addEventListener('load', function() {
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

    let t = new PTick();
    t.action(canvas.getContext('2d'));
    const audio = new Audio('./Mixdown_14.mp3'); // Replace with your MP3 file path or URL

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
        t.start();
        audio.play();   
        window.removeEventListener('click', goFullscreen); // Remove listener after first click

    }
    window.addEventListener('click', goFullscreen);
    resizeCanvasCSS();
    let startTime = performance.now();

    function animate() {
        const ctx = canvas.getContext('2d');
        const elapsed = performance.now() - startTime;

        // FPS calculation
        frameCount++;
        const now = performance.now();
        if (now - lastFrameTime >= 1000) {
            t.fps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
        }

        // Only draw if frame is available
        if (t.frameBuffer.length > 0) {
            const frame = t.frameBuffer.shift();
            ctx.drawImage(frame, 0, 0);
        }

        ctx.fillStyle = "gray";
        ctx.font = "40px Arial";
        const str = "fps: " + t.fps + " | buffers: " + t.frameBuffer.length + " | buffer time: " + Math.floor(1000 * t.frameBuffer.length / t.fps) + "ms | elapsed: " + elapsed.toFixed(2) + "ms";
        const xsize = ctx.measureText(str).width;
        ctx.fillRect((canvas.width-xsize)/2, canvas.height-80, xsize+50, 50);
        ctx.fillStyle = "white";
        ctx.fillText(str, (canvas.width-xsize)/2 + 25, canvas.height-40);
        requestAnimationFrame(animate);
    }
    animate(); 

});
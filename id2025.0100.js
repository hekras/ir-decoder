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
    }

    update() {
        this.pos.add(this.vel);
        this.counter--;
    }

    show(dc) {
        dc.beginPath();
        let r = this.counter / 10;
        r = (r < 0) ? 0 : r;
        dc.arc(this.pos.x, this.pos.y, r, 0, 2 * Math.PI);
        dc.fill();
    }
}
// ======================================================
// ======================================================
window.addEventListener('load', function() {
    // canvas setup
    const canvas = document.querySelector("canvas");
    const width = canvas.width = window.innerWidth - 10;
    const height = canvas.height = window.innerHeight - 10;

    let dots = [];
    for (let i = 0; i < 1000; i++) {
        dots.push(new Dot(width / 2, height / 2, PVector.random2D(), 2));
    }
    
    const dc = canvas.getContext('2d', {
        willReadFrequently: true
    });

    canvas.oncontextmenu = function (e) {
        e.preventDefault();
    };
    
    let angle = 0;
    let angle2 = 0;

    function animate() {
        dc.clearRect(0,0,canvas.width,canvas.height);
        dc.fillStyle = "rgba(255,255,255,1.0)";
        for (let i = 0; i < dots.length; i++) {
            dots[i].update();
            dots[i].show(dc);
            if (dots[i].pos.x > width || dots[i].pos.x < 0 || dots[i].pos.y > height || dots[i].pos.y < 0|| dots[i].counter < 0) {
                dots[i].pos.set(width / 2 + 0.4 * width * Math.cos(angle), height / 2 + 0.4 * height * Math.sin(angle));
                dots[i].vel = PVector.direction(angle2+Math.random());
                angle2 += 0.01;
                dots[i].counter = 50 + 100 * Math.random();
            }
        }
        angle += 0.01;
        requestAnimationFrame(animate);
    }

    animate();
  
    window.addEventListener('resize', function(){
        canvas.width = window.innerWidth-10;
        canvas.height = window.innerHeight-10;
    });
});

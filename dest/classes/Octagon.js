"use strict";
class Octagon {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(100, 0, 80, 20);
        ctx.stroke();
        ctx.fill();
        ctx.beginPath();
        ctx.rotate((45 * Math.PI) / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(100, 0, 80, 20);
        ctx.stroke();
        ctx.fill();
    }
    update(ctx, mouse) {
        this.x += this.dx;
        this.y += this.dy;
        this.draw(ctx);
    }
}

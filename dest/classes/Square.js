"use strict";
class Square {
    constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
    }
    draw(ctx) {
        ctx.beginPath();
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

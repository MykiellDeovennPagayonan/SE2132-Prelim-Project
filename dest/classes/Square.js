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
        ctx.fillRect(this.x, this.y, this.size * 2, this.size * 2);
        ctx.stroke();
        ctx.fill();
    }
    update(ctx, canvas) {
        if (this.x > (canvas.width - (this.size * 2)) || this.x < 0) {
            this.dx = -this.dx;
        }
        if (this.y > (canvas.height - (this.size * 2)) || this.y < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        if (mouse.x && mouse.y) {
            if (mouse.x > this.x && mouse.x < this.x + this.size * 2 && mouse.y > this.y && mouse.y < this.y + this.size * 2) {
                console.log("HI");
            }
        }
        this.draw(ctx);
    }
    clone(mouse) {
        if (mouse.x && mouse.y) {
            if (mouse.x > this.x && mouse.x < this.x + this.size * 2 && mouse.y > this.y && mouse.y < this.y + this.size * 2) {
                const clone = new Square(this.x, this.y, -this.dx, -this.dy, this.size, this.color);
                return clone;
            }
        }
        return null;
    }
}

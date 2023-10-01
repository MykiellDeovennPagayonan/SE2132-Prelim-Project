"use strict";
class Circle {
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
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
    update(ctx, canvas) {
        if (this.x > (canvas.width - (this.size)) || this.x < (0 + (this.size))) {
            this.dx = -this.dx;
        }
        if (this.y > (canvas.height - (this.size)) || this.y < (0 + (this.size))) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw(ctx);
    }
    clone(mouse) {
        if (mouse.x && mouse.y) {
            if (mouse.x > this.x - this.size && mouse.x < this.x + this.size && mouse.y > this.y - this.size && mouse.y < this.y + this.size) {
                const clone = new Circle(this.x, this.y, -this.dx, -this.dy, this.size, this.color);
                return clone;
            }
        }
        return null;
    }
}

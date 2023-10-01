"use strict";
class Circle extends Shape {
    constructor(x, y, dx, dy, size, color) {
        super(x, y, dx, dy, size, color);
    }
    clone() {
        return new Circle(this.x, this.y, this.dx, this.dy, this.size, this.color);
    }
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.stroke();
        ctx.fill();
    }
    update(ctx, mouse, canvas) {
        if (this.x > canvas.width - this.size || this.x < 0 + this.size) {
            this.dx = -this.dx;
        }
        if (this.y > canvas.height - this.size || this.y < 0 + this.size) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw(ctx);
    }
}

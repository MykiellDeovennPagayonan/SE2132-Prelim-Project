interface Mouse {
  x: undefined | number;
  y: undefined | number;
  click: boolean;
}

class Circle implements Shape {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  color: string;

  constructor(
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.size = size;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.stroke();
    ctx.fill();
  }

  update(
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement
  ) {
    if (this.x > (canvas.width - (this.size)) || this.x < (0 + (this.size))) {
      this.dx = -this.dx
    }
    if (this.y > (canvas.height - (this.size)) || this.y < (0 + (this.size))) {
      this.dy = -this.dy
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw(ctx);
  }

  clone(mouse: Mouse) {
    if (mouse.x && mouse.y) {
      if (mouse.x > this.x - this.size && mouse.x < this.x + this.size && mouse.y > this.y - this.size && mouse.y < this.y + this.size) {
        const clone = new Circle(this.x, this.y, -this.dx, -this.dy, this.size, this.color)
        return clone
      }
    }
    return null
  }
}

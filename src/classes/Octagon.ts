interface Mouse {
  x: undefined | number;
  y: undefined | number;
  click: boolean;
}

class Octagon implements Shape {
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
    ctx.fillStyle = this.color;
    ctx.moveTo(this.x + this.size * Math.cos(0), this.y + this.size * Math.sin(0));
  
    for (let i = 1; i <= 8; i++) {
      const angle = (i * 2 * Math.PI) / 8;
      const cornerX = this.x + this.size * Math.cos(angle);
      const cornerY = this.y + this.size * Math.sin(angle);
      ctx.lineTo(cornerX, cornerY);
    }
  
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.translate(0, 0)
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
        const clone = new Octagon(this.x, this.y, this.dx, this.dy, this.size, this.color)

        clone.dx = -clone.dx
        clone.dy = -clone.dy

        return clone
      }
    }
    return null
  }
}
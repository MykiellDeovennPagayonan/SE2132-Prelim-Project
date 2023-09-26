interface Mouse {
  x: undefined | number;
  y: undefined | number;
  click: boolean;
}

class Octagon {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
  color: string;

  constructor(
    x: number,
    y: number,
    dx: number,
    dy: number,
    radius: number,
    color: string
  ) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.radius, this.radius);
    ctx.stroke();
    ctx.fill();

    ctx.beginPath();
    ctx.rotate((45 * Math.PI) / 180);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.radius, this.radius);
    ctx.stroke();
    ctx.fill();
  }

  update(
    ctx: CanvasRenderingContext2D,
    mouse: Mouse,
    canvas: HTMLCanvasElement
  ) {
    if (this.x > canvas.width - this.radius || this.x < 0) {
      this.dx = -this.dx;
    }
    if (this.y > canvas.height - this.radius || this.y < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw(ctx);
  }
}

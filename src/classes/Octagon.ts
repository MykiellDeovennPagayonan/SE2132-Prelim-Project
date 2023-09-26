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

  update(ctx: CanvasRenderingContext2D, mouse: Mouse) {
    this.x += this.dx;
    this.y += this.dy;

    this.draw(ctx);
  }
}

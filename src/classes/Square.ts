interface Mouse {
  x: undefined | number;
  y: undefined | number;
  click: boolean;
}

class Square {
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

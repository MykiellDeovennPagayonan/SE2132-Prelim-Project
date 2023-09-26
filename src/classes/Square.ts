interface Mouse {
  x: undefined | number;
  y: undefined | number;
  click: boolean;
}

class Square implements Shape {
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
  clone(): Circle {
    return new Circle(this.x, this.y, this.dx, this.dy, this.size, this.color);
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    ctx.stroke();
  }

  update(
    ctx: CanvasRenderingContext2D,
    mouse: Mouse,
    canvas: HTMLCanvasElement
  ) {
    if (this.x > canvas.width - this.size || this.x < 0 + this.size) {
      this.dx = -this.dx;
    }
    if (this.y > canvas.height - this.size || this.y < 0 + this.size) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    // console.log("SQUARE Move!"); This console.log works
    this.draw(ctx);
  }
}

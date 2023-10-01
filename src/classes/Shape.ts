interface Shape {
  x: number,
  y: number,
  dx: number,
  dy: number,
  size: number,
  color: string,

  draw(ctx: CanvasRenderingContext2D): void,
  update(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement): void,
  clone(mouse: Mouse): object | null
}
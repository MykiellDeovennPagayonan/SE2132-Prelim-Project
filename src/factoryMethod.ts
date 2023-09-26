class ShapeFactory {
  createCircle(
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number,
    color: string
  ) {
    return new Circle(x, y, dx, dy, size, color);
  }

  createOctagon(
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number,
    color: string
  ) {
    return new Octagon(x, y, dx, dy, size, color);
  }

  createSquare(
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number,
    color: string
  ) {
    return new Square(x, y, dx, dy, size, color);
  }
}

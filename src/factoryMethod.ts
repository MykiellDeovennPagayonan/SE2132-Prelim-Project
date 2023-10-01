function ShapeFactory(circleObjectPool: ObjectPool, squareObjectPool: ObjectPool, octagonObjectPool: ObjectPool, width : number, height: number) : Square | Octagon | Circle {
  let size = 30;
  let x = Math.random() * (width - size * 2) + size;
  let y = Math.random() * (height - size * 2) + size;
  let dx = Math.random() * 4 - 2;
  let dy = Math.random() * 4 - 2;
  let color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;

  let lengths = [circleObjectPool.objects.length, squareObjectPool.objects.length, octagonObjectPool.objects.length]
  let minLength = Math.min(...lengths)

  if (circleObjectPool.objects.length === minLength) {
    return createCircle(x, y, dx, dy, size, color)
  } if (squareObjectPool.objects.length === minLength) {
    return createSquare(x, y, dx, dy, size, color)
  } else {
    return createOctagon(x, y, dx, dy, size, color)
  }

  function createCircle(
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number,
    color: string
  ) {
    return new Circle(x, y, dx, dy, size, color);
  }

  function createOctagon(
    x: number,
    y: number,
    dx: number,
    dy: number,
    size: number,
    color: string
  ) {
    return new Octagon(x, y, dx, dy, size, color);
  }

  function createSquare(
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

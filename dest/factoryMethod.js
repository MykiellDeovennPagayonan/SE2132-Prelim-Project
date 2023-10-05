"use strict";
function ShapeFactory(circleObjectPool, squareObjectPool, octagonObjectPool, rectangleObjectPool, width, height) {
    let size = 30;
    let x = Math.random() * (width - size * 2) + size;
    let y = Math.random() * (height - size * 2) + size;
    let dx = Math.random() * 4 - 2;
    let dy = Math.random() * 4 - 2;
    let color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${Math.random() * 256})`;
    let lengths = [circleObjectPool.objects.length, squareObjectPool.objects.length, octagonObjectPool.objects.length, rectangleObjectPool.objects.length];
    let minLength = Math.min(...lengths);
    if (circleObjectPool.objects.length === minLength) {
        return createCircle(x, y, dx, dy, size, color);
    }
    else if (squareObjectPool.objects.length === minLength) {
        return createSquare(x, y, dx, dy, size, color);
    }
    else if (octagonObjectPool.objects.length === minLength) {
        return createOctagon(x, y, dx, dy, size, color);
    }
    else {
        console.log("adding rectangle");
        return createRectangle(x, y, dx, dy, size, color);
    }
    function createCircle(x, y, dx, dy, size, color) {
        return new Circle(x, y, dx, dy, size, color);
    }
    function createOctagon(x, y, dx, dy, size, color) {
        return new Octagon(x, y, dx, dy, size, color);
    }
    function createSquare(x, y, dx, dy, size, color) {
        return new Square(x, y, dx, dy, size, color);
    }
    function createRectangle(x, y, dx, dy, size, color) {
        return new Rectangle(x, y, dx, dy, size, color);
    }
}

"use strict";
class ShapeFactory {
    createCircle(x, y, dx, dy, size, color) {
        return new Circle(x, y, dx, dy, size, color);
    }
    createOctagon(x, y, dx, dy, size, color) {
        return new Octagon(x, y, dx, dy, size, color);
    }
    createSquare(x, y, dx, dy, size, color) {
        return new Square(x, y, dx, dy, size, color);
    }
}

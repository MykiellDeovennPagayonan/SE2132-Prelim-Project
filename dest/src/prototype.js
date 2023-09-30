"use strict";
class Shape {
    constructor(x, y, dx, dy, size, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = color;
    }
}
// Shape.prototype.clone = function () {
//   let clonedShape = new Shape(
//     this.x,
//     this.y,
//     this.dx,
//     this.dy,
//     this.size,
//     this.color
//   );
//   return clonedShape;
// };
// let classroom = new Classroom();
// let modernClassroom = classroom.clone();
// let anotherClassroom = classroom.clone();

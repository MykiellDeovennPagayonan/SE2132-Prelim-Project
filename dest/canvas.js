"use strict";
let canvas = document.querySelector("canvas");
let mouse = {
    x: undefined,
    y: undefined,
    click: false,
};
window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});
window.addEventListener("mousedown", function () {
    mouse.click = true;
});
window.addEventListener("mouseup", function () {
    mouse.click = false;
});
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");
    if (ctx) {
        // logic start here
        const shapeFactory = new ShapeFactory();
        const circle = shapeFactory.createCircle(50, 50, 2, 2, 30, "blue");
        const clonedCircle = circle.clone();
        const square = shapeFactory.createSquare(100, 100, 2, -2, 30, "green");
        const cloneSquare = square.clone();
        // const octagon = shapeFactory.createOctagon(100, 50, 2, 2, 30, "red");
        function animate(ctx) {
            requestAnimationFrame(() => animate(ctx));
            if (canvas) {
                // start of animation logic here
                ctx.clearRect(0, 0, canvas.width, canvas.height); // removes prev frame
                clonedCircle.update(ctx, mouse, canvas);
                cloneSquare.update(ctx, mouse, canvas);
                // octagon.update(ctx, mouse, canvas);
            }
            else {
                console.log("Canvas element not found in animation");
            }
        }
        animate(ctx);
    }
    else {
        console.error("Failed to get 2D rendering context.");
    }
}
else {
    console.error("Canvas element not found");
}

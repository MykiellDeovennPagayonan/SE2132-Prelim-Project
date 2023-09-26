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
        let object = new Circle(200, 200, -2, 2, 20, "blue");
        function animate(ctx) {
            requestAnimationFrame(() => animate(ctx));
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            console.log(object);
            if (canvas) {
                object.update(ctx, mouse, canvas);
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

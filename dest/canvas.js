"use strict";
let canvas = document.querySelector("canvas");
let mouse = {
    x: undefined,
    y: undefined,
    click: false,
};
let spacebarDown = false;
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
window.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        spacebarDown = true;
    }
});
window.addEventListener("keyup", function (event) {
    if (event.key === " ") {
        spacebarDown = false;
    }
});
const addShapeButton = document.querySelector("#addShapeButton");
const removeAllButton = document.querySelector("#RemoveAllButton");
const circlePool = new ObjectPool(20);
const squarePool = new ObjectPool(20);
const octagonPool = new ObjectPool(20);
if (addShapeButton) {
    addShapeButton.addEventListener("mousedown", addShape);
}
if (removeAllButton) {
    removeAllButton.addEventListener("mousedown", function () {
        circlePool.removeAll();
        squarePool.removeAll();
        octagonPool.removeAll();
    });
}
function addShape() {
    console.log("hi");
    let shape = ShapeFactory(circlePool, squarePool, octagonPool, window.innerWidth, window.innerHeight);
    if (shape instanceof Circle) {
        circlePool.addObject(shape);
    }
    if (shape instanceof Square) {
        squarePool.addObject(shape);
    }
    if (shape instanceof Octagon) {
        octagonPool.addObject(shape);
    }
}
if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let ctx = canvas.getContext("2d");
    if (ctx) {
        function animate(ctx) {
            requestAnimationFrame(() => animate(ctx));
            if (canvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                for (let i = 0; i < circlePool.objects.length; i++) {
                    circlePool.objects[i].update(ctx, canvas);
                    if (mouse.click) {
                        const clone = circlePool.objects[i].clone(mouse);
                        if (clone) {
                            mouse.click = false;
                            circlePool.addObject(clone);
                        }
                    }
                    if (mouse.x && mouse.y) {
                        if (spacebarDown && mouse.x > circlePool.objects[i].x - circlePool.objects[i].size && mouse.x < circlePool.objects[i].x + circlePool.objects[i].size && mouse.y > circlePool.objects[i].y - circlePool.objects[i].size && mouse.y < circlePool.objects[i].y + circlePool.objects[i].size) {
                            spacebarDown = false;
                            circlePool.returnObject(circlePool.objects[i]);
                        }
                    }
                }
                for (let i = 0; i < squarePool.objects.length; i++) {
                    squarePool.objects[i].update(ctx, canvas);
                    if (mouse.click) {
                        const clone = squarePool.objects[i].clone(mouse);
                        if (clone) {
                            mouse.click = false;
                            squarePool.addObject(clone);
                        }
                    }
                    if (mouse.x && mouse.y) {
                        if (spacebarDown && mouse.x > squarePool.objects[i].x && mouse.x < squarePool.objects[i].x + squarePool.objects[i].size * 2 && mouse.y > squarePool.objects[i].y && mouse.y < squarePool.objects[i].y + squarePool.objects[i].size * 2) {
                            spacebarDown = false;
                            squarePool.returnObject(squarePool.objects[i]);
                        }
                    }
                }
                for (let i = 0; i < octagonPool.objects.length; i++) {
                    octagonPool.objects[i].update(ctx, canvas);
                    if (mouse.click) {
                        const clone = octagonPool.objects[i].clone(mouse);
                        if (clone) {
                            mouse.click = false;
                            octagonPool.addObject(clone);
                        }
                    }
                    if (mouse.x && mouse.y) {
                        if (spacebarDown && mouse.x > octagonPool.objects[i].x - octagonPool.objects[i].size && mouse.x < octagonPool.objects[i].x + octagonPool.objects[i].size && mouse.y > octagonPool.objects[i].y - octagonPool.objects[i].size && mouse.y < octagonPool.objects[i].y + octagonPool.objects[i].size) {
                            spacebarDown = false;
                            octagonPool.returnObject(octagonPool.objects[i]);
                        }
                    }
                }
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

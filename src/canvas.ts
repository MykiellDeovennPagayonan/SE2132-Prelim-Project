let canvas: HTMLCanvasElement | null = document.querySelector("canvas");

let mouse: { x: undefined | number; y: undefined | number; click: boolean } = {
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

  let ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

  if (ctx) {
    // logic start here

    const shapeFactory = new ShapeFactory();
    // Pool Objects
    const circlePool = new ObjectPool<Circle>(10, Circle);
    const circles: Circle[] = [];

    function addRandomCircle() {
      const circle = circlePool.getObject();
      if (circle) {
        circle.x = Math.random() * canvas!.width;
        circle.y = Math.random() * canvas!.height;
        circle.dx = Math.random() * 4 - 2;
        circle.dy = Math.random() * 4 - 2;
        circle.size = 30;
        circle.color = `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
          Math.random() * 256
        })`;
        circles.push(circle);
      }
    }

    const addCircleButton = document.querySelector("#addCircleButton");

    if (addCircleButton) {
      addCircleButton.addEventListener("click", addRandomCircle);
    }

    const square = shapeFactory.createSquare(100, 100, 2, -2, 30, "green");
    const cloneSquare = square.clone();

    // const octagon = shapeFactory.createOctagon(100, 50, 2, 2, 30, "red");

    function animate(ctx: CanvasRenderingContext2D) {
      requestAnimationFrame(() => animate(ctx));
      if (canvas) {
        // start of animation logic here

        ctx.clearRect(0, 0, canvas.width, canvas.height); // removes prev frame

        circles.forEach((circle) => {
          if (circle) {
            circle.x += circle.dx;
            circle.y += circle.dy;

            if (circle.x + circle.size > canvas!.width) {
              circle.x = canvas!.width - circle.size;
              circle.dx = -circle.dx;
            } else if (circle.x - circle.size < 0) {
              circle.x = circle.size;
              circle.dx = -circle.dx;
            }

            if (circle.y + circle.size > canvas!.height) {
              circle.y = canvas!.height - circle.size;
              circle.dy = -circle.dy;
            } else if (circle.y - circle.size < 0) {
              circle.y = circle.size;
              circle.dy = -circle.dy;
            }

            circle.update(ctx, mouse, canvas!);
          }
        });

        cloneSquare.update(ctx, mouse, canvas);
        // octagon.update(ctx, mouse, canvas); // dont include this yet, its very buggy
      } else {
        console.log("Canvas element not found in animation");
      }
    }

    animate(ctx);
  } else {
    console.error("Failed to get 2D rendering context.");
  }
} else {
  console.error("Canvas element not found");
}

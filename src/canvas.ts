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

    let object = new Circle(200, 200, -2, 2, 20, "blue");

    function animate(ctx: CanvasRenderingContext2D) {
      requestAnimationFrame(() => animate(ctx));
      if (canvas) {
        // start of animation logic here

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        object.update(ctx, mouse, canvas);






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

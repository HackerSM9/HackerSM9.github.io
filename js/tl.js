var scene = new Scene({
  ".raindrop": i => ({
    0: { "border-width": "150px", opacity: 1, transform: "scale(0)" },
    1.5: { "border-width": "0px", opacity: 0.3, transform: "scale(0.7)" },
    options: { delay: i * 0.4 },
  }),
}, {
  easing: Scene.EASE_IN_OUT,
  iterationCount: "3",
  selector: true,
}).playCSS();

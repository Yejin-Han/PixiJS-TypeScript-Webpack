import { Application, Graphics } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

// Graphics
const graphic = new Graphics();
graphic.beginFill(0xffffff); // 1st step
graphic.drawRect(20, 50, 100, 80); // 2nd step
graphic.endFill(); // 3rd step

// Another graphic
const graphic2 = new Graphics();
graphic2.beginFill(0xff0000);
graphic2.drawCircle(50, 100, 30);
graphic2.endFill();

app.stage.addChild(graphic);
app.stage.addChild(graphic2);

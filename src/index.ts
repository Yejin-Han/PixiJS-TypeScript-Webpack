import { Application, Graphics, Loader, Texture, Sprite } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

/* 
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
 */

const loader = Loader.shared;

/* 
// Load assets
loader
  .add(
    "img1",
    "https://cdn.pixabay.com/photo/2014/05/26/13/32/butterfly-354528__480.jpg"
  )
  .add(
    "img2",
    "https://cdn.pixabay.com/photo/2015/07/19/09/47/still-life-851297__340.jpg"
  )
  .load((l, r) => {
    const img1 = l.resources.img1;
    const img2 = l.resources.img2;
    console.log(img1, img2);
  });

loader.onProgress.add((l, r) => {
  console.log(loader.progress);
});

loader.onLoad.add((e) => {
  console.log(e);
});

loader.onComplete.add((e) => {
  console.log("Loading of the assets is completed");
});
 */

// Texture and Sprites
loader
  .add("img1", "./assets/1.png")
  .add("img2", "./assets/2.png")
  .load((l) => {
    // Convert to texture
    const texture = Texture.from("img1");
    const texture2 = Texture.from("img2");
    console.log(texture, texture2);

    // Convert to sprite
    const sprite = new Sprite(texture);
    console.log(sprite);

    sprite.position.set(100, 100);
    sprite.width = 200;
    sprite.height = 200;

    app.stage.addChild(sprite);

    const sprite2 = new Sprite(texture2);
    console.log(sprite2);

    sprite2.position.set(400, 400);
    sprite2.width = 200;
    sprite2.height = 200;

    app.stage.addChild(sprite2);
  });

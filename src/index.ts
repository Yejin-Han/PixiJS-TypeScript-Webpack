import {
  Application,
  Graphics,
  Loader,
  Texture,
  Sprite,
  AnimatedSprite,
} from "pixi.js";

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

/* 
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
 */

// Animated sprites
loader
  .add("./assets/spritesheet.json")
  .add("./assets/fighter.json")
  .load(() => {
    const textures = [];

    for (let i = 1; i <= 4; i++) {
      const texture = Texture.from(`RunRight0${i}.png`);
      textures.push(texture);
    }
    console.log(textures);

    const animatedSprite = new AnimatedSprite(textures);
    animatedSprite.x = 300;
    animatedSprite.y = 150;
    animatedSprite.play(); // Will run the animation

    app.stage.addChild(animatedSprite);
    animatedSprite.animationSpeed = 0.2;

    const jetArray = [];

    for (let i = 0; i < 30; i++) {
      if (i < 10) {
        const texture = Texture.from(`rollSequence000${i}.png`);
        jetArray.push(texture);
      } else {
        const texture = Texture.from(`rollSequence00${i}.png`);
        jetArray.push(texture);
      }
    }

    const jetSprites = new AnimatedSprite(jetArray);
    jetSprites.x = 300;
    jetSprites.y = 450;
    app.stage.addChild(jetSprites);
    jetSprites.play();
    jetSprites.animationSpeed = 0.6;
  });

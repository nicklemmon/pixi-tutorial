import * as PIXI from 'pixi.js'

const {
  loader,
  Sprite,
  utils,
  Rectangle
} = PIXI
const {
  resources
} = loader
const {
  TextureCache
} = utils

const app = new PIXI.Application({
  width: 512,
  height: 512,
  antialias: true
})

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/* eslint-disable no-undef */
function setFullScreen() {
  app.renderer.view.style.position = 'absolute'
  app.renderer.view.style.display = 'block'
  app.renderer.autoResize = true
  app.renderer.resize(window.innerWidth, window.innerHeight)
}
/* eslint-enable no-undef */

PIXI.loader
  .add('spritesheet.json')
  .load(setup)

function renderBlobs(numberOfBlobs = 6, spacing = 48, xOffset = 150) {
  const { stage } = app
  const id = PIXI.loader.resources['spritesheet.json'].textures

  
}

// This `setup` function will run when the image has loaded
function setup() {
  const { stage } = app
  const id = PIXI.loader.resources['spritesheet.json'].textures
  const dungeon = new Sprite(id['dungeon.png'])
  const door = new Sprite(id['door.png'])
  const treasure = new Sprite(id['treasure.png'])
  const explorer = new Sprite(id['explorer.png'])

  treasure.x = dungeon.width - treasure.width - 48
  treasure.y = dungeon.height / 2 - treasure.height / 2
  explorer.x = 48
  explorer.y = dungeon.height / 2 - explorer.height / 2
  door.position.set(32, 0)

  

  stage.addChild(dungeon)
  stage.addChild(door)
  stage.addChild(treasure)
  stage.addChild(explorer)

  let numberOfBlobs = 6,
      spacing = 48,
      xOffset = 150;

  //Make as many blobs as there are `numberOfBlobs`
  for (let i = 0; i < numberOfBlobs; i++) {
    let blob = new Sprite(id["blob.png"]);

    //Space each blob horizontally according to the `spacing` value.
    //`xOffset` determines the point from the left of the screen
    //at which the first blob should be added.
    let x = spacing * i + xOffset;

    //Give the blob a random y position
    //(`randomInt` is a custom function - see below)
    let y = randomInt(0, app.stage.height - blob.height);

    //Set the blob's position
    blob.x = x;
    blob.y = y;

    //Add the blob sprite to the stage
    app.stage.addChild(blob);
  }
}

/* eslint-disable no-undef */
document.body.appendChild(app.view)
/* eslint-enable no-undef */

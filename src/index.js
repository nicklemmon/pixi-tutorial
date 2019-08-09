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
  width: 256,
  height: 256,
  antialias: true
})

/* eslint-disable no-undef */
function setFullScreen() {
  app.renderer.view.style.position = 'absolute'
  app.renderer.view.style.display = 'block'
  app.renderer.autoResize = true
  app.renderer.resize(window.innerWidth, window.innerHeight)
}
/* eslint-enable no-undef */

setFullScreen()

PIXI.loader
  .add('spritesheet.json')
  .load(setup)

// This `setup` function will run when the image has loaded
function setup() {
  const { stage } = app

  const id = PIXI.loader.resources['spritesheet.json'].textures
  const dungeon = new Sprite(id['dungeon.png'])
  const blob = new Sprite(id['blog.png'])
  const door = new Sprite(id['door.png'])
  const treasure = new Sprite(id['treasure.png'])
  const explorer = new Sprite(id['explorer.png'])

  treasure.x = dungeon.width - treasure.width - 48
  treasure.y = dungeon.height / 2 - treasure.height / 2
  explorer.x = 48
  explorer.y = dungeon.height / 2 - explorer.height / 2

  stage.addChild( dungeon )
  // stage.addChild( blob )
  // stage.addChild( door )
  stage.addChild( treasure )
  stage.addChild( explorer )
}

/* eslint-disable no-undef */
document.body.appendChild(app.view)
/* eslint-enable no-undef */

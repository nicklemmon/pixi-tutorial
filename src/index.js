import * as PIXI from 'pixi.js'

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
  .add('cat.png')
  .load(setup)

// This `setup` function will run when the image has loaded
function setup() {
  // Create the cat sprite
  const catSprite = PIXI.Sprite.fromImage('cat.png')
  
  // Add the cat to the stage
  app.stage.addChild(catSprite)
}

/* eslint-disable no-undef */
document.body.appendChild(app.view)
/* eslint-enable no-undef */

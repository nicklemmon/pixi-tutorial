import * as PIXI from 'pixi.js'

const app = new PIXI.Application({
  width: 256,
  height: 256
})

/* eslint-disable no-undef */
document.body.appendChild(app.view)
/* eslint-enable no-undef */

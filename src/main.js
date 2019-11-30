import React from 'react'
import blessed from 'neo-blessed'
import { createBlessedRenderer } from 'react-blessed'
import App from './components/App'
import AppModel from './store/AppModel'

const appStore = new AppModel()

const render = createBlessedRenderer(blessed)

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  title: 'paladin - combat tracker'
})

screen.key(['escape', 'q', 'C-c'], (ch, key) => {
  return process.exit(0)
})

const component = render(
  <App 
    store={appStore}
    debug={(message) => screen.debug(message)}
    onKeyPress={(keys, handler) => screen.key(keys, handler)}
  />
  , screen
)
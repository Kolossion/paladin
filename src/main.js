import React from 'react'
import blessed from 'neo-blessed'
import { createBlessedRenderer } from 'react-blessed'
import App from './components/App'
import { Provider } from 'react-redux'

import store from './store'

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
  <Provider store={store}>
    <App 
      debug={(message) => screen.debug(message)}
      onKeyPress={(keys, handler) => screen.key(keys, handler)}
    />
  </Provider>
  , screen
)
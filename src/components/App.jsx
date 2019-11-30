import React, { Component } from 'react'
import { view } from 'react-easy-state'
import appStore from '../store'
import InitPanel from './InitPanel'

class App extends Component {
  componentDidMount() {
    this.props.onKeyPress(['n'], (ch, key) => {
      appStore.nextTurn()
      console.log('APP STORE TURN', appStore.currentTurn)
    })
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR', error)
    console.log('ERROR Info', errorInfo)
  }


  render() {
    return (
      // <element>
      <box
        width='100%'
        height='100%'
      >
        <InitPanel />
      </box>
    // </element>
    )
  }
}

export default view(App)
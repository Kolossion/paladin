import React, { Component } from 'react'
import { view } from 'react-easy-state'
import appStore from '../store'

class App extends Component {
  componentDidMount() {
    this.props.onKeyPress(['n'], (ch, key) => {
      appStore.nextTurn()
    })
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR', error)
    console.log('ERROR Info', errorInfo)
  }

  renderItems() {
    let buffer = []
    for (let i = 0; i < appStore.creatures.length; i++) {
      buffer.push(`${appStore.currentTurn == i ? '● ' : '○ '}` + `{|} ${appStore.creatures[i].name} `)
    }
    //   [(`${'● '}` + '{|} hello ')
    //     , (`${'○ '}` + '{|} hello ')
    //   ].join('\n')
    // }

    return buffer.join('\n')
  }

  render() {
    return (
      // <element>
      <box 
        label={`hello ${appStore.round}`}
        top="center"
        left="center"
        width="100%-2"
        height="100%-2"
        border={ {type: 'line'} }
        style={ {border: {fg: 'cyan'}} }
        content={ this.renderItems() }
        tags
      >
      </box>

    // </element>
    )
  }
}

export default view(App)
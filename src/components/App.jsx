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
    for (let i = 0; i < 10; i++) {
      buffer.push(`${appStore.currentTurn == i ? '● ' : '○ '}` + '{|} Monstar yo ')
    }

    return buffer.join('\n')
  }

  render() {
    return (
      <element>
        <box 
        // label="hello"
        // top="center"
        // left="center"
        // width="50%"
        // height="50%"
          border={ {type: 'line'} }
          style={ {border: {fg: 'cyan'}} }
          content={ this.renderItems() }
          //   [(`${'● '}` + '{|} hello ')
          //     , (`${'○ '}` + '{|} hello ')
          //   ].join('\n')
          // }
          tags
        >
        </box>

      </element>
    )
  }
}

export default view(App)
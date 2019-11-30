import React, { Component } from 'react'
import { observer } from 'mobx-react'
import InitPanel from './InitPanel'

@observer
class App extends Component {
  componentDidMount() {
    this.props.onKeyPress(['n'], (ch, key) => {
      appStore.nextTurn()
    })
  }

  componentDidCatch(error, errorInfo) {
    this.props.debug(`ERROR ${error}`)
    this.props.debug(`ERROR Info ${errorInfo}`)
  }


  render() {
    const store = this.props.store
    return (
      // <element>
      <box
        width='100%'
        height='100%'
      >
        <InitPanel actors={store.actors}/>
      </box>
    // </element>
    )
  }
}

export default App
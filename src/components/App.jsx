import React, { Component } from 'react'
import { connect } from 'react-redux'
import InitPanel from './InitiativePanel'

import { nextTurn } from '../actions/initiative'
import { selectActors, selectTurn } from '../selectors/initiative'

class App extends Component {
  componentDidMount() {
    this.props.onKeyPress(['n'], (ch, key) => {
      console.log(this.props)
      this.props.nextTurn()
    })
  }

  componentDidCatch(error, errorInfo) {
    console.log('ERROR', error)
    console.log('ERROR Info', errorInfo)
  }

  render() {
    console.log('TURN', this.props.turn)
    return (
      <box
        width='100%'
        height='100%'
      >
        <InitPanel turn={this.props.turn}/>
      </box>
    )
  }
}

const mapStateToProps = (state) => ({
  turn: selectTurn(state)
})

const mapDispatchToProps = {
  nextTurn
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
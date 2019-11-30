import React from 'react'
import { connect } from 'react-redux'
import { selectActors, selectTurn, selectRound } from '../selectors/initiative'

class InitiativePanel extends React.Component {
  renderItems(creatures, currentTurn) {
    let buffer = []
    for (let i = 0; i < creatures.length; i++) {
      buffer.push(`${currentTurn == i ? '● ' : '○ '}` + `{|} ${creatures[i].name}`
      )
      // buffer.push(`${appStore.currentTurn == i ? '● ' : '○ '}` + `{|} ${appStore.creatures[i].name} `)
    }
    //   [(`${'● '}` + '{|} hello ')
    //     , (`${'○ '}` + '{|} hello ')
    //   ].join('\n')
    // }

    return buffer.join('\n')
  }

  render() {
    return (
      <box 
        label={'hello'}
        top="center"
        left="center"
        width="100%-2"
        height="100%-2"
        border={ {type: 'line'} }
        style={ {border: {fg: 'cyan'}} }
        // content={ this.renderItems(this.props.actors, this.props.turn) }
        tags
      >
        { this.props.turn }
      </box>
    )
  }
}

const mapStateToProps = (state) => { 
  return {
    turn: selectTurn(state),
    actors: selectActors(state).toJS(),
    round: selectRound(state)
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativePanel)
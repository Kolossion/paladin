import { handleActions } from 'redux-actions'
import { fromJS } from 'immutable'

import { NEXT_TURN } from '../actions/types'

const DEFAULT_STATE = fromJS({
  currentTurn: 0,
  actors: [
    { name: 'Manspazotron',
      type: 'Ancient Black Dragon',
      maxHP: 367,
      curHP: 367,
      AC: 22,
      initBonus: 2
    },
    { name: 'Manspazotron2',
      type: 'Ancient Black Dragon',
      maxHP: 367,
      curHP: 367,
      AC: 22,
      initBonus: 2
    },
    { name: 'Manspazotron3',
      type: 'Ancient Black Dragon',
      maxHP: 367,
      curHP: 367,
      AC: 22,
      initBonus: 2
    },
  ],
  round: 1
})

export default handleActions({
  [NEXT_TURN]: (state, action) => {
    let newNum = state.get('currentTurn') + 1
    return state.set('currentTurn', newNum)
  }
}, DEFAULT_STATE)
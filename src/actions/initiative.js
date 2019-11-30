import { createActions } from 'redux-actions'

import { NEXT_TURN } from './types'

const {
  nextTurn,
} = createActions({}, 
  NEXT_TURN,
)

export {
  nextTurn
}
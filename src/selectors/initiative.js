import { createSelector } from 'reselect'

const initiativeRoot = (state) => state.initiative

export const selectTurn = createSelector(
  initiativeRoot,
  init => init.get('currentTurn')
)

export const selectActors = createSelector(
  initiativeRoot,
  init => init.get('actors')
)

export const selectRound = createSelector(
  initiativeRoot,
  init => init.get('round')
)
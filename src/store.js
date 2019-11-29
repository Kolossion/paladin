import { store } from 'react-easy-state'

const appStore = store({
  currentTurn: 0,
  nextTurn() {
    appStore.currentTurn = appStore.currentTurn + 1
  }
})

export default appStore
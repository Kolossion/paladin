import { store } from 'react-easy-state'

const genDummyCreatures = () => {
  return [
    { name: 'Manspazotron',
      type: 'Ancient Black Dragon',
      maxHP: 367,
      curHP: 367,
      AC: 22,
      initBonus: 2
    },
    { name: 'Manspazotron',
      type: 'Ancient Black Dragon',
      maxHP: 367,
      curHP: 367,
      AC: 22,
      initBonus: 2
    },
    { name: 'Manspazotron',
      type: 'Ancient Black Dragon',
      maxHP: 367,
      curHP: 367,
      AC: 22,
      initBonus: 2
    },
  ]
}

const appStore = store({
  round: 1,
  currentTurn: 0,
  // creatures: [
  // ],
  creatures: genDummyCreatures(),
  
  nextTurn() {
    if (appStore.currentTurn == appStore.creatures.length - 1) {
      appStore.currentTurn = 0
      appStore.round += 1
    } else {
      appStore.currentTurn = appStore.currentTurn + 1
    }
  }
  // inCombat: false,
  // toggleCombatState() {
    
  // }
})

export default appStore
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
    if (this.currentTurn == this.creatures.length - 1) {
      this.currentTurn = 0
      this.round += 1
    } else {
      this.currentTurn = this.currentTurn + 1
    }
  }
  // inCombat: false,
  // toggleCombatState() {
    
  // }
})

export default appStore
import mobx, { observable, computed, action } from 'mobx'

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

export default class AppModel {
  constructor() {
    mobx.autorun(() => console.log(this.report));
  }

  @observable turn = 0
  @observable round = 1
  @observable actors = []

  @computed getInitiativeOrdered() {
    return actors
  }

  @action addActor(actor) {
    this.actors.push(actor)
  }

  @action nextTurn() {
    if (turn == this.actors.length - 1) {
      this.turn = 0
      this.round += 1
    } else {
      this.turn += 1
    }
  }
}
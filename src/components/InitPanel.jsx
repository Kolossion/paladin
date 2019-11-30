import React from 'react'
import { view } from 'react-easy-state'
import appStore from '../store'

const InitPanel = () => {
  const renderItems = (creatures, currentTurn) => {
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

  return (
    <box 
      label={`hello ${appStore.round}`}
      top="center"
      left="center"
      width="100%-2"
      height="100%-2"
      border={ {type: 'line'} }
      style={ {border: {fg: 'cyan'}} }
      content={ renderItems(appStore.creatures, appStore.currentTurn) }
      tags
    />
  )
}

export default view(InitPanel)
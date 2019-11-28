import React from 'react'

const App = (props) => {
  return (
    <box 
      label="hello!"
      border={ {type: 'line'} }
      style={ {border: {fg: 'cyan'}} }>
        An example!
    </box>
  )
}

export default App
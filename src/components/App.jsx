import React, { Component } from 'react'

class App extends Component {
  // let [index, setIndex] = useState(0)
  componentDidCatch(error, errorInfo) {
    console.log('ERROR', error)
    console.log('ERROR Info', errorInfo)
  }

  render() {
    return (
      <element>
        <box 
        // label="hello"
        // top="center"
        // left="center"
        // width="50%"
        // height="50%"
          border={ {type: 'line'} }
          style={ {border: {fg: 'cyan'}} }
          content={
            [(`${'● '}` + '{|} hello ')
              , (`${'○ '}` + '{|} hello ')
            ].join('\n')
          }
          tags
        >
        </box>

      </element>
    )
  }
}

export default App
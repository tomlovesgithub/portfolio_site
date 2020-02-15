import React from 'react';
import ButtonBar from './components/ButtonBar.js'
import CanvasBackground from './components/CanvasBackground.js'
import Title from './components/Title.js'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      loaded: false
    }
  }

  componentDidUpdate(){
    this.setState({
      loaded: true
    })
  }

  render(){
    // let result;
    // if (!this.state.loaded) {
      //   // result = (<Loader/>)
      // }
      return (
        <div>
        <CanvasBackground/>
        <Title/>
        <ButtonBar/>
        </div>
      )
    }
  }

  export default App;

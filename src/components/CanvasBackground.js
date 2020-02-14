import React from 'react';
import scripts from './scripts.js'

class CanvasBackground extends React.Component {
  constructor(){
    super()
    this.state={
      script: scripts[Math.floor(Math.random() * scripts.length)]
    }
  }

  updateDimensions = () => {
    this.refs.canvasRef.width = window.innerWidth
    this.refs.canvasRef.height = window.innerHeight
  };

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  currentGame(e, canvas){
    this.state.script(e, canvas)
  }

  render(){
    return (
      <canvas
      ref='canvasRef'
      style={{border:'1px solid black'}}
      onMouseMove={(e)=>this.currentGame(e, this.refs.canvasRef)}
      >
      </canvas>
    );
  }
}
export default CanvasBackground;

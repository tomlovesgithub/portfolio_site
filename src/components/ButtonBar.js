import React from 'react';
import Pages from './pages.json'
// import ButtonBoi from './ButtonBoi.js'

class ButtonBar extends React.Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }

  toggleActive = (target) => {
    if (this.state.active === target) {
      this.setState({
        active: false
      })
    } else {
      this.setState({
        active: target
      })
    }
  }

  formatButton(page){
    return (<button
      key={page.title}
      onClick={()=>this.toggleActive(page)}
      >
      {page.title}
      </button>)
    }

    render(){
      if (!this.state.active) {
        return (
          <ul id='buttonsBar'>
          {Pages.map(page=>{
            return this.formatButton(page)
          })}
          </ul>
        );
      } else {
        return (<div id='buttonsBar'>
          <button
          onClick={()=>this.toggleActive(this.state.active)}
          >back</button>
          {this.state.active.title}
          <p>{this.state.active.info}</p>
          </div>)
        }
      }
    }
    export default ButtonBar;

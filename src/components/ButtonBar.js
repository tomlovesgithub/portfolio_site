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
    let targeted = this.refs[target.title];
    let notTargetted = Object.keys(this.refs).filter(ref => ref !== target.title)

    notTargetted.forEach((element, i) => {
      this.refs[element].classList.toggle('hide')
    });
    targeted.childNodes[1].classList.toggle('showP')
  }

  formatButton(page){
    return (<div
      className='pageItem'
      key={page.title}
      ref={page.title}
      ><button
      onClick={()=>this.toggleActive(page)}
      >{page.title}
      </button>
      <p>{page.info}</p>
      </div>)
    }

    render(){
      return (
        <div
        id='pageElems'
        >
        {Pages.map(page=>{
          return this.formatButton(page)
        })}</div>
      )}
    }
    export default ButtonBar;

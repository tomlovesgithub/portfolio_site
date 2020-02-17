import React from 'react';
import Pages from './pages.json'
import './ButtonBar.css'

class ButtonBar extends React.Component {
  constructor(){
    super()
    this.state = {
      active: false
    }
  }

  toggleActive = (target) => {
    let targeted = this.refs[target.title];
    let notTargetted = Object.keys(this.refs).filter(ref => (ref !== target.title && ref !== 'wrapperRef'))

    notTargetted.forEach((element, i) => {
      this.refs[element].classList.toggle('hide')

    });
    targeted.childNodes[1].classList.toggle('showP')
    this.refs.wrapperRef.classList.toggle('pageMode')
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
      <p>
      {page.info}
      <br/>
      <a href={page.link}>Link Here</a></p>
      </div>)
    }

    render(){
      return (
        <div
        ref='wrapperRef'
        id='pageElems'
        >
        {Pages.map(page=>{
          return this.formatButton(page)
        })}</div>
      )}
    }
    export default ButtonBar;

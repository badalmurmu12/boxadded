import React from 'react';
import './Addbutton.css'


class Addbutton extends React.Component {

  constructor(){
    super();
    this.state = {
      box : [],
      fotsize: 22
    }

  }

  addCounter = () => {
    this.state.box.push(this.state.box.length + 1)
    this.setState({box :  this.state.box, fotsize: this.state.fotsize+2 })
   }

  removeCounter = () => {
    this.state.box.splice(-1);
    this.setState({box :  this.state.box,fotsize: this.state.fotsize-2 })
   }
render(){
  const resultStyle = {
      padding: '20px',
      fontSize: this.state.fotsize +'px',
    };
  return(
    <React.Fragment >
      <h2>Box Builder </h2>
      <h4> Start Building </h4>
      <div className = "buttonwrapper" >
        <button onClick = { () => this.addCounter() }> Add Box </button>
        <button onClick = { () => this.removeCounter() } > Remove Box</button>
      </div>
      <div className = "message">
        {this.state.box.length ?  '' : 'No Boxes'}
      </div>
      <div className = "boxwrapper" >
          { this.state.box.map( (item) =>
            <div className='box' key = {item} >
            {item}
            </div>
          )}
      </div>

      <div  style={resultStyle}>
            {this.state.box.length ?  this.state.box.length : ''}
      </div>

    </React.Fragment>
  )
}

}

export default Addbutton

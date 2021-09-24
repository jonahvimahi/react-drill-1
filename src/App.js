import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      message: ""
    }

  }
  handleChange(value) {
    this.setState ({ message: value })
  }
  render(){
    return(
      <div>
        <input className="inputValue" type="text" onChange={(e) => this.handleChange(e.target.value)}/>
        <p className="message">{this.state.message}</p>
      </div>
    )
  }
}

export default App;

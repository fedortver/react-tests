import React, { Component } from 'react';
import './App.css';
import Car from './Car/Car'
class App extends Component {
  render() {
	  const divStyle={
		  'text-align':'center'
	  }
    return (
      <div className="App" style = {divStyle}>
		  <h1 style={{fontSize:'20px'}}>Hello word!</h1>
		  <Car/>
      </div>
    );
  }
}

export default App;

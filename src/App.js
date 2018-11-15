import React, { Component } from 'react';
import './App.css';

import Car from './Car'

class App extends Component {
	state={
		cars:[
			{
				name:"Ford",year:2016
			},
			{
				name:"Audi",year:2014
			},
			{
				name:"Mazda",year:2010
			}
		],
		pageTitle:'React components'
	}

	changeTitleHandler = (newTitle)=>{
		this.setState({
			pageTitle:newTitle
		})
	}

	handleInput = (event) =>{
		this.setState({
			pageTitle:event.target.value
		})
	}

  render() {
	  const cars=this.state.cars;
    return (
		<div className="App">
		<button onClick={this.changeTitleHandler.bind(this,"changed")}>Change title</button>
		<input type="text" onChange={this.handleInput}/>
		  <h1>{this.state.pageTitle}</h1>
		  <Car name={cars[0].name} year={cars[0].year} onChangeTitle={this.changeTitleHandler.bind(this,cars[0].name)}/>
		  <Car name={cars[1].name} year={cars[1].year} onChangeTitle={()=>this.changeTitleHandler(cars[1].name)}/>
		  <Car name={cars[2].name} year={cars[2].year} onChangeTitle={()=>this.changeTitleHandler(cars[2].name)}/>

      </div>
    );
  }
}

export default App;

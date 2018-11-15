import React, { Component } from "react";
import "./App.css";

import Car from "./Car";

class App extends Component {
   state = {
      cars: [
         {
            name: "Ford",
            year: 2016
         },
         {
            name: "Audi",
            year: 2014
         },
         {
            name: "Mazda",
            year: 2010
         }
      ],
      pageTitle: "React components"
   };

   changeTitleHandler = newTitle => {
      this.setState({
         pageTitle: newTitle
      });
   };

   handleInput = event => {
      this.setState({
         pageTitle: event.target.value
      });
   };

   render() {
      return (
         <div className="App">
            <button onClick={this.changeTitleHandler.bind(this, "changed")}>
               Change title
            </button>
            <input type="text" onChange={this.handleInput} />
            <h1>{this.state.pageTitle}</h1>
            {this.state.cars.map((car,index) => {
               return (
						<Car
							key={index}
                     name={car.name}
                     year={car.year}
                     onChangeTitle={this.changeTitleHandler.bind(
                        this,
                        car.name
                     )}
                  />
               );
            })}
         </div>
      );
   }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import FoodContainer from './components/FoodContainer/';

class App extends Component {
  render() {
    return (
      <div className="App">
         <FoodContainer />
      </div>
    );
  }
}

export default App;

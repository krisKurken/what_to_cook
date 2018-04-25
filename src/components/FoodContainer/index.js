import React, { Component } from 'react';
import FoodItem from './FoodItem';
import FoodContainerButton from './FoodContainerButton';
import './style.css';


class FoodContainer extends Component {

  state = {
    dish: [],
    apiKey: '1',
    ingredientItem: [],
    active: false
  }

  getDishData = async () => {
    const api = 'https://www.themealdb.com/api/json/v1/' + this.state.apiKey;
    const response = await fetch(api + '/random.php', {mode:'cors'});
    const json = await response.json();
    const data = Object.values(json);
    const ingredientItems = this.concatIngredientsMeasurements(
      this.getIngredients(data[0][0], 8, 28),
      this.getIngredients(data[0][0], 28, 48)
    );
    this.setState({
      dish: data[0][0],
      ingredientItem: ingredientItems,
    });
  }

  buttonEvents = () => {
    this.getDishData();
    this.setState({ active: true});
  }

  concatIngredientsMeasurements = (ingredients, measurements) => {
    let ingredientsContainer = [];
    for (var i = 0; i < ingredients.length; i++) {
      ingredientsContainer.push([ingredients[i], measurements[i]]);
    }
    return ingredientsContainer;
  }

  getIngredients = (data, start, stop) => {
    const dish = Object.entries(data).slice(start, stop);
    const filteredIngredients = dish.filter((item => (item[1] !== '' && item[1] !== null && item[1] !== undefined)));
    const ingredients = filteredIngredients.map((item => item[1]));
    return ingredients;
  }

  render(){
    return(
      <div className='food_container'>
        <FoodContainerButton
          notClickedText='What To Cook?'
          clickedText='Give Me More!'
          changeFunc={this.buttonEvents.bind(this)}
        />
        {
          this.state.active &&(
            Object.keys(this.state.dish).length ?
            <FoodItem ingredientItem={this.state.ingredientItem} dish={this.state.dish}/>
            : <div>Loading...</div>
          )
        }
      </div>
    )
  }
}

export default FoodContainer;

import React, { Component } from 'react';
import './style.css';
import FoodIngredient from './FoodIngredient';


class FoodIngredientsContainer extends Component {

  render(){
    return(
      <ul className='food_ingredients_container'>
        {this.props.ingredientItem.map((item, index) =>
          <FoodIngredient
            key={index}
            ingredient={item[0]}
            measurement={item[1]}/>
          )}
        </ul>
      )
    }
  }
  // const FoodIngredientsContainer = (props) => (
  //   <ul className='food_ingredients_container'>
  //     {props.ingredients.map((item, index) => <FoodIngredient key={index} ingredient={item}/>)}
  //   </ul>
  // )

  export default FoodIngredientsContainer;

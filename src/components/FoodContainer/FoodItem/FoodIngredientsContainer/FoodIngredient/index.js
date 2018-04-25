import React from 'react';
import './style.css';

const FoodIngredient = (props) => (
  <li className='food_ingredients'>
    <p className='food_ingredient'>{props.ingredient}</p>
    <p className='food_measurement'>{props.measurement}</p>
  </li>
)

export default FoodIngredient;

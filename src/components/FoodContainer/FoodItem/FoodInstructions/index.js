import React from 'react';
import './style.css';

const FoodInstructions = (props) => (
  <div className='food_instructions'>
    <p>{props.instructions}</p>
  </div>
)

export default FoodInstructions;

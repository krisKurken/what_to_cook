import React from 'react';
import './style.css';

const FoodHeader = (props) => (
  <div className='food_header' style={{backgroundImage: 'url('+props.img+')'}}>
    <div className='food_header_title'>{props.title}</div>

  </div>
)

export default FoodHeader;

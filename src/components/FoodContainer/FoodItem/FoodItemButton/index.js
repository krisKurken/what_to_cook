import React, { Component } from 'react';
import './style.css';

class FoodItemButton extends Component {

  state = {
    active: false
  }

  changeFunc = () => {
    this.props.changeFunc();
    this.setState({
      active: !this.state.active
    });
  }

  render(){
    return(
        <div className='food_item_button' onClick={this.changeFunc}>
          <span>
            {this.state.active ? this.props.clickedText : this.props.notClickedText}
          </span>

        </div>
    )
  }
}

export default FoodItemButton;

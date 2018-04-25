import React, { Component } from 'react';
import './style.css';
import FoodHeader from './FoodHeader';
import FoodIngredientsContainer from './FoodIngredientsContainer';
import FoodItemButton from './FoodItemButton';
import FoodInstructions from './FoodInstructions';

class FoodItem extends Component {

  state = {
    showRecipe: false,
    showInstructions: false
  }

  onChangeShowRecipe = () => {
    this.setState({
      showRecipe: !this.state.showRecipe
    })
  }

  onChangeShowInstructions = () => {
    this.setState({
      showInstructions: !this.state.showInstructions
    })
  }

  render(){
    return(
      <div className='food_item'>
        <div className='food_header_wrapper'>
        <FoodHeader img={this.props.dish.strMealThumb} title={this.props.dish.strMeal}/>
        </div>
        <div className='food_instructions_wrapper food_list_item'>
          <FoodItemButton
            clickedText='Hide Instructions'
            notClickedText='Show Instructions'
            changeFunc={this.onChangeShowInstructions}
          />
          {this.state.showInstructions &&
            <FoodInstructions instructions={this.props.dish.strInstructions}/>
          }
        </div>
        <div className='food_ingredients_wrapper food_list_item'>
          <FoodItemButton
            clickedText='Hide Recipe'
            notClickedText='Show Recipe'
            changeFunc={this.onChangeShowRecipe}
          />
          {this.state.showRecipe &&
            <FoodIngredientsContainer
              ingredientItem={this.props.ingredientItem}
            />
          }
        </div>
        <div className='food_link_wrapper'>
        <a className='food_link' href={this.props.dish.strYoutube}>View Video Instructions</a>
        <a className='food_link' href={this.props.dish.strSource}>View Recipe Source</a>
        </div>
      </div>
    )
  }
}
export default FoodItem;

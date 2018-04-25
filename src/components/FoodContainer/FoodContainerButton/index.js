import React, { Component } from 'react';
import './style.css';

class FoodContainerButton extends Component {

  state = {
    active: false
  }

  changeFunc = () => {
    this.props.changeFunc();
    this.setState({
      active: true
    });
    document.getElementsByTagName('audio')[0].play();
  }

  render(){
    return(
      <div>
        <div className='food_container_button' onClick={this.changeFunc.bind(this)}>
          <span>
            {this.state.active ? this.props.clickedText : this.props.notClickedText}
          </span>
        </div>
        <audio preload="auto">
          <source src="https://github.com/nclud/2011.beercamp.com/blob/gh-pages/audio/inception.mp3?raw=true" type="audio/mp3" />
          <source src="https://github.com/nclud/2011.beercamp.com/blob/gh-pages/audio/inception.ogg?raw=true" type="audio/ogg" />
        </audio>
      </div>
    )
  }
}

export default FoodContainerButton;

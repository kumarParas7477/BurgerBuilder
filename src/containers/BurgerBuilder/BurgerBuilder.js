
import React, { Component } from 'react';
import Aux from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Buger';
class BurgerBuilder extends Component {
    constructor(props) {
        super(props);

    }
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 2
        }
    }
    render() {
        return (
            <Aux>
                <Burger ingredients ={this.state.ingredients}/>
                <div>BurgerControls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
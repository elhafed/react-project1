import {Navbar,NavbarBrand} from 'reactstrap'
import {DISHES }from '../shared/dishes'
import React, { Component } from 'react'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'

class Main extends Component {

  constructor(props){
    super(props);

    this.state= {
        dishes: DISHES,
        SelectedishID: null
    }
      }

    ondishselect(dishID){
        this.setState({SelectedishID:dishID}) ;   
    }
  render() {
    return (
      <div className="App">
      <Navbar dark color="primary">
        <div className="Container" >
     <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
        </div>
      </Navbar>

      <Menu dishes={this.state.dishes} onClick={(disID)=>this.ondishselect(disID)}/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.SelectedishID)[0]}/>
     </div>

   );
    
  }
}



export default Main;

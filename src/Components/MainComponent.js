import {DISHES }from '../shared/dishes'
import React, { Component } from 'react'
import Menu from './MenuComponent'
import DishDetail from './DishdetailComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
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
          <Header/>

      <Menu dishes={this.state.dishes} onClick={(disID)=>this.ondishselect(disID)}/>
      <DishDetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.SelectedishID)[0]}/>
      <Footer/>
     </div>
   );
    
  }
}



export default Main;

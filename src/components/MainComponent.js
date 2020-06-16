import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {Switch ,Route , Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';
import  DishDetail  from './DishDetailsComponent';


class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state={dishes:DISHES,
            selectedDish:null};
    }
    onDishSelect(dishid) {

        this.setState({selectedDish:dishid});
      }
    
    render(){
        const HomePage =()=>{
            return (
                <Home/>
            );
        }
        return(
            <div >
                <div>
            <Header />
          </div>
         <Switch>
             <Route path="/home" component={HomePage}/>
             <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes}/> }/>
             <Redirect to='/home'/>
         </Switch>
          <Footer />
          </div>

        );
    }
}
export default Main;
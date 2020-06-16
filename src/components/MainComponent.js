import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {Switch ,Route , Redirect } from 'react-router-dom';
import Contact from './ContactComponent';
import { DISHES } from '../shared/dishes';
import  DishDetail  from './DishDetailsComponent';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';


class Main extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            leaders:LEADERS,
            promotions:PROMOTIONS,
            };
    }
    onDishSelect(dishid) {

        this.setState({selectedDish:dishid});
      }
    
    render(){
        const HomePage =()=>{
            return (
                <Home dish={this.state.dishes.filter((dish)=> dish.featured)[0]}
                leaders={this.state.leaders.filter((leaders)=>leaders.featured)[0]}
                promotions={this.state.promotions.filter((promo)=>promo.featured)[0]}
                />
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
             <Route exact path="/contactus" component={Contact}/>
             <Redirect to='/home'/>
         </Switch>
          <Footer />
          </div>

        );
    }
}
export default Main;
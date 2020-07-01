import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {Switch ,Route , Redirect ,withRouter } from 'react-router-dom';
import Contact from './ContactComponent';
import  DishDetail  from './DishDetailsComponent';
import About from './AboutComponent';
import { connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        dishes : state.dishes,
        comments : state.comments,
        leaders : state.leaders,
        promotions : state.promotions

}
}

class Main extends Component
{
    constructor(props)
    {
       
       super(props);
    }
   
    
    render(){
        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };
          
        const HomePage =()=>{
            return (
                <Home dish={this.props.dishes.filter((dish)=> dish.featured)[0]}
                leaders={this.props.leaders.filter((leaders)=>leaders.featured)[0]}
                promotions={this.props.promotions.filter((promo)=>promo.featured)[0]}
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
             <Route exact path="/menu" component={()=> <Menu dishes={this.props.dishes}/> }/>
             <Route exact path="/contactus" component={Contact}/>
             <Route path='/menu/:dishId' component={DishWithId} />
             <Route path='/aboutus' component={()=><About leaders={this.props.leaders}/>}/>
             <Redirect to='/home'/>
         </Switch>
          <Footer />
          </div>

        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));
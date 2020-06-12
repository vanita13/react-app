import React,{Component} from 'react';
import {  Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component
{   
    renderComments(Dish)
    {   
      if (Dish!=null)
       { return(
          Dish.comments.map((item)=>
          <div>
            
            <ol className="list-unstyled">
        <div key={item.id}>
          <p>{item.comment}</p>
          <p>
            -- {item.author},
            {item.date}
          </p>
        </div>
            </ol>
          </div>
          )
        );
    }
    else{
      return(
        <div>

        </div>
      );
    }
        
    }
    renderDish(Dish)
    {
      if (Dish!=null)
    
    return(
      <div>
      <Card>
        <CardImg top src={Dish.image} alt={Dish.name}/>
        <CardBody>
    <CardTitle>{Dish.name}</CardTitle>
    <CardText>{Dish.description}</CardText>
    
        </CardBody>
        
      </Card>
      </div>
    );
      else{
        return(
          <div></div>
        );
      }
    }
    render()
    {
      
        return(
       <div className="container" >  
      <div className="row">    
      <div className="col-50 col-md-5 m-1"> 
                    <Card>
                        {this.renderDish(this.props.selectedDish)}
                    </Card>      
                </div> 
                <div className="col-12 col-md m-1">
                    <h4>comments</h4>
                    {this.renderComments(this.props.selectedDish)}
      </div>
      </div>
      </div>
        );
    }
}
export default DishDetail;
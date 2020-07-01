import React from 'react';
import {  Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


   
   function RenderComments(props)
    {   
      if (props.comments!=null)
       { return(
          props.comments.map((item)=>
          <div>
            
            <ol className="list-unstyled">
        <div key={item.id}>
          <p>{item.comment}</p>
          <p>
            -- {item.author},
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}
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
    function RenderDish({Dish})
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
    function DishDetail(props)
    {
      
        return(
       <div className="container" >  
      <div className="row">    
            <Breadcrumb>
                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                  <h3>{props.dish.name}</h3>
                   <hr />
            </div>       
            </div>
      <div className="row">
      <div className="col-50 col-md-5 m-1"> 
                    <Card>
                        <RenderDish Dish={props.dish}/>
                    </Card>      
                </div> 
                <div className="col-12 col-md m-1">
                      
                    <h4>comments</h4>
                    <RenderComments comments={props.comments}/>
      </div>
      </div>
      </div>
        );
    }

export default DishDetail;
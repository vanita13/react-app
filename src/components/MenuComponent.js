
import React from 'react';
import {  Card, CardImg,  CardTitle, CardImgOverlay } from 'reactstrap';

function RenderMenuItems({dish,onClick})
{
  return (
    <div>
       <Card>
       <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Card>
    </div>
  );

}


function Menu (props) {
      
        const menu = props.dishes.map((dish) => {
          return(
          <div className="col-12 col-md-5 m-1" key={dish.id}>
                 <RenderMenuItems dish={dish} />
          

          </div>
          
          
          
           
        );})

        return (
          <div className="container">
                <div className="row">
                    {menu}
                </div>
                
            </div>
        );
    
}

export default Menu;
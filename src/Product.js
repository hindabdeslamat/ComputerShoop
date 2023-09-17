import React  from 'react';
//import Details from "./Details";
import {Link } from 'react-router-dom';

export default function Product(props) {
    const { title, price, id,  thumbnail,sales } = props;
    let thumbnailsrc = "/pictures/"+thumbnail;
    const re= parseFloat(price) *(1-parseFloat(sales)/100 )
    console.log("price"+ re)
return ( 
      <div className="p">
        
 <div className='remise' > {sales}%</div> 
         <Link to={`/product/${id}`}> <img  src={thumbnailsrc} alt="hhh" /></Link>
          <div >           
            <p >{title}</p>
             {sales>0?<div> 
             <h3> 
            <font style={{textDecoration:"line-through", color:"red"}}
             > {price}</font> {re}dhs  </h3>
             
            </div>
             :  <div><h3>{price}</h3></div>}
            <div >
              <button> ajouter au panier</button>
         </div>
          
        </div>
       
        
    
    </div>
    );
  }

import Product from "./Product"
import productsList from './ProductsList'
import './App.css'
import React,{useState}  from 'react'
export default function Products(props) {
  function ToApp(p){
    props.AjouterAuPanier(p)
}
    return (
      <div className="container">
        
        <h1><i>Ordinateurs portables</i></h1>
        <div >
          {productsList.map((product) => (
              <Product id={product.id}
               sales={product.sales} title={product.title} price={product.price} 
               thumbnail={product.thumbnail} />
          ))}
        </div>
        <div className="main-route-place">
           </div> 
         </div>
      
    )
}
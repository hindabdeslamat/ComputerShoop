import React  from 'react';
import {Link, useParams } from 'react-router-dom';
import ProductList from './ProductsList'
import Product from './Product';
export default function Details()
{ 
    const params=useParams()
    const ProduitTrouvé=ProductList.find (p=> p.id===params.id)
   
    return (<div>
         <Product id={ProduitTrouvé.id}
               sales={ProduitTrouvé.sales} title={ProduitTrouvé.title} price={ProduitTrouvé.price} 
               thumbnail={ProduitTrouvé.thumbnail} />
    <Link to='/'> retour à la page d'accueil</Link>   
        </div>)}
import React from 'react'

import { ProductDetails } from './productdetails';
import { PRODUCTS } from '../../DummyData/product';
export const Product = () => {
    // const{id,productname,price,productimage}=props.data;
    return (
        <>
       <h3 style={{color:"#575656", padding:"20px",fontFamily:"lato" }}>Products</h3>
     <div class="row" style={{margin:"5px" , justifyContent:"center"}}>
     {
      PRODUCTS.map((product)=>(
    <ProductDetails data={product}/>))}
</div>
        </>
    )
}

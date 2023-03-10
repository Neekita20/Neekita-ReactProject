import React, { useContext } from 'react'
import { PRODUCTS } from '../../DummyData/product'
import { ShopContext } from '../../context/shop-context'
import { CartItem } from './cartitem'
import './cart.scss'
import {Link} from 'react-router-dom';

export const Cart = () => {
  const {cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  return (
    <div>
      <h4 style={{color:"#575656", padding:"20px",fontFamily:"lato" }}> Your Cart Items</h4>
      <div className='d-flex justify-content-center'>
        {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
              return <CartItem data={product}/>;
          }
        })}
      </div>
    
      <div class="crd">
  <div class="crd-body" style={{color:"#ff757c",fontSize:"24px"}}>
  Total: Rs. {totalAmount}
  </div>
</div>

<br/>
<Link class="btn btn-primary" to="/signup">Checkout</Link>
    </div>
    
  )
}

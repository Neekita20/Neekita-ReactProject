import React, { useContext } from 'react'
import { PRODUCTS } from '../../DummyData/product'
import { ShopContext } from '../../context/shop-context'
import './cart.scss'
import { useNavigate} from 'react-router-dom';
import { CheckOutItem } from './checkoutitem';

export const Checkout = () => {
  const {cartItems,getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=getTotalCartAmount();
  const navigate = useNavigate();
  function sucess(){
    alert("Success");
    navigate("/");
  }
  return (
    <div>
      <h4 style={{color:"#575656", padding:"20px",fontFamily:"lato" }}>Checkout</h4>
      <div className='d-flex justify-content-center'>
      <div class="col" style={{marginLeft:"30%"}}>
      {PRODUCTS.map((product)=>{
          if(cartItems[product.id]!==0){
              return <CheckOutItem data={product}/>;
          }
        })}
        </div>
      </div>
    
      <div class="crd">
  <div class="crd-body" style={{color:"#ff757c",fontSize:"24px"}}>
  Total: Rs. {totalAmount}
  </div>
</div>

<br/>
<button class="btn btn-primary" onClick={()=>sucess()}>Proceed</button>
    </div>
    
  )
}
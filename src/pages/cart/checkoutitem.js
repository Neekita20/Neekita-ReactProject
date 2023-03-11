import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
export const CheckOutItem = (props) => {
    const{id,productname,price,productimage}=props.data;
    const{cartItems}=useContext(ShopContext);
  return (
   
    <div class="card" style={{width:"500px", padding:"20px", margin:"10px"}}>
    <div class="row g-0">
      <div class="col-md-4">
        <img src={productimage} class="img-fluid rounded-start" alt="..." height={'250px'} width={'250px'}/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"><b>{productname}</b></h5>
          <p class="card-text">Rs. {price}</p>
          <p class="card-text"><small class="text-muted">
            <p class="card-text">Quantity: {cartItems[id]}</p>
           </small></p>
        </div>
      </div>
   
    </div>
  </div>
 
  )
}

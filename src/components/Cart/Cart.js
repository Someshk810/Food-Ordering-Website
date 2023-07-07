import React, { useState } from 'react'
import CartItemDetails from "./CartItemDetails";
import BillDetails from './BillDetails';
import DeliveryDatails from './DeliveryDatails';

import CashOnDelivery from './PaymentType/CashOnDelivery';
import Upi from './PaymentType/Upi';
import Cards from './PaymentType/Cards';

const Cart = (props) => {
  
  const [paymentType, setPaymentType]= useState("cod");

  
  return (
    <div className='cart-container'>

<section className="delivery-payment-details">
    <DeliveryDatails />
  <hr style={{width:"100%",margin:"0px auto 20px auto",border:"1px solid #E9ECEE"}} />

    <div className="payment-details">
    <div>
      <h2 style={{fontSize:"26px", fontWeight:"bold"}}>Payment Details</h2>
      <h6>Select Payment Method </h6>
    </div>
   

     <div className="payment-menu-container">
       <a 
       onClick={()=> setPaymentType("cod")}> 
       <button>
        Cash On Delivery
       </button>
       </a>
       <a 
       onClick={()=> setPaymentType("cards")}> 
       <button>
         Credit Card/ Debit Card
       </button>
       </a>
       <a 
       onClick={()=> setPaymentType("upi")}> 
       <button>
         UPI
       </button>
       </a>

     </div>
      <div className="payment-type-container"> 
      {paymentType==="cod"?<CashOnDelivery />:null}
      {paymentType==="cards"? <Cards />:null}
      {paymentType==="upi"? <Upi />:null}
      </div>

      </div>


    </section> 

    
    <section className="cart-item-container">
    
    
     {/* props.quantity!==0 ? <>:null*/}
  {
    props.cartItems?.map((cartItem)=>{
    
      const{menuId,menuImg,menuName,menuType,price,quantity}= cartItem; 
      
    return(
     
     <CartItemDetails key={menuId} menuId={menuId} menuImg={menuImg} menuName={menuName} menuType={menuType} price={price} itemQuantity={quantity}/>
    );
  })
  }
     
    
     
       
      <button className="add-more-container">
      <div className="add-more-img-container"> 
       <img  
           className="img"
           src={require("../../images/add.png")}
           alt="" />
       </div>

       <div className="add-more"> 
         <span> Add More Items </span>
       </div>

       <div className="add-more-img-container forward"> 
       <img  
           className="img"
           src={require("../../images/right-arrow.png")}
           alt="" />
       </div>
        
      </button>

      
      <div className="text-area-container">
        <textarea className="instruction-input" type="text" placeholder='"Add Cooking Instructions"' rows={1}></textarea>
        </div>

        <button className="coupon-container">
      <div className="add-more-img-container"> 
       <img  
           className="img"
           src={require("../../images/coupon.png")}
           alt="" />
       </div>

       <div className="add-more"> 
         <span> Apply Coupon </span>
       </div>

       <div className="add-more-img-container forward"> 
       <img  
           className="img"
           src={require("../../images/right-arrow.png")}
           alt="" />
       </div>
        
      </button>
     
          

          <div className="bill-summary">
           <span>Bill Summary</span>
          </div>

         <div className="bill-container">

         <BillDetails type= "Sub Total" amount="1200" />
         <BillDetails type= "Delivery Fee" amount="30" />
         <BillDetails type= "GST" amount="20" />

         <hr />

         <BillDetails type= "To Pay" amount="1250" />


   
       

         </div>
      
         
     

    </section> 

    

       
    </div>
  )
}

export default Cart

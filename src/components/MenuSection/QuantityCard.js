import React, { useState } from 'react'

function QuantityCard(props){

  
   
   
    return(
      <div className="quantity-container">
  
      <button
       onClick={()=>{
      
        props.setCartItemQuantity(props.cartItemQuantity-1);
        if(props.cartItemQuantity===1){
            props.setAddBtn(true);
        }
           

       }}
       className="add-container"> 
      <img className="img"
            src={require("../../images/minus.png")}
            alt="" />
        </button>
        <div>
         <span>{props.cartItemQuantity}</span>
        </div>
  
  
        <button
          onClick={()=>{

        // props.setAddBtn(false);
        
       
            // props.addCartItems(cartItemDetails);
        
        props.setCartItemQuantity(props.cartItemQuantity+1)
      }}
         className="add-container"> 
        <img  className="img"  
            src={require("../../images/plus.png")}
            alt="" />
        </button>
  
      
      </div>
    );
  }

export default QuantityCard;

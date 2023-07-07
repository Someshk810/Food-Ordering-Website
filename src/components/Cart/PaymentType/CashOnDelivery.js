import React from 'react'

function CashOnDelivery() {
  return (
    <div className="payment-type-card">
    <div className="payment-type-img">
    <img className="img" 
      src={require("../../../images/cash-on-delivery.png")}
      alt=""
    />
    </div>
    <h3>Cash On Delivery</h3>
    <p className="paragraph">Pay cash at time of delivery</p>
    <a href=".">
     <button style={{width:"100%",height:"100%",color:"white",backgroundColor:"green",fontSize:"20px"}}>
       <p className="paragraph">Pay<span>&#8377;</span>100</p>
     </button>
    </a>

    </div>
  )
}

export default CashOnDelivery

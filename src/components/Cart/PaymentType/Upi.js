import React from 'react'

function Upi() {
  return (
    <div className="payment-type-card">
    <div style={{width:"180px",height:"80px",marginBottom:"10px"}}
    >
    <img className="img" 
      src={require("../../../images/upi.png")}
      alt=""
    />
    </div>
    <h3>Pay via UPI</h3>
    <p className="paragraph">Select </p>

    <div className="upi-type-container">

   <a className="upi-type">
    <button>

      <div className="add-more-img-container"> 
       <img  
           className="img"
           src={require("../../../images/google-pay.png")}
           alt="" />
       </div>

       <div className="add-more"> 
         <span> Google Pay</span>
       </div>

       <div className="add-more-img-container forward"> 
       <img  
           className="img"
           src={require("../../../images/right-arrow.png")}
           alt="" />
       </div>
        
      </button>
      </a>


      
    </div>
    </div>
  )
}

export default Upi

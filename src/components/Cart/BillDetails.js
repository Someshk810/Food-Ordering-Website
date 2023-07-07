import React from 'react'

function BillDetails(props) {
  return (
    <div className="bill-details">
           <div className="bill-item">
            <div>
                {props.type}
            </div>

            <div>
            <p> <span>&#8377;</span>{props.amount}</p>
            </div>

            
           </div>
            
          </div>
  )
}

export default BillDetails

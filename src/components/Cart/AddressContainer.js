import React from 'react';
import { useState } from 'react';
import Modal from './Modal';


 
function AddressContainer() {
    const [openModal, setOpenModal] = useState(false);

  return (
    <div className="address-details">
    <div className="address-type">
     <span>Home</span>
     
    </div>
    <div className="address">
      <p className="">D/102, Blue Villa, Adkl asfkj as iah D/102, Blue Villa, Adkl asfkj as iah  Kalyan, 421301, Maharashtra </p>
     
    </div>
    <div className="select-address">
     <button 
       id="select-btn"
       style={{backgroundColor:"orange",margin:"2px 0px 0px 0px",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",width:"100px", height:"30px",borderRadius:"8px"}} >
       Select
     </button>
     
    </div>
    <div className="select-address">
     <button
      id="select-btn"
      onClick={()=>{
        setOpenModal(true);
      }}
       style={{backgroundColor:"orange",margin:"2px 0px 0px 0px",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",width:"150px", height:"30px",borderRadius:"8px"}} >
       Add new address
     </button>
     {openModal && <Modal close={setOpenModal}/>}
     
    </div>
 
    
  
   </div>
  
  )
}

export default AddressContainer

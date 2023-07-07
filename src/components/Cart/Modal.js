import React from 'react'

function Modal(props) {
  return (
    <div className="modal-background">

   <div className="modal-container">
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" />
  </div>
  <div class="form-group">
    <label for="exampleInputMobilNo">Mobile Number</label>
    <input type="text" maxLength="10" class="form-control" id="exampleInputMobilNo" aria-describedby="emailHelp" placeholder="Enter Mobile Number"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPincode">Pin Code</label>
    <input type="text"  maxLength="6"class="form-control" id="exampleInputPincode" aria-describedby="emailHelp" placeholder="Enter 6 Digit Pincode" />
  </div>
  <div class="form-group">
    <label for="exampleInputFlatNo">Flat / House no, Building, Company, Apartment</label>
    <input type="text" class="form-control" id="exampleInputFlatNo" aria-describedby="emailHelp" placeholder="" />
  </div>
  <div class="form-group">
    <label for="exampleInputArea">Area, Street, Sector, Village</label>
    <input type="text" class="form-control" id="exampleInputArea" aria-describedby="emailHelp" placeholder="" />
  </div>
  <div class="form-group">
    <label for="exampleInputLandmark">Landmark</label>
    <input type="text" class="form-control" id="xampleInputLandmark" aria-describedby="emailHelp" placeholder="eg. near royal hotel" />
  </div>
  <div class="form-group">
    <label for="exampleInputCity">City/ Town</label>
    <input type="text" class="form-control" id="exampleInputCit" aria-describedby="emailHelp" placeholder="" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlState">Selct State</label>
    <select class="form-control" id="exampleFormControlState">
      <option>Maharshtra</option>
      <option>Delhi</option>
      <option>Gujrat</option>
      <option>Banglore</option>
      <option>Rajasthan</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleInputCity">City/ Town</label>
    <input type="text" class="form-control" id="exampleInputCit" aria-describedby="emailHelp" placeholder="" />
  </div>


  
  
  <button
        onClick={()=>{
        props.close(false);
      }}
  
   type="submit" class="btn btn-primary">
    Submit
  
  </button> 
  </form>
      
    </div>
      
    </div>
  )
}

export default Modal

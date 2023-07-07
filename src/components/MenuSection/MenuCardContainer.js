import React, { useEffect, useState } from 'react'
import {MdOutlineStarOutline,MdOutlineCircle,MdAdd} from "react-icons/md";
import QuantityCard from './QuantityCard';




import restaurantData from "./RestaurantData";





function MenuCardContainer(props) {
  const [showAddBtn, setshowAddBtn]=useState(true);
  
  function AddButton(){
    
   
    return(
    <div className="add-btn">
    <a>
     <button 
       onClick={(event)=>{
        
        props.addCartItems(newCartItem);
        // setshowAddBtn(false);
        setCartItemQuantity(1);
       }}
      >
         Add
      <MdAdd
      style={{color:"green" ,height:"13px",width:"13px"}} />
    </button>
    </a> 
    </div>
    );
   
  
  }


  const [cartItemQuantity , setCartItemQuantity]= useState(0);


  useEffect(()=>{
    const value = props.menuData[0].quantity;
    console.log(value);
    if(value!==0){
      console.log(props.menuData);
     
    // setCartItemQuantity(value)
    }
    else{
     
     console.log(props.menuData);
      // props.menuData[0].quantity=cartItemQuantity;
      // setCartItemQuantity(0);
    }
  },[])

  useEffect(()=>{
    let {currMenuItem} = props.menuData[props.index];
    console.log("Somesh"+currMenuItem)
    
    const temp={...currMenuItem, Hi: "Hello",quantity : cartItemQuantity}
    console.log(temp);
    props.menuData[props.index]=temp;
    props.setMenuData( props.menuData )
    // console.log(props.menuData);
    

  },[cartItemQuantity])
  
 

  
//   let quantity;
//   if(props.cartItems.length!==0){

//   quantity=props.cartItems[0];
//   console.log(quantity);
// }
 
 
  const newCartItem={
    menuId:props.menuId,
    menuImg: props.menuImg,
    menuName :props.menuName, 
    menuRating: props.menuRating ,
    menuType:props.menuType,
    menuCategory:props.menuCategory, 
    price:props.price,
    }
   
  

 
  return (
    <div className="menu-card-container">
    <div className="menu-card">
     <div className="menu-card-image-container">
     <img 
       className="img"
      src={props.menuImg}
      alt=""
     />

     </div>

     <div className="menu-card-data-container">
     <div className="menu-card-data-rating">
     <div className="menu-name">
       <span>{props.menuName}</span>
       {props.menuType === "veg"? <img 
        src={require("../../images/veg.png")}
        alt=""
       />: <img 
        src={require("../../images/non-veg.png")}
        alt=""
       />}
      
     </div>
     <div className="menu-rating">
      <span> {props.menuRating}</span> 
    <div style={{ display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",padding:"0px 0px 0px 3px"}}> 
   <MdOutlineStarOutline
   
   style=  { props.menuRating>3?{color:"white" ,height:"13px",width:"13px",backgroundColor:"green"  }:{color:"white" ,height:"13px",width:"13px",backgroundColor:"orange" }} />
   </div>
    </div>
    </div>

  <div className="menu-price-and-add-btn">
    <div className="menu-price">
    <p> &#8377;{props.price}</p>    
    </div>
    {showAddBtn ===false ||cartItemQuantity>0 ?<QuantityCard addBtn={showAddBtn} setAddBtn={setshowAddBtn}  menuId={props.menuId} cartItems={props.cartItems} cartItemQuantity={cartItemQuantity} setCartItemQuantity={setCartItemQuantity}/>:<AddButton />}

     {/* <AddButton /> */}

 </div>
 {/* <h1>{cartItems[0]}</h1> */}
 </div>
 {/* <div className="menu-desc-container">
 <div className="menu-desc">
   <p>
   Lorem ipsum dolor Aspernatur maior maximeli eligendi
   </p>
   </div>

  

 </div> */}
       </div>
    </div>
  )
  
}


export default MenuCardContainer;



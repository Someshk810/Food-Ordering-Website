import React,{useState,useEffect} from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";



import Header from "./Header";
import Home from "./Home";
import SignIn from "../components/SignIn";
import RestaurantCard from "./RestaurantCard";
import Cart from "./Cart/Cart";
import RestaurantView from "../components/MenuSection/RestaurantView";


import "../styles/header.css";
import "../styles/home.css";
import "../styles/sign-in.css";
import "../styles/restaurant-card.css";
import "../styles/cart.css";
import "../styles/modal.css";
import "../styles/restaurant-view.css";

import data from "../data";





 function App(){
  // const[quantity, setQuantity] = useState(0);
  

  //To Add Items in Cart
  const [cartItems, setCartItems]= useState([]);
  
  
  function addCartItems(newCartItem){
    // const{menuId,menuImg,menuName,menuRating,menuType,menuCategory,price}= cartItemDetails;
    // const newCartItem ={menuId,menuImg,menuName,menuRating,menuType,menuCategory,price};

    
    const ItemExist = cartItems.find((cartItem)=>cartItem.menuId === newCartItem.menuId );
    if(ItemExist){
      setCartItems(cartItems.map((cartItem)=> cartItem.menuId === newCartItem.menuId ?
      {...ItemExist, quantity: ItemExist.quantity + 1} :cartItem)
      );}
      else{
        setCartItems([...cartItems, {...newCartItem, quantity:1}])

      }

   
   
    
  }
  useEffect(()=>{
    console.log(cartItems);
    
   
   
  },[cartItems])

    
  
 
  return(
    <Router>
    <Header />
   { data.map((res)=>{
    const{id,name,desc,isPureVeg,image,rating,deliveryTime,cost,offer,}=res;
    return(

      <div  key={id} style={{display:"flex",backgroundColor:"white", justifyContent:"space-evenly" ,flexDirection:"row" ,flexWrap:"wrap"}}>
       <RestaurantCard 
       name={name} 
       desc={desc}
       isPureVeg={isPureVeg} 
        image={image} 
        rating={rating} 
        deliveryTime={deliveryTime}
         cost ={cost}
          offer={offer} />
   
    </div>
    );

    })}
   

    <Routes>

    <Route path="/" element={<Home />}></Route>
    <Route path="/restuarant-view" element={<RestaurantView   addCartItems={addCartItems} cartItems={cartItems}/>}></Route>
    <Route path="/cart" element={<Cart cartItems={cartItems} />}></Route>
    <Route path="/signIn" element={<SignIn />}></Route>
    
   
   

   
    </Routes>

    </Router>
    )
 };
 export default App;
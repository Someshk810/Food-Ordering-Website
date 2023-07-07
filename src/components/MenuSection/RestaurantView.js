import React,{useState,useEffect} from 'react';
import MenuCardContainer from './MenuCardContainer';

import RestaurantData from './RestaurantData';
import data from "../../data";






function RestaurantView(props) {
  

  const [menuData, setMenuData] = useState(data[0].menuData)
 
  
    const {id,name,desc,location,timing,rating} = data[0];
   
  
    
   
  return (
    <div className="restaurant-view">

      <section className="restaurant-data-container">

       
         
      

        <RestaurantData id={id} name={name} desc={desc} location={location} timing={timing} rating={rating} />
   
      </section>

      <section className="menu-filters-container">

      <div className="menu-filter">
    {/* <div>
      <h2 style={{fontSize:"26px", fontWeight:"bold"}}>Select Menu</h2>
    
    </div> */}
   

     <div className="menu-type-container">
       <a 
      //  onClick={()=> setPaymentType("cod")}
       > 
       <button>
       Order
       </button>
       </a>
       <a 
      //  onClick={()=> setPaymentType("cards")}
       > 
       <button>
         Reviews
       </button>
       </a>
       <a 
      //  onClick={()=> setPaymentType("upi")}
       > 
       <button>
         Menu
       </button>
       </a>

     </div>
      {/* <div className="payment-type-container"> 
      <h1>Hello</h1>
      {paymentType==="cards"? <Cards />:null}
      {paymentType==="upi"? <Upi />:null}
      </div> */}

      </div>

    </section>

      <section className="restaurant-menu-and-fliters-container">

      <div className="filters-container">

     Hello

      

      </div>

      <div className="menu-container">
     {  
       menuData.map((res,index)=>{

        const{menuId, menuImg, menuName, price, menuRating, menuType, menuCategory }=res;
       return(
    
      
        <MenuCardContainer key={menuId} menuId={menuId} menuImg={menuImg} menuName={menuName} price={price} menuRating ={menuRating} menuType={menuType} menuCategory={menuCategory}  addCartItems={props.addCartItems}  cartItems={props.cartItems} menuData={menuData} setMenuData={setMenuData} index={index}/>
        
       );
       })
     }
        
    
    
   
      
         
       
         
        
      </div>
     </section>
    </div>
  )
}

export default RestaurantView;

import React, { useContext } from 'react'
import "./Cart.css"
import {StoreContext} from "../../context/StoreContext"

const Cart = () => {
    
    const {cartItem,food_list,removeFromCart,getTotalCartAmount}=useContext(StoreContext);


    return(
        <div className='cart'>
          <div className='cart-items'>
          <div className='cart-items-title'>
              <p>Items</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
          </div>
          <br/>

         
           <hr/>
           {
            food_list.map((item,index)=>{
             if(cartItem[item._id]>0){
                return(
        <div key={index}>
        <div  className='cart-items-title cart-items-item'>
         <img src={item.image} alt=''/>
             <p>{item.name}</p>
             <p>${item.price}</p>
             <p>{cartItem[item._id]}</p>
             <p>${item.price*cartItem[item._id]}</p>
             <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>

          </div>

          <hr/>
        </div>
          
                )
             }
            } )
           }
           </div>
           <div className='cart-bottom'>
            <div className='cart-total'>
              <h2>Cart Total</h2>
              <div>
    <div className='cart-total-details'>
            <p>Subtotal</p>
            <b>${getTotalCartAmount()}</b>
     </div>
     <hr/>
        <div className='cart-total-details'>
        <p>Delivery Fee</p>
        <b>${2}</b>
         </div>
         <hr/>
     <div className='cart-total-details'>

     <p>Total</p>
     <b>${getTotalCartAmount()+2}</b>

        </div>
         
              </div>
             <button>PROCEED TO CHECKOUT</button>

            </div>
            <div className='cart-promocode'>

            <div>
                <p>If you have a promo code, Enter it here</p>
     <div className='cart-promocode-input'>

      <input type='text' placeholder='promo code'/>
      <button>Submit</button>
                </div>
            </div>


            </div>

           </div>
           
            
          
        </div>
       
    )
}

export default Cart
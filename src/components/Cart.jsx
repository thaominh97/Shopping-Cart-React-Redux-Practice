import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Cart = () => {
    const cart = useSelector((state) => state.cart)
   return (
       <>
           <h2 className="cart-title">Shopping Cart</h2>
           <div className="cart-container">
           {cart.cartItems.length === 0 ? (
               <div className="cart-empty">
                   <h3>Your cart is currently empty</h3>
                   <div className="start-shopping">
                       <Link to="/">
                           <svg
                               xmlns="http://www.w3.org/2000/svg"
                               width="20" height="20" fill="currentColor"
                               className="bi bi-arrow-left"
                               viewBox="0 0 16 16">
                               <path
                                   fillRule="evenodd"
                                   d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                           </svg>
                           <span>Start Shopping</span>
                       </Link>
                   </div>

               </div>
           ) :
               (
                   <div>
                       <div className="titles">
                           <h4>Product</h4>
                           <h4>Price</h4>
                           <h4>Quantity</h4>
                           <h4>Total</h4>
                       </div>
                        <div className="cart-items">
                           {cart.cartItems?.map( (cartItem) => (
                               <div key={cartItem?.id} className="cart-item">
                                   <div className="cart-product">
                                       <img src={cartItem?.image} alt={cartItem?.name}/>
                                       <div>
                                           <h4>{cartItem?.name}</h4>
                                           <p>{cartItem?.desc}</p>
                                           <button>Remove</button>
                                       </div>
                                   </div>
                                   <div className="cart-product-price">
                                       {cartItem?.price}
                                   </div>
                                   <div className="cart-product-quantity">
                                       <button>-</button>
                                       <div className="count">{cartItem?.cartQuantity}</div>
                                       <button>+</button>
                                   </div>
                                   <div className="cart-product-total-price">
                                       ${cartItem?.price * cartItem?.cartQuantity}
                                   </div>
                               </div>
                           ))}
                       </div>
                       <div className="cart-summary">
                           <button className="clear-cart">Clear cart</button>
                           <div className="cart-checkout">
                               <div className="cart-subtotal">
                                   <span>Subtotal</span>
                                   <span className="amount">{cart?.cartTotalAmount}</span>
                               </div>
                               <p>Taxes and shipping calculated at checkout</p>
                               <button>Checkout</button>
                               <div className="continue-shopping">
                                   <Link to="/" >
                                       <svg
                                           xmlns="http://www.w3.org/2000/svg"
                                           width="20" height="20"
                                           fill="currentColor"
                                           className="bi bi-arrow-left"
                                           viewBox="0 0 16 16">
                                           <path
                                               fillRule="evenodd"
                                               d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                       </svg>
                                       <span>Continue Shopping</span>
                                   </Link>
                               </div>
                           </div>
                       </div>

                   </div>
               )
           }
       </div>
       </>
   )
}
 
export default Cart;
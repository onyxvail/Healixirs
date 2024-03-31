import React, { useContext } from 'react';
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import {Footer} from '../Footer/Footer';

const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    const handleProceedToCheckout = async () => {
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    amount: getTotalCartAmount(),
                    currency: 'USD',
                 
                })
            });

            // Check if the response is OK
            if (!response.ok) {
                throw new Error('Error initiating payment');
            }

            // Parse the response as JSON
            const data = await response.json();

            // Redirect user to CHAPA payment interface
            window.location.href = data.checkoutUrl;
        } catch (error) {
            console.error('Error initiating payment:', error.message);
            // Handle error - display error message or perform other actions
        }
    };

    return (
        <div className='cart-page bg-customNeon'>
        <div  className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitems-format cartitems-format-main">
                                <img src={e.image} alt="" className='cart-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                                <p>${e.new_price * cartItems[e.id]}</p>
                                <img className ='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fees</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                           <h3>Total</h3>
                           <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button onClick={handleProceedToCheckout} className="animate-pulse bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-4">PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a Promocode, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" id="promocode" placeholder='Enter Promocode' className="border-2 border-gray-300 rounded-l px-4 py-2 w-2/3" />
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-r">Submit</button>
                    </div>
                 </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default CartItems;

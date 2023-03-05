import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h2  className={cart.length === 2 ? `orange` : `purple`}>This is cart container {cart.length}</h2>
            {
                cart.map(tshirt => <p
                key={tshirt._id}
                >
                  {tshirt.name}
                  <button onClick={()=>handleRemoveItem(tshirt)}>Remove</button>  
                </p>)
            }
            
        </div>
    );
};

export default Cart;
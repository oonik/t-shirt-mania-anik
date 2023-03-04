import React from 'react';

const Cart = ({cart, handleRemoveItem}) => {
    return (
        <div>
            <h2>This is cart container {cart.length}</h2>
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
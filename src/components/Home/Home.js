import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const handleAddToCart = tshirt =>{
      const exiest = cart.find(ts => ts._id === tshirt._id);
      if(exiest){
        alert('already addede')
      }
      else{
        const newCart = [...cart, tshirt];
      setCart(newCart);
      }
    };
    const handleRemoveItem = tshirt =>{
      const remaining = cart.filter(ts => ts._id !== tshirt._id);
      setCart(remaining)
    }
    return (
        <div className='home-container'>
          <div className="t-shirt-container">
          {
            tShirts.map(tshirt => <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
            ></Tshirt>)
          }
         
           </div>
         <div className="cart-container">
                <Cart 
                key={cart._id}
                cart={cart}
                handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
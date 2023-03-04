import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleAddToCart}) => {
      const {name, price, gender, picture, id}=tshirt;
    return (
        <div className='tshirt-info'>
            <img src={picture}></img>
            <h2>Name: {name}</h2>
            <h4>Price:{price}</h4>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;
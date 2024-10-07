import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

import './cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [name, setName] = useState('');

  const handleSubmit = (e, itemName, itemPrice) => {
    e.preventDefault();
    axios
      .post('/storecart', { name: itemName, price: itemPrice }) // Pass itemName to the POST request
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <form onSubmit={handleSubmit}>
      <article>
        {cart?.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_img">
              <img src={item.img} />
              <p>{item.title} </p>
            </div>
            <div>
              <button onClick={() => handleChange(item, +1)}> + </button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}> - </button>
            </div>
            <div>
              <span>{item.price} </span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
              <button style={{ marginLeft: '10px' }} onClick={(e) => handleSubmit(e, item.title,item.price)}>Submit</button> {/* Pass item.title to handleSubmit */}
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </form>
  );
};

export default Cart;

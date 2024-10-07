import React, { useState } from "react";
import Amazon from './amazon';
import list from './data';
import Cards from './cards';
import Search from "./search";
import Cart from "./cart";
import './fruits.css';

function Fruits() {
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleclick = (item) => {
        let isPresent = false;
        cart.forEach((product) => {
            if (item.id === product.id)
                isPresent = true;
        });
        if (!isPresent) {
            setCart([...cart, { ...item, amount: 1 }]);
        }
    }

    const handleChange = (item, d) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === item.id) {
                const newAmount = cartItem.amount + d;
                // Ensure that the amount is at least 1.
                cartItem.amount = newAmount >= 1 ? newAmount : 1;
            }
            return cartItem;
        });

        setCart(updatedCart);
    }

    return (
        
        <div>
            
            
            <Search size={cart.length} setShow={setShow} />
            {show ? <Amazon handleclick={handleclick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />}
            
        </div>
    )
}

export default Fruits;

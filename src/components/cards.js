
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Cards ({ item,handleclick}){
    

    const { id , title, price, img } = item;
    return (
        <div className="cards">
            <div className="image-box">
                <img style={{width:250,border: "5px solid #555"}} src={img} alt={title} />
                <div className="details">
                    <p>{title}</p>
                    <p>{price}</p>
                    <button onClick={()=>handleclick(item)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;

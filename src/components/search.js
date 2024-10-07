import React from "react";
import './search.css';
import {FaSearch} from "react-icons/fa";

function Search({size,setShow}){
    return(
        <div className="search-bar">
            
            <div className="input-wrapper">
                
            <h1>Add Product ------</h1>
            <a href="/form"><button>Add Product</button></a>
            </div>
            <img className="cart-img" src="https://cdn-icons-png.flaticon.com/512/487/487932.png" onClick={()=>setShow(false)} ></img>
            <span>{size}</span>

            
        </div>

    )
}

export default Search;
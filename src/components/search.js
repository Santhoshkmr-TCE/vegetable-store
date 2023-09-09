import React from "react";
import './search.css';
import {FaSearch} from "react-icons/fa";

function Search({size,setShow}){
    return(
        <div className="search-bar">
            
            <div className="input-wrapper">
                <FaSearch id = "search-icon" />
                <input className="form-control form-input" type="text" placeholder="Type to search"></input>
            </div>
            <img className="cart-img" src="https://cdn-icons-png.flaticon.com/512/487/487932.png" onClick={()=>setShow(false)} ></img>
            <span>{size}</span>
        </div>
    )
}

export default Search;
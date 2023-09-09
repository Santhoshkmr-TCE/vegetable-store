import React from "react";
import './display.css'

function Display(){
    return(
    <div className="display-obj">
        <div className="fruits-veg">
            <h3 className="ju">Fruits & Vegetables</h3>
            
            <div className="fru-veg-box">
                
                <a href='/fruitt'><img className="fruit-img" src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/6d0c91b9-8b97-4bfd-8340-a4142eafe28d/91737d52-845d-453d-984c-8d4c7807a257/hp_f&v_m_fresh-vegetables_480_250823.jpg"></img></a>
                
                <a href="/fruittt"><img className="vege-img" src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/6d0c91b9-8b97-4bfd-8340-a4142eafe28d/91737d52-845d-453d-984c-8d4c7807a257/hp_f&v_m_fresh-fruits_480_250823.jpg"></img></a>
                <a href="/herbs"><img className="herbs-img" src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/6d0c91b9-8b97-4bfd-8340-a4142eafe28d/91737d52-845d-453d-984c-8d4c7807a257/hp_f&v_m_herbs-&-seasoning_480_250823.jpg"></img></a>
            </div>           
        </div>
    </div>
    )
}

export default Display;
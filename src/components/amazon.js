import React from "react";
import list from './data';
import Cards from './cards';

function Amazon({handleclick}){
    return(
        <div>
            <h3 style={{textAlign:"center",marginTop:50,fontSize:50 }}>Fruits</h3>
        <section>
            {list.map((item) =>(
                <Cards key={list.id} item={item} handleclick={handleclick} />
            ))}
        </section>
        </div>
    )
}
export default Amazon;
import React,{useState} from "react";
import list from './data2';
import Cards from './cards'
import Search from "./search";
import './fruits.css';


function Herbs (){
    const [show,setShow] = useState(true);
    const [cart , setCart] = useState([]);
    const handleclick = (item)=>{
        let isPresent = false;
        cart.forEach((product)=>{
            if (item.id === product.id)
            isPresent = true;
        })
        if (isPresent){
            return ;
        }
        setCart([...cart, item]);
    }
    
    return(
        <div>
            <Search size={cart.length}/>
            <h3 style={{textAlign:"center",marginTop:50,fontSize:50 }}>Fruits</h3>
        <section>
            {list.map((item) =>(
                <Cards key={list.id} item={item} handleclick={handleclick} />
            ))}
        </section>
        </div>
    )
}
export default Herbs;
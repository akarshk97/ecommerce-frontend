import React, {useState, useEffect} from "react"
import "../styles.css"
import { API } from "../backend"
import Base from "./Base"
import Card from "./Card"
import { getProducts } from "./helper/coreapicalls"
import { loadCart } from "./helper/cartHelper"
import PaymentBrainTree from "./PaymentBrainTree"


const Cart = ()=>
{
    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false)
    
    
    useEffect(()=>{
        setProducts(loadCart())
    }, [reload])
    const loadAllProduct = products =>{
        return(
            <div>
                <h2>This section to load products</h2>
                {products.map((product, index)=>{
                    return (<Card 
                    key={index} 
                    product={product}
                    removeFromCart={true}
                    addToCart={false}
                    setReload={setReload}
                    reload={reload}
                    ></Card>)
                })}
            </div>
        )
    }
    
    return (
        <Base title = "Cart page" description="Ready to Checkout"> 
            
            <div className="row text-center">
                <div className="col-6">
                    {products.length > 0 ? loadAllProduct(products) : (
                        <h3>No products in cart</h3>)}
                </div>    
                <div className="col-6"><PaymentBrainTree products={products} setReload={setReload}></PaymentBrainTree></div>    
            </div>
            
        </Base>
    )
}

export default Cart;
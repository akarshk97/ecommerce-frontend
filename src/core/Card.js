import React,{useState,useEffect} from "react"
import ImageHelper from "./helper/imagehelper";
import { addItemTocart, removeItemFromCart } from "./helper/cartHelper";
import { Redirect } from "react-router-dom";


const Card = ({
    product,
    addToCart = true,
    removeFromCart = false,
    setReload = f => f,
    // function(f) {return f}
    reload = undefined
}) =>{

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(product.count)

    const cardTitle = product ? product.name : "A photo from pexel"
    const cardDescription = product ? product.description : "Default description"
    const cardPrice = product ? product.price : "Default"

    const addtoCart = () =>{
        addItemTocart(product, ()=>setRedirect(true))
    }
    const getARedirect = redirect =>{
        if(redirect){
            return <Redirect to="/cart"></Redirect>
        }
    }
    const showAddToCart = addToCart =>{
        return addToCart && (
            <button 
            onClick={addtoCart}
            className="btn btn-block btn-outline-info mt-2 mb-2">
            Add to Cart
            </button>
        
        )
    }
    const showremoveFromCart = removeFromCart =>{
        return removeFromCart && (
            <button
            onClick={()=>{removeItemFromCart(product._id)
            setReload(!reload)
            }}
            className="btn btn-block btn-outline-danger mt-2 mb-2">
            Remove from cart
            </button>
        )
    }
    return (
        
        
              <div className="card text-white bg-dark border border-info ">
                <div className="card-header lead">{cardTitle}</div>
                <div className="card-body">
                    {getARedirect(redirect)}
                  <ImageHelper product={product} ></ImageHelper>
                  <p className="lead bg-info font-weight-normal text-wrap">
                    {cardDescription}
                  </p>
                  <p className="btn btn-info rounded  btn-sm px-4">${cardPrice}</p>
                  <div className="row">
                    <div className="col-12">
                     {showAddToCart(addToCart)}
                     </div>
                    <div className="col-12">
                      {showremoveFromCart(removeFromCart)}
                    </div>
                  </div>
                </div>
              </div>
            );
          };

export default Card;
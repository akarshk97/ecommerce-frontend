import React from "react"
import { API } from "../../backend";

const ImageHelper = ({product}) =>{
    const imageurl = product ? `${API}/product/photo/${product._id}`: `https://images.pexels.com/photos/4113084/pexels-photo-4113084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
    //const imageurl =  `https://images.pexels.com/photos/3902882/pexels-photo-3902882.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
    return (

        <div className="rounded border border-info p-2">
                    <img
                      src={imageurl}
                      alt="photo"
                      style={{ maxHeight: "100%", maxWidth: "100%" }}
                      className="mb-3 rounded"
                    />
                  </div>
    )
}

export default ImageHelper;
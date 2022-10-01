import React from "react";
import "./product.css"
const Product=({pid,pname,cmp,ctg,wrnt})=>{
    return(
        <>
        <div>
            <table>
              
             <h2>Product ID :{pid}</h2>
             <h3>Product Name :{pname}</h3>
             <h4>Product Company :{cmp}</h4>
             <h4>Product Catagory :{ctg}</h4>
             <h4>Product Warranty :{wrnt}</h4>
             </table>
             </div>
        </>
    )
}
export default Product;
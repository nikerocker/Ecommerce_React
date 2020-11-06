import React from 'react'
import './VariantSelector.css'
export default function VariantSelector(props) {
    
    var variant = props.variant;
    // console.log(variant)

   const handleClick = (e)=>{
      let v = e.target.getAttribute("data-index")
       document.getElementsByClassName('add-to-cart')[v].style.display = 'block';
    }
    return (
        <>
            <div  className="variant-selector">
               <div id="add__to__cart" className="add-to-cart">
               <button className="">Add to Cart</button>
               </div>
            <h5>Select Size</h5>
            <div className="size-in-number">
                {
                variant.map((value, i)=>{
                 
                    return(
                        <span data-index={i} onClick={(e)=>handleClick(e)} key={i}>{value.value}</span>
                        )
                         })
                }
                </div>
                    <h4>Sizes: XS, S, M, L, XL, XLL</h4>
                </div>           
        </>
    )
}

//set a count in span, than pass the same count into the handleclick function, then into div then it will display;



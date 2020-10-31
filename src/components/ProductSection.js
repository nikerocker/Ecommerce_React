import React from 'react'
import Product from './Product'

export default function ProductSection(props) {
    // console.log(props.productsData);
    return (
        <div>
        <section className="product-container">
            <div className="container-fluid mb-4">         
                            <Product productsData={props.productsData}/>
            </div>
        </section>
        </div>
    )
}

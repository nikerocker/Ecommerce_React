import React  from 'react'
import VariantSelector from './VariantSelector'
export default function Product(props) {
    var productsData = props.productsData;
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    return (
        <div className="row justify-content-center row-cols-sm-2
         row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            {
            
            productsData.map((value,i)=>{
                // console.log(value.options[0]);
                var percentOff = parseInt(([value.compare_at_price - value.price]/value.compare_at_price)*100);//8-4=4
                return(
                    
                    <div className="col mt-4 mb-2 products-in-row" key={i}>
                        <div className="card">
                            <VariantSelector variant={value.options}/>
                        <img src={value.image_src} alt={value.name} />
                    <div className="product-info">
                    <h3>{value.vendor}</h3>
                    <h4>{truncate(value?.name, 30)}</h4>
                    <div className="price-container">
                        <span className="actual-price">${value.price}</span>
                        <span className="compare-at-price">${value.compare_at_price}</span>
                        <span className="percentage-off">({percentOff}% OFF)</span>
                    </div>
                    </div>
                        </div>
                </div>
                )
                })
            }
        </div>
        )
}

    

import React from 'react'
import './product.css'

const Product = () => {
    return(
        <div className="product">
            <div className="product_info">
                <p>Title</p>
                <p  className="product_price">
                    <small>$</small>
                    <strong>10.99</strong>
                </p>
            </div>
            <div className="product_rating">
                <p>🌟</p>
            </div>
            <img 
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
                alt="product" 
            />
            <button>Add to Basket</button>
        </div>
    )
}
export default Product
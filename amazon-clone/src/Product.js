import React from 'react'
import './product.css'

const Product = ({title, imageUrl, price, rating}) => {
    return(
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p  className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product_rating">
                {Array(rating).fill().map(star => (
                    <p>🌟</p>
                ))}
            </div>
            <img 
                src={imageUrl}
                alt="product" 
            />
            <button>Add to Basket</button>
        </div>
    )
}
export default Product
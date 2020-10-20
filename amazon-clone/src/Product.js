import React from 'react'
import './product.css'

//import React ContextAPI
import {useStateValue} from './StateProvider'

const Product = ({id, title, imageUrl, price, rating}) => {
    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id: id,
                title: title,
                image: imageUrl,
                price: price,
                rating: rating,
            }
        })
    }
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
                {Array(rating).fill().map((i,_) => (
                    <span key={i}>🌟</span>
                ))}
            </div>
            <img 
                src={imageUrl}
                alt="product" 
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
export default Product
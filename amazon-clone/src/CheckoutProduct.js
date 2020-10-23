import React from 'react';
import './checkout_product.css';

import {useStateValue} from './StateProvider';

const CheckoutProduct = ({id,price,title,rating,image}) => {
    const [{basket}, dispatch] = useStateValue()

    const removeItemFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })    
    }

    return(
        <div className='checkoutProduct'>
            <img src={image} alt='' className='checkoutProduct__image'/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>
                <button onClick={removeItemFromBasket}>Remove from Basket</button>
            </div>
           
        </div>
    )
}

export default CheckoutProduct;
import React from 'react';
import './checkout_product.css';

import {useStateValue} from './StateProvider';

const CheckoutProduct = ({id,price,title,rating,image}) => {
    return(
        <div className='checkoutProduct'>
            <img src={image} alt='' className='checkoutProduct__image'/>
            <div className='checkoutProduct__info'>
                <p className='checkout__title'>{title}</p>
                <p className='checkout__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkout__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p key={i}>🌟</p>
                        ))
                    }
                </div>
            </div>
            <button>Remove from Basket</button>
        </div>
    )
}

export default CheckoutProduct;
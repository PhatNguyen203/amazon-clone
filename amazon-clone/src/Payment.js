import React, {useState} from 'react';
import './payment.css';
import CurrencyFormat from 'react-currency-format';

import CheckoutProduct from './CheckoutProduct';
import {useStateValue} from './StateProvider';

import {CardElement,useStripe, useElements} from '@stripe/react-stripe-js';
import {getBasketTotal} from './reducer';

const Payment = () => {
    const [{basket, user}, dispatch] = useStateValue() 
    const stripe = useStripe()
    const elements = useElements()

    const [processing, setProcessing] = useState('')
    const [succeeded, setSucceeded] = useState(false)

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const handleSubmit = e => {
        //do all fancy stripe stuff...
    }
    const handleChange = e => {
        //display any change in CardElements component and
        //show any error if exists
        setDisabled(e.empty)
        setError(e.error ? e.error.message : '')

    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>Checkout: {basket?.length} items</h1>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Houston, TX</p>
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                image={item.image}
                                title= {item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment__details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                        </form>
                        <div className='payment__priceContainer'>
                        <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                            />

                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? (<p>Processing</p>) : 'Buy Now' }</span>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
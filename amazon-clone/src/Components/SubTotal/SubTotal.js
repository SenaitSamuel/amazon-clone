import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";

function SubTotal() {

    const history = useHistory();
    const [{ basket } , dispatch] = useStateValue();
    
    
    return (
        <div className='subTotal'> 
          <CurrencyFormat
           renderText = {(value) => (
               <>
                <p>
                    Subtotal ({basket.length} items):
                    <strong>{` ${value}`} </strong>
                </p>
                <small className ='subTotal__gift'>
                    <input type='checkbox' />
                    This order contians a gift
                </small>
               </>
           )}
           decimalScale = {2}
           value={getBasketTotal(basket)}
           displayType = {'text'}
           thousandSeparator = {true}
           prefix= {'$'}

           />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>             
        </div>
    )
}

export default SubTotal

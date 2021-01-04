import React from 'react';
import SubTotal from '../SubTotal/SubTotal';
import './CheckOut.css'

function CheckOut() {
    return (
        <div className='checkOut'>
            <div className='checkOut__left'>
               { /* this is a loading <img className='checkout__ad' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/ui/loadIndicators/loading-large._CB485945341_.gif'  alt=''/>*/}
                <img className='checkOut__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='OCC' />
                <div>
                    <h2 className=' checkOut__title'>Your shopping Basket</h2>
                </div>

            </div>
            <div className='checkOut__right'>
                <SubTotal/>
            </div>
           
            
        </div>
    )
}

export default CheckOut

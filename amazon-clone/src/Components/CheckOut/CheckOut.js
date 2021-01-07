import React from 'react';
import SubTotal from '../SubTotal/SubTotal';
import './CheckOut.css';
import CheckOutProduct from '../CheckOutProduct/CheckOutProduct';
import { useStateValue } from '../../StateProvider';
import FlipMove from 'react-flip-move';

function CheckOut() {

    const [{ basket ,user } , dispatch] = useStateValue();

    return (
        <div className='checkOut'>
            <div className='checkOut__left'>
               { /* this is a loading <img className='checkout__ad' src = 'https://images-eu.ssl-images-amazon.com/images/G/02/ui/loadIndicators/loading-large._CB485945341_.gif'  alt=''/>*/}
                <img className='checkOut__ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='OCC' />
                <div>
                   <h3>Hello, {user?.email}</h3>
                    <h2 className=' checkOut__title'>Your shopping Basket</h2>
                    <FlipMove>
                        {basket.map((item, index) => (
                            <CheckOutProduct key={index}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </FlipMove>
                </div>

            </div>
            <div className='checkOut__right'>
                <SubTotal/>
            </div>
           
            
        </div>
    )
}

export default CheckOut

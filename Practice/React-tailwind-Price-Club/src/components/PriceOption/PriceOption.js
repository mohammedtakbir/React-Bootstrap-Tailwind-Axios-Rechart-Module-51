import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-teal-400 p-5 rounded-md'>
            <h2 className='text-3xl mb-2'>{option.name}</h2>
            <h3 className='text-2xl mb-4'><span className='text-5xl'>${option.price}</span>/month</h3>
            {
                features.map((feature, idx) => <Feature 
                    feature={feature}
                    key={idx}
                    ></Feature>)
            }
            <button className='bg-white px-3 py-1 rounded-md mt-6'>Buy Now</button>
        </div>
    );
};

export default PriceOption;
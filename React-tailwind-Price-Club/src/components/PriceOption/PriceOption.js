import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const {features} = option;
    return (
        <div className='bg-teal-400 rounded-md p-5 m-5'>
            <div>
                <h2 className='text-3xl mb-3'>{option.name}</h2>
                <h3>
                    <span className='text-5xl'>${option.price}</span>
                    <span className='text-2xl'>/month</span>
                </h3>
            </div>
            {
                features.map((feature, idx) => <Feature 
                feature={feature}
                key={idx} //? map korle second parameter e array er index return kore. eitare key hisebe pathano hoise.
                ></Feature>)
            }
            <button className='bg-white px-4 py-1 mt-7 rounded-md font-medium'>Buy Now</button>
        </div>
    );
};

export default PriceOption;
import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        {id: 1, name: 'Free', price: 0, features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Ajaira feature',
            'Hudai feature',
            'Budai feature'
        ]},
        {id: 2, name: 'Medium', price: 9.99, features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Ajaira feature',
            'Hudai feature',
            'Budai feature'
        ]},
        {id: 3, name: 'Premium', price: 19.99, features: [
            'Awesome feature',
            'Extra feature',
            'Unnecessary feature',
            'Ajaira feature',
            'Hudai feature',
            'Budai feature'
        ]}
    ];
    return (
        <div className='px-5'>
            <h1 className='text-4xl font-medium my-4 mb-9'>Best Deal of the Town!!!</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                {
                    pricingOptions.map(option => <PriceOption 
                    key={option.id}
                    option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;
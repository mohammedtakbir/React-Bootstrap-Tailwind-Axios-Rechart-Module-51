import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: '0', features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'will never use Feature',
            'Hudai Feature',
            'Budai Feature',
        ]
    },
        { id: 1, name: 'Medium', price: '9.99', features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'will never use Feature',
            'Hudai Feature',
            'Budai Feature',
        ] },
        { id: 1, name: 'Premium', price: '19.99', features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'will never use Feature',
            'Hudai Feature',
            'Budai Feature',
        ] },
    ]
    return (
        <div>
            <h1 className="text-4xl font-bold p-4">Best Deal of the Town!!!</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 my-5 gap-5'>
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
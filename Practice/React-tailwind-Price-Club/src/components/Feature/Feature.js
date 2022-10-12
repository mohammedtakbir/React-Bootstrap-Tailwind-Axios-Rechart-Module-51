import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <div className='mb-4 flex items-center'>
            <CheckCircleIcon className='w-6 h-6 text-white mr-4'></CheckCircleIcon>
            <p>{feature}</p>
        </div>
    );
};

export default Feature;
import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'
const Feature = ({feature}) => {
    return (
        <div className='flex mt-5 items-center'>
            <CheckCircleIcon class="h-6 w-6 text-white" />
            <p className='ml-3'>{feature}</p>
        </div>
    );
};

export default Feature;
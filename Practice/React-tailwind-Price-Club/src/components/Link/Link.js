import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mx-5 md:my-0 mb-3 hover:text-white duration-200 ease-linear inline-block'>
                <a className='text-xl' href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;
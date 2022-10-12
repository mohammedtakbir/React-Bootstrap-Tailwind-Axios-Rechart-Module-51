import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='md:ml-12 ml-3'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;
import React from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: './home' },
        { id: 2, name: 'Products', path: './products' },
        { id: 3, name: 'Orders', path: './orders' },
        { id: 4, name: 'Contact', path: './contact' },
        { id: 5, name: 'About', path: './about' }
    ];
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-teal-500'>
            <div onClick={() => setOpen(!open)} className="h-10 w-10 cursor-pointer md:hidden">
                {open ? <XMarkIcon /> : <Bars3Icon />}
            </div>
            <ul className={`md:flex justify-center md:py-3 bg-teal-500 w-full absolute md:static duration-500 ${open ? 'top-10' : 'top-[-240px]'}`}>
                {
                    routes.map(route => <Link 
                        route={route}
                        key={route.id}
                        ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
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
    //? for hamburger menu
    const [open, setOpen] = useState(false);
    return (
        <nav className='bg-teal-500'>
            {/* jehetu ekhane event bubble hoitase, tai onClick upore div er moddhe dise */}
            <div onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer md:hidden">
                {
                    open ? <XMarkIcon /> : <Bars3Icon />
                    // <XMarkIcon onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer" /> :
                    // <Bars3Icon onClick={() => setOpen(!open)} className="h-8 w-8 cursor-pointer" />
                }
            </div>

            <ul className={`md:flex justify-center absolute md:static duration-500 ${open ? 'top-6' : 'top-[-150px]'} bg-teal-500 w-full py-3`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
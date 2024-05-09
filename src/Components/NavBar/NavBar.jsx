import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavBar = props => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      
    return (
        <nav className='p-5 bg-sky-300'>
            <div className='text-xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true? 
                    <AiOutlineClose></AiOutlineClose>: 
                    <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex duration-300 absolute md:static
            ${open? 'top-10': '-top-40'} 
            bg-sky-300 px-6 py-2 rounded-lg`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};
export default NavBar;
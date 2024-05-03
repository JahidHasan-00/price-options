import React from 'react';
import PropTypes from 'prop-types';
import { list } from 'postcss';
import Link from '../Link/Link';

const NavBar = props => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' }
      ];
      
    return (
        <nav>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;
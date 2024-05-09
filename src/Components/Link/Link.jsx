import React from 'react';
import PropTypes from 'prop-types';

const Link = ({route}) => {
    console.log(route);
    return (
        <li className='md:mr-10 px-6 rounded hover:bg-sky-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired
};

export default Link;
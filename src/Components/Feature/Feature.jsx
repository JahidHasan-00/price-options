import PropTypes from 'prop-types'
import { useState } from 'react';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <>
            <p className='flex items-center'><AiFillCheckCircle className='mr-2 text-green-500'></AiFillCheckCircle>{feature}</p>
        </>
    );
};
Feature.propTypes ={
    feature: PropTypes.string
}
export default Feature;
import React from 'react';
import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    console.log(option);
    const { name, price, features } = option;
    return (
        <div className='bg-blue-500 flex flex-col p-6 rounded-xl text-white'>
            <h2 className='text-center'>
                <span className='text-7xl'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-7">{name}</h4>
            <div className='pl-6 flex-grow'>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </div>
            <button className='mt-7 bg-green-400 w-full py-2 rounded-full font-bold hover:bg-green-800 hover:duration-700 '>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object.isRequired
}
export default PriceOption;
import React from 'react';
import PriceOption from '../PriceOption/PriceOption';
const PriceOptions = () => {
    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$9.99",
          "features": [
            "Access to basic features",
            "Limited storage (5GB)",
            "Email support",
            "No ads"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$19.99",
          "features": [
            "Access to standard features",
            "Moderate storage (20GB)",
            "24/7 support",
            "No ads",
            "Mobile app access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$29.99",
          "features": [
            "Access to premium features",
            "Large storage (50GB)",
            "Priority support",
            "No ads",
            "Mobile app access",
            "Advanced analytics"
          ]
        }
      ]
      
      
    return (
        <div>
            <h2 className="text-4xl text-gray-400">Best Price in the Town</h2>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;
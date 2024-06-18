import React from 'react';
import DetailsFirstBlock from '../components/detailsFirstBlock/DetailsFirstBlock';
import './productdetails.css'

const ProductDetails = () => {
    return (
        <div className='product-details'>
            <div className='product-details-wrapper'>
                <DetailsFirstBlock />
            </div>
        </div>
    );
};

export default ProductDetails;
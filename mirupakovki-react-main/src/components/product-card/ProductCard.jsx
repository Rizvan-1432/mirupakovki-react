import React from 'react';
import './productCard.css';
import product from '../../assets/img/Product.png';

const ProductCard = ({oldPrice, newPrice, classHome, promotion}) => {
    return (
        <div className={`product-card ${classHome}`}>
            <div className="wrapper-card">
                <div className="card-img">
                    <span className='promotion'>{promotion}</span>
                    <img src={product} alt="" />
                </div>
                <div className="card-description">
                    <h3>Body Spray</h3>
                    <div className="price-block">
                        <p className='price-old'>{oldPrice}</p>
                        <p className='price-new'>{newPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
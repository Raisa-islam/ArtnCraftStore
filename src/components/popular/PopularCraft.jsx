import React from 'react';
import { Link } from 'react-router-dom';

const PopularCraft = ({ item }) => {
    const {_id, imageUrl, itemName, subcategoryName, price, rating ,customization, status} = item;

    return (
        <div className="card w-full glass">
            <figure><img src={imageUrl} alt="car!" className='w-full'/></figure>
            <div className="card-body">
                <h2 className="card-title">{itemName}</h2>
                <p>Category: {subcategoryName}</p>
                <p>Rating: {rating}</p>
                <div className="card-actions justify-end">
                <Link to={`/view-details/${_id}`}>
                    <button className="btn btn-primary bg-[#163020] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularCraft;
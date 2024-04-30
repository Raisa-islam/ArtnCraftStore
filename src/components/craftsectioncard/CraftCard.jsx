import React from 'react';
import { Link } from 'react-router-dom';

const CraftCard = ({item}) => {
    const {_id, imageUrl, itemName, subcategoryName, price, rating ,customization, status} = item;

    return (
        <div className="card w-full bg-base-100 border">
            <figure className="px-10 pt-10">
                <img src={imageUrl} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{itemName}</h2>
                <div className='bg-[#B6C4B699] rounded-xl p-2 font-bold'>
                    #{subcategoryName}
                </div>
                <div className='flex justify-between w-full'>
                    <p>Price: {price}$</p>
                    <p>Rating: {rating}</p>
                </div>
                <div className="card-actions">
                <Link to={`/view-details/${_id}`}>
                    <button className="btn btn-primary bg-[#163020] text-white">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;
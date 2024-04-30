import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ item }) => {
    const {name, imgURL} = item;
    return (
        <>
            <Link to={`/category/${name}`}>
                <div className='flex flex-col justify-center items-center bg-base-200 w-full rounded-xl h-full py-2 lg:col-span-2'>
                    <img src={imgURL} alt="" />
                    <p className='text-xl font-bold'>{name}</p>
                
                </div>
            </Link>
        </>

    );
};

export default CategoriesCard;
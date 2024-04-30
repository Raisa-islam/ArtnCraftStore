import React from 'react';

const PopularArtists = ({item}) => {
    const {_id, displayName, email} = item;

    return (
        <div className='w-full h-28 flex flex-col justify-center items-center bg-red-200 rounded-xl p-4'>
            <p className='font-bold'>Artist Name : {displayName}</p>
            <p className='font-bold'>Contact Info : {email}</p>
        </div>
    );
};

export default PopularArtists;
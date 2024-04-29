import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const item = useLoaderData();
    console.log(item);
    return (
        <div>
            <p>x</p>
        </div>
    );
};

export default ViewDetails;
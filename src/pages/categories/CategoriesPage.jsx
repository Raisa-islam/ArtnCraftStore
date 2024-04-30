import React from 'react';
import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
    const val = useParams();
    console.log(val);
    
    return (
        <div className='container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2'>
            
        </div>
    );
};

export default CategoriesPage;
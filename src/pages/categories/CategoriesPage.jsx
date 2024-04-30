import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoriesPage = () => {
    const val = useParams();
    console.log(val);
    const [items, setItems] = useState([])
    useEffect(()=>{
        
        fetch(`https://b9-a10-server-zy66oz158-raisa-islams-projects.vercel.app/category/${val}`)
        .then((res) => res.json())
        .then((data) => setItems(data));
        
       
    },[])
    console.log("category wise data ",items)

    return (
        <div className='container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2'>
            {items.length}
        </div>
    );
};

export default CategoriesPage;
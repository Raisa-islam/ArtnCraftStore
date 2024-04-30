import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';
import { toast } from 'react-toastify';

const UpdateItem = () => {
    
    const {user} = useContext(AuthContext);
    const item = useLoaderData();
    console.log(item);
    const {_id, imageUrl, itemName, shortDescription, subcategoryName, price, rating ,customization, status,processing} = item;
    const [cm, setCm]= useState(customization);
    const updateItem = (e) => {
        e.preventDefault();
        const imageUrl = e.target.elements.imageUrl.value;
        const itemName = e.target.elements.itemName.value;
        const subcategoryName = e.target.elements.subCategory.value;
        const shortDescription = e.target.elements.shortDescription.value;
        const price = e.target.elements.price.value;
        const email = e.target.elements.email.value;
        const displayName = e.target.elements.displayName.value;
        const rating = e.target.elements.rating.value;
        const processing = e.target.elements.processing.value;
        const status = e.target.elements.status.value;
        const customization =e.target.elements.radio.value;

        console.log(imageUrl, itemName, subcategoryName, shortDescription, price, email, displayName, rating, customization, processing, status);

        const itemObj = { imageUrl, itemName, subcategoryName, shortDescription, price, email, displayName, rating, customization, processing, status };
        console.log(itemObj);

        fetch(`http://localhost:5001/items/${item._id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(itemObj)
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data);
            toast.success("Item updated successfully!");
        })
        .catch((error)=>{
            console.log(error)
            toast.error("Failed to update!")
        })
    }
    
    return (
        <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
            <Helmet>
                <title>ArtFizz | Update Item</title>
            </Helmet>
            <form onSubmit={updateItem}>
                <div className="flex flex-col gap-3 items-center justify-center">


                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Enter Image URL:</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='imageUrl' defaultValue={imageUrl} required />


                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Enter Item Name:</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='itemName' defaultValue={itemName} required />

                    </div>

                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Select Subcategory Name:</span>

                        </div>
                        <select className="select select-primary w-full md:max-w-[80%]" name="subCategory" defaultValue={subcategoryName}>
                            <option value='Landscape Painting'>Landscape Painting</option>
                            <option value='Portrait Drawing'>Portrait Drawing</option>
                            <option value='Watercolour Painting'>Watercolour Painting</option>
                            <option value='Oil Painting'>Oil Painting</option>
                            <option value='Charcoal Sketching'>Charcoal Sketching</option>
                            <option value='Cartoon Drawing'>Cartoon Drawing</option>
                        </select>

                

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Enter Short Description:</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="shortDescription" defaultValue={shortDescription} required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Price:</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="price" defaultValue={price} required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Rating:</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="rating" defaultValue={rating} required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-row items-center gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Customization</span>

                        </div>
                        <input type="radio" name="radio" value='yes' className="radio checked:bg-blue-500" checked={cm==='yes'} onChange={()=>{setCm('yes')}}/><span>Yes</span>
                        <input type="radio" name="radio" value='no' className="radio checked:bg-red-500" checked={cm==='no'} onChange={()=>{setCm('no')}}/> <span>No</span>

                    </div>

                    <div className="form-control w-full lg:w-[60%]  flex flex-col  gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Processing Time</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]"  name="processing" defaultValue={processing}  required />

                    </div>

                    <div className="form-control w-full lg:w-[60%]  flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Stock Status</span>

                        </div>
                        <select className="select select-primary w-full md:max-w-[80%]" name="status" defaultValue={status}>
                            <option value='In Stock'>In Stock</option>
                            <option value='Made To Order'>Made To Order</option>
                        </select>
                        

                    </div>

                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">User Email</span>

                        </div>
                        <input type="email" placeholder="Type here" value={user.email} name="email" className="input input-bordered input-primary w-full md:max-w-[80%]" readOnly />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">User Name</span>

                        </div>
                        <input type="text" placeholder="Type here" value={user.displayName} name="displayName" className="input input-bordered input-primary w-full md:max-w-[80%]" readOnly />

                    </div>

                    <button className="btn btn-primary" type="submit">Update Item</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const UpdateItem = () => {
    const {user} = useContext(AuthContext);
    const item = useLoaderData();
    console.log(item);
    const {_id, imageUrl, itemName, shortDescription, subcategoryName, price, rating ,customization, status,processing} = item;

    const updateItem = () => {

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
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='imageUrl' value={imageUrl} required />


                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Enter Item Name:</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='itemName' value={itemName} required />

                    </div>

                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Select Subcategory Name:</span>

                        </div>
                        <select className="select select-primary w-full md:max-w-[80%]" name="subCategory">
                            <option value='Landscape Painting' selected>Landscape Painting</option>
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
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="shortDescription" value={shortDescription} required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Price:</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="price" value={price} required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Rating:</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="rating" value={rating} required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-row items-center gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Customization</span>

                        </div>
                        <input type="radio" name="radio" value='yes' className="radio checked:bg-blue-500" checked/><span>Yes</span>
                        <input type="radio" name="radio" value='no' className="radio checked:bg-red-500" /> <span>No</span>

                    </div>

                    <div className="form-control w-full lg:w-[60%]  flex flex-col  gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Processing Time</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]"  name="processing" value={processing}  required />

                    </div>

                    <div className="form-control w-full lg:w-[60%]  flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Stock Status</span>

                        </div>
                        <select className="select select-primary w-full md:max-w-[80%]" name="status">
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

                    <button className="btn btn-primary" type="submit">Add Item</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateItem;
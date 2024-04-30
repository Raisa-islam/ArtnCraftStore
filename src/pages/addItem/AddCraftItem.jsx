import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from 'react-toastify';

const AddCraftItem = () => {
    
    const { user } = useContext(AuthContext);

    const addItem = e => {
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

        // send data to api
        
                fetch('https://b9-a10-server-zy66oz158-raisa-islams-projects.vercel.app/items', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(itemObj)
                })
                    .then(res => {
                        if (!res.ok) {
                            throw new Error('Network response was not ok ' + res.statusText);
                        }
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                        // Clear the form here after successful submission
                        e.target.reset();
                        toast.success("Item added successfully!");
                    })
                    .catch(error => {
                        console.error('There has been a problem with your fetch operation:', error);
                        toast.error("Failed to add the item. Please try again!");
                    });
        //Clear the form after submission

    }
    return (
        <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
            <Helmet>
                <title>ArtFizz | Add Item</title>
            </Helmet>
            <form onSubmit={addItem}>
                <div className="flex flex-col gap-3 items-center justify-center">


                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Enter Image URL:</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='imageUrl' required />


                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label w-fit">
                            <span className="label-text font-medium text-xl">Enter Item Name:</span>

                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name='itemName' required />

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
                        <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="shortDescription" required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Price:</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="price" required />

                    </div>
                    <div className="form-control w-full lg:w-[60%] flex flex-col gap-4">
                        <div className="label">
                            <span className="label-text font-medium text-xl">Rating:</span>

                        </div>
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]" name="rating" required />

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
                        <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full md:max-w-[80%]"  name="processing" required />

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

export default AddCraftItem;
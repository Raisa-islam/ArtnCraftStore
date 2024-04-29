import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProviders";
import { toast } from 'react-toastify';

const AddCraftItem = () => {

    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        imageUrl: '',
        itemName: '',
        subcategoryName: '',
        shortDescription: '',
        price: '',
        rating: '',
        customization: '',
        processing: '',
        status: '',
        email: user.email,
        displayName: user.displayName
    });

    const [errors, setErrors] = useState({
        imageUrl: '',
        itemName: '',
        subcategoryName: '',
        shortDescription: '',
        price: '',
        rating: '',
        customization: '',
        processing: '',
        status: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear the error message when the user starts typing in the input field
        setErrors({
            ...errors,
            [name]: ''
        });
    };


    const addItem = e => {
        e.preventDefault();

        let formHasErrors = false;
        const newErrors = {};
        for (const key in formData) {
            if (formData[key] === '') {
                newErrors[key] = `Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
                formHasErrors = true;
            }
        }

        setErrors(newErrors);

        // If any field is empty, return without submitting the form
        if (formHasErrors) {
            toast.error("Fill all the fields")
            return;
        }

        const { imageUrl, itemName, subcategoryName, shortDescription, price, email, displayName, rating, customization, processing, status } = formData;

        console.log(imageUrl, itemName, subcategoryName, shortDescription, price, email, displayName, rating, customization, processing, status);

        const itemObj = { imageUrl, itemName, subcategoryName, shortDescription, price, email, displayName, rating, customization, processing, status };
        console.log(itemObj);

        // send data to api

        fetch('http://localhost:5001/items', {
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
                setFormData({
                    imageUrl: '',
                    itemName: '',
                    subcategoryName: '',
                    shortDescription: '',
                    price: '',
                    rating: '',
                    customization: '',
                    processing: '',
                    status: '',
                    email: user.email,
                    displayName: user.displayName
                });
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
                <title>Crafty | Add Item</title>
            </Helmet>
            <form className="flex flex-col gap-3 items-center justify-center">
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Enter Image URL</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs " value={formData.imageUrl} name='imageUrl' onChange={handleChange} required />


                </label>
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Enter Item Name</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.itemName} name='itemName' onChange={handleChange} required />

                </label>

                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Enter Subcategory Name</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.subcategoryName} name="subcategoryName" onChange={handleChange} required />

                </label>
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Enter Short Description</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.shortDescription} name="shortDescription" onChange={handleChange} required />

                </label>
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Price</span>

                    </div>
                    <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.price} name="price" onChange={handleChange} required />

                </label>
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Rating</span>

                    </div>
                    <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.rating} name="rating" onChange={handleChange} required />

                </label>
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Customization</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.customization} name="customization" onChange={handleChange} required />

                </label>

                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Processing Time</span>

                    </div>
                    <input type="number" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.processing} name="processing" onChange={handleChange} required />

                </label>

                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">Stock Status</span>

                    </div>
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" value={formData.status} name="status" onChange={handleChange} required />

                </label>

                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">User Email</span>

                    </div>
                    <input type="email" placeholder="Type here" value={user.email} name="email" className="input input-bordered input-primary w-full max-w-xs" readOnly />

                </label>
                <label className="form-control w-full max-w-xl">
                    <div className="label">
                        <span className="label-text font-medium text-xl">User Name</span>

                    </div>
                    <input type="text" placeholder="Type here" value={user.displayName} name="displayName" className="input input-bordered input-primary w-full max-w-xs" readOnly />

                </label>

                <button className="btn btn-primary" onClick={addItem}>Add Item</button>

            </form>



        </div>
    );
};

export default AddCraftItem;
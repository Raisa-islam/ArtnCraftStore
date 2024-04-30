import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const MyListCard = ({ item, onDelete }) => {
    const {_id, imageUrl, itemName, subcategoryName, price, rating ,customization, status} = item;

   
    const deleteItem = () => {
        onDelete(_id);
        fetch(`http://localhost:5001/items/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        console.log("item is deleted", _id);
    }

    const updateItem = () => {
        console.log("clicked!!")
    }
    return (
        <div className="card w-full md:w-96 md:max-w-[90%] lg:w-[400px] bg-base-100 border">
            <figure><img src={imageUrl} alt="Shoes" /></figure>
            <div className="card-body">
                
                <h2 className="card-title text-[#030712] text-2xl flex flex-col lg:flex-row">
                    {itemName}
                    <div className="badge badge-secondary">{status}</div>
                </h2>
                <p className='text-[#03071299] text-xl font-medium'>{subcategoryName}</p>

                <div className='flex justify-between text-[#03071299] text-lg'>
                    <p>Price: {price}$</p>
                    <p className='flex flex-row justify-center items-center gap-2'>Rating: {rating}<FaStar/></p>
                </div>
                <div className='text-[#03071299] text-lg'>
                    Customization: {customization}
                </div>
                <div className="flex flex-row justify-between">
                   <Link to={`/update-item/${_id}`} ><button className='btn' onClick={updateItem}>Update</button></Link> 
                    <button className='btn' onClick={() => document.getElementById('my_modal_5').showModal()}>Delete</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Are you sure you want to delete this item? </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" onClick={deleteItem}>Yes</button>
                                    <button className="btn">No</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default MyListCard;
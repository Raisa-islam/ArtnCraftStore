import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const item = useLoaderData();
    console.log(item);
    const { _id, imageUrl, itemName, shortDescription, subcategoryName, price, rating, customization, status, processing } = item;
    return (
        <div className='container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2'>

            <div className='container mx-auto pt-12 max-w-[80%]'>
                <div className='flex flex-col md:flex-row justify-between'>


                    <div>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div>
                                <p className='font-bold text-lg lg:text-2xl'>{itemName}</p>
                                <div><p className='font-semibold text-md lg:text-xl'>Category : <span className='font-bold'>{subcategoryName}</span></p></div>
                            </div>

                            <div className='rounded-xl bg-red-600 text-white font-semibold w-fit h-8 flex flex-row justify-center items-center px-4'>{status}</div>
                        </div>


                       


                    </div>
                    <div>
                        <div className='text-red-600 font-semibold text-lg lg:text-xl'>Price: {price}$</div>

                    </div>

                </div>

                <div className='mt-8'>
                    <img src={imageUrl} alt="" />
                </div>
               
                

                <div className='flex flex-col  lg:gap-4'>

                    <div className=''>
                        <div className='shadow-xl p-4 bg-white mt-8'>
                            <div>
                                <p className='text-xl font-semibold text-red-500 mb-2'>Item Description</p>
                                <div className='h-[3px] w-12 bg-red-500 mb-4'></div>
                                <div className='text-[#030712] font-medium text-lg'>
                                    {shortDescription}
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className=''>
                        <div className='shadow-xl p-4 bg-white mt-8'>
                            <div>
                                <p className='text-xl font-semibold text-red-500 mb-2'>Details</p>
                                <div className='h-[3px] w-12 bg-red-500 mb-4'></div>
                                

                                <div className='text-[#030712] font-medium text-lg grid grid-cols-1 gap-2'>
                                    <p>Rating :<span className='font-semibold'>{rating}</span></p>
                                    <p>Price :<span className='font-semibold'>{price}$</span></p>
                                    <p>Stock Details : <span className='font-semibold'>{status}</span></p>
                                    <p>Item Customization :  <span className='font-semibold'> {customization}</span></p>
                                    <p>Processing Time : <span className='font-semibold'>{processing} days</span></p>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
            </div>
            );
};

export default ViewDetails;
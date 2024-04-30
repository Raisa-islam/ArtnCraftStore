import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import SliderCard from '../../components/slider/SliderCard';
import CraftCard from '../../components/craftsectioncard/CraftCard';
import CategoriesCard from '../../components/categories/CategoriesCard';

const Home = () => {
    const items = useLoaderData();
    //const categories = useLoaderData();
    
    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        
        fetch(`http://localhost:5001/category`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
        console.log("here",categories);
       
    },[])
    const randomArray = (maxE) => {
        const shuffled = items.slice();
        shuffled.sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(maxE, items.length))
    }
    const random = randomArray(5);
   // console.log(random)
    return (

        <div className='pb-12 overflow-hidden'>
            <Helmet>
                <title>ArtFizz | Home</title>
            </Helmet>

            <div className='flex flex-row justify-center items-center w-full'>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    {random.map((item) => <SwiperSlide key={item.id}>
                        {({ isActive }) => (
                            <div>
                                {isActive ? (
                                    <div><SliderCard key={item.id} item={item}></SliderCard></div>
                                ) : (
                                    <div>Not active</div>
                                )}

                            </div>
                        )}
                    </SwiperSlide>)}

                </Swiper>


            </div>

            <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
                <div className='text-center text-2xl font-bold'>
                    Art & Craft Items
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>

                        {items.map((item) => <CraftCard key={item._id} item={item}></CraftCard>)}
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
                <div className='text-center text-2xl font-bold'>
                    Art & Craft Categories
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4'>
                       

                        {categories.map((item)=><CategoriesCard key={item._id} item ={item}></CategoriesCard>)}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
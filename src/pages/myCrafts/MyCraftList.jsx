import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProviders";
import MyListCard from "../../components/mylistcard/MyListCard";
import { Typewriter } from 'react-simple-typewriter';

const MyCraftList = () => {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        
        fetch(`http://localhost:5001/mylist/${user.email}`)
        .then((res) => res.json())
        .then((data) => setItems(data));
        console.log(items);
        setFilter(items)
    },[items])

    const handleDelete = (id)=>{
        console.log(id)
    }

    const handleType = (count, number) => {
        // access word count number
        console.log(count);
    }

    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
            <Helmet>
                <title>ArtFizz | My Arts n Crafts</title>
            </Helmet>
          
            <div className="flex justify-center items-center text-lg md:text-2xl lg:text-3xl text-center">
                <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold' }}>
                Artistic Creations: Create, Explore, Share, Repeat!{' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        {/* <Typewriter
                            words={['Create', 'Explore', 'Share', 'Repeat!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        /> */}
                    </span>
                </h1>
            </div>

            <div className="mt-4 flex justify-center items-center mb-6">
                <p className="text-center">An Ever-Growing Collection of Artistic Creations to Fuel Your Passion</p>
            </div>

            <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-4 lg:gap-8">
            {
                items.map((item)=><MyListCard key={item._id} item={item} onDelete={handleDelete}></MyListCard>)
            }
            </div>
            </div>
            
            
           
        </div>
    );
};

export default MyCraftList;
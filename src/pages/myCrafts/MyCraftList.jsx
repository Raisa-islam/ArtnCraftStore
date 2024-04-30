import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../providers/AuthProviders";
import MyListCard from "../../components/mylistcard/MyListCard";


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
    return (
        <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
            <Helmet>
                <title>ArtFizz | My Arts n Crafts</title>
            </Helmet>
            <p>my craft list</p>
            <div>
               
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
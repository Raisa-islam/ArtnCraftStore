import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';

const AlCraftsList = () => {
    const items = useLoaderData();
    console.log(items);
    return (
        <div className="container mx-auto mt-12 max-w-[80%] overflow-hidden mb-12 p-2">
            <Helmet>
                <title>Crafty | Add Item</title>
            </Helmet>
            <p>all crafts list</p>
            <h2>{items.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Item Name</th>
                            <th>Subcategory Name</th>
                            <th>Status</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item)=><><tr>
                                <th>{item._id}</th>
                                <th>{item.itemName}</th>
                                <th>{item.subcategoryName}</th>
                                <th>{item.status}</th>
                                <th>{item.price}</th>
                                <th>
                                    <Link to={`/view-details/${item._id}`}><button>View Details</button></Link>
                                </th>
                                </tr></>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AlCraftsList;
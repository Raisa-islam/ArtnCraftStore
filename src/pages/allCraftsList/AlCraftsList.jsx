import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'

const AlCraftsList = () => {
    const items = useLoaderData();
    console.log(items);
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
                <title>Crafty | Add Item</title>
            </Helmet>
            <div className="flex justify-center items-center text-lg md:text-2xl lg:text-3xl">
                <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'bold' }}>
                    Creative Showcase{' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Craft', 'Discover', 'Inspire', 'Repeat!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h1>
            </div>

            <div className="mt-4 flex justify-center items-center mb-6">
                <p className="text-center">Discover a World of Arts and Crafts: Unleashing Creativity Across Diverse Mediums</p>
            </div>

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
                            items.map((item, idx) => <><tr>
                                <th>{++idx}</th>
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
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import logoi from '../../../assets/logoOfArtFizz-removebg-preview.png';
import Avatar from '../../../components/avatar/Avatar';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const { user, logout, flag } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
        logout()
            .then()
            .catch()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/all-arts-and-crafts">All Art & Crafts Items</NavLink></li>
        <li><NavLink to="/add-craft-item">Add Craft Item</NavLink></li>
        <li><NavLink to="/my-art-and-craft-list">My Art & Craft List</NavLink></li>
        <li> {
            user && (user.photoURL || flag) ?
                <>


                    <button onClick={handleSignOut} className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                        Sign out
                    </button>
                </>

                :
                <>
                    <button onClick={handleSignOut} className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                        Log in
                    </button>
                    <button onClick={handleSignOut} className="md:hidden bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                        Register
                    </button>
                </>


        }</li>

    </>

    return (
        <div className='bg-[#EEF0E5]'>
            <div className="navbar container mx-auto max-w-[90%]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logoi} className=' w-16 h-16' alt="" />
                <a className="btn btn-ghost text-[16px] md:text-xl">ArtFizz</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {
                    user && (user.photoURL || flag) ?
                        <>
                            <a data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className=' z-20'>
                                <Avatar photoURL={user.photoURL} />
                            </a>
                            <Tooltip id="my-tooltip" className=' z-20'/>


                            <button onClick={handleSignOut} className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                                Sign out
                            </button>
                        </>

                        :
                        <>
                            <Link to='/login'><button  className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                                Log in
                            </button></Link>
                            <Link to='/register'><button className="hidden md:flex bg-gradient-to-r from-green-400 to-blue-500 border border-gray-300 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 transition duration-300 font-bold ">
                                Register
                            </button></Link>
                           
                        </>




                }


            </div>
        </div>
        </div>
        
    );
};

export default Navbar;
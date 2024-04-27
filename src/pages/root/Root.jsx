import { Outlet } from "react-router-dom";
import Footer from "../../layouts/shared/footer/Footer";
import Navbar from "../../layouts/shared/navbar/Navbar";


const Root = () => {
    return (
        <div>
            <div>

                <Navbar></Navbar>


                <Outlet></Outlet>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;
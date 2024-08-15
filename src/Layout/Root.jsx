import { Outlet } from "react-router-dom";
import Navbar from "../Components/SharedComponents/Navbar/Navbar";
import Footer from "../Components/SharedComponents/Footer/Footer";

const Root = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mx-auto min-h-screen">
                <Outlet></Outlet>
            </div>
            <Footer/>
        </>
    );
};

export default Root;
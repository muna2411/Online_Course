import { Outlet } from "react-router-dom";
import Count from "./Home/Count";
import Navbar from "./Home/Navbar";
import Banner from "./Home/Banner";
import Coursecard from "./Home/Coursecard";


const Main = () => {
    return (
        <div>
     
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Banner></Banner>
            <Count></Count>
            <Coursecard></Coursecard>
        </div>
    );
};

export default Main;


import { Outlet } from "react-router-dom";
import Count from "./Home/Count";
import Navbar from "./Home/Navbar";
import Banner from "./Home/Banner";
import Coursecard from "./Home/Coursecard";
// import Teacher from "./Home/Teacher";
import About from "./Home/About";



const Main = () => {
    return (
        <div>
     
            <Navbar></Navbar>
            <Outlet></Outlet> 
            <Banner></Banner>
            <Count></Count>
            <Coursecard></Coursecard>
            {/* <Teacher></Teacher> */}
            <About></About>
        </div>
    );
};

export default Main;


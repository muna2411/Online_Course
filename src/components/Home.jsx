import Banner from "./Home/Banner";
import Count from "./Home/Count";
import Coursecard from "./Home/Coursecard";
import About from "./Home/About";

const Home = () => {
    return (
      <div>
            <Banner></Banner>
            <Count></Count>
            <Coursecard></Coursecard>
            {/* <Teacher></Teacher> */}
            <About></About>
       
      </div>
    );
};

export default Home;
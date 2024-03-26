import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa'; 

const Navbar = () => {
    return (
        <div>
        <nav className="bg-white absolute top-0 left-0 right-0 px-4  font-a flex justify-between items-center h-[100px]">
        
        <div className="flex justify-center items-center">
          <img className="w-[180px] " src="https://i.ibb.co/47YSWb3/Compass-3-removebg-preview.png"></img>
        </div>
        <ul className="flex space-x-8 text-[18px] text-[#5DBB63]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Contact</li>
          <li>Contact</li>
          <Link to="/cart"><FaShoppingCart size={24} /></Link>
        </ul>

    </nav>
        </div>
    );
};

export default Navbar;
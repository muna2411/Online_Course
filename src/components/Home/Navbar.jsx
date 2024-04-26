import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from 'react-icons/fa'; 

const Navbar = () => {
    return (
        <div>
        
        <div className="flex justify-between items-center bg-[#013220] h-[120px] w-full text-white px-[50px]">
         <div className="flex justify-center items-center gap-3">
         <label className="input input-bordered flex items-center gap-2 w-[400px]">
             <input type="text" className="grow" placeholder="What You Want ?" />
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
         </label>
         <button className="text-[#FFD700] text-[25px] font-a" ><FaSearch></FaSearch></button>
         </div>
         <div className="flex justify-center items-center gap-3">
           <p>Call Us On: +088 0113456845</p>
           <button className="bg-[#FFD700] text-[#013220] text-[20px] py-2 px-4  font-a" style={{ border: '1px solid black' }}>Sign Up</button>
         </div>
        </div>

        <div className="bg-white  px-4  font-a flex justify-between items-center h-[130px]">
        
        <div className="flex justify-center items-center">
          <img className="w-[180px] " src="https://i.ibb.co/47YSWb3/Compass-3-removebg-preview.png"></img>
        </div>
        <ul className="flex space-x-8 text-[18px] text-[#013220]">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Contact</li>
          <Link to="/cart"><FaShoppingCart size={24} /></Link>
        </ul>

       </div>
        </div>
    );
};

export default Navbar;
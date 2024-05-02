import { FaEnvelope, FaFacebook, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#013220] h-[400px] mt-[200px]">
        <div className="flex justify-around item-center">
            <div >
              <img className="w-[180px]" src="https://i.ibb.co/47YSWb3/Compass-3-removebg-preview.png"></img>
              <p className="text-white text-[16px] my-[10px] font-semibold mt-[-20px]">Learn Anywhere Your Path, Our Courses</p>
              <p className="text-white text-[16px] font-semibold">We Are Always Ready To Help & Guide You.</p>
              <div className="flex justify-between items-center w-[150px] mt-[30px]">
                <FaFacebook className="text-white text-[30px]"></FaFacebook>
                <FaEnvelope className="text-white text-[30px]"></FaEnvelope>
                <FaWhatsapp className="text-white text-[30px]"></FaWhatsapp>
              </div>
            </div>

            <div className="text-white mt-[50px]">
               <p className="text-[30px] font-a mb-[20px]">Our Store</p>
               <div className="grid grid-cols-1 gap-[20px]">
               <Link to="/">Home</Link>
               <Link>About</Link>
               <Link to="/contact">Contact</Link>
               <Link>Contact</Link>
               </div>
            </div>

            <div className="text-white mt-[50px]">
            <p className="text-[30px] font-a mb-[20px]">Get In Touch</p>
            <div className="grid grid-cols-1 gap-y-4">
                <div className="flex items-center gap-5">
                    <FaPhone className="text-[25px]" />
                    <p className="text-[18px] font-c">+088 16495736289</p>
                </div>
                <div className="flex items-center gap-5">
                    <FaEnvelope className="text-[25px]" />
                    <p className="text-[18px] font-c">email@email.com</p>
                </div>
                <div className="flex items-center gap-5">
                    <FaWhatsapp className="text-[25px]" />
                    <p className="text-[18px] font-c">+088 16495736289</p>
                </div>
                <div className="flex items-center gap-5">
                    <FaMapMarkerAlt className="text-[25px] " />
                    <p className="text-[18px] font-c">West Bakolia, Chittagong</p>
                </div>
            </div>
        </div>
        </div>
        <div>
        <div className="divider bg-white h-[1px] mt-[40px]"></div>
        <footer className="footer footer-center p-4  text-white ">
        <aside>
          <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
         </aside>
      </footer>
        </div>
        </div>
    );
};

export default Footer;
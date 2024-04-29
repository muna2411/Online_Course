import { FaCertificate, FaQuestionCircle, FaTasks} from "react-icons/fa";


const About = () => {
    return (
      <div>
        <div className="grid grid-cols-2 justify-between items-center mx-[150px]">
            <div>
                <div className="relative border-gray-700">
                   <h2 className="text-black text-[38px] uppercase drop-shadow-xl font-extrabold">About Us</h2>
                   <p className="absolute left-[30px] bottom-0 uppercase text-[60px] font-extrabold z-10 opacity-10">About Us</p>
                </div>
                <div className="py-[20px]">
                  <div className="my-[30px] flex justify-center items-center gap-6">
                    <div><FaTasks className="text-[30px] text-black"></FaTasks></div>
                    <div>
                    <p className="text-[25px] font-a text-[#013220]">Coursework</p>
                    <p className="text-black text-[16px]">Each course is like an interactive textbook, featuring pre recorded videos, quizzes, and projects to finance your.</p>
                    </div>
                  </div>
                  <div className="my-[30px] flex justify-center items-center gap-6">
                  <div><FaQuestionCircle className="text-[30px] text-black"></FaQuestionCircle></div>
                  <div>
                    <p className="text-[25px] font-a text-[#013220]">Help & Support</p>
                    <p className="text-black text-[16px]">Connect with thousands of other learners and debate ideas, discuss course material, and get help mastering concepts.</p>
                  </div>
                  </div>
                  <div className="my-[30px] flex justify-center items-center gap-6">
                   <div><FaCertificate className="text-[30px] text-black"></FaCertificate></div>
                   <div>
                    <p className="text-[25px] font-a text-[#013220]">Certificates</p>
                    <p className="text-black text-[16px]">Earn official recognition for your work, and share your success with friends, colleagues, and employers.</p>
                   </div>
                  </div>
                </div>
            </div>
            <div>
            <img className="w-[550px] mx-[100px]" src="https://i.ibb.co/5nmdDTH/15-removebg-preview.png"></img>
            </div>
       </div>  



       <div className="my-[100px] relative">
         <img className="w-full h-[350px] opacity-35" src="https://i.ibb.co/wp6WzB4/pexels-pixabay-159711.jpg"></img>
         <div className="absolute inset-0 flex justify-around items-center">
         <div>
          <img className="w-[380px]" src="https://i.ibb.co/fQ7N5yD/67af582e4a214f499bbaf48e0bef1277-removebg-preview.png"></img>
         </div>
         <div>
           <p className=" text-[20px] text-black uppercase mt-[30px] font-semibold">Trusted By Over 1000+ students</p>
           <p className=" text-[30px] font-extrabold text-black uppercase my-[30px]">Join our community of students around<br/> the world helping you succeed.</p>
           <button className="bg-[#013220] text-white text-[20px] py-2 px-4 mt-[20px] font-c" style={{ border: '1px solid black' }}>Get Started</button>
         </div>
        
         </div>
       </div>


     </div>
    );
};

export default About;
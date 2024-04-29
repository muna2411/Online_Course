
const About = () => {
    return (
        <div className="grid grid-cols-2 justify-between items-center mx-[150px]">
            <div>
                <div className="relative border-gray-700">
                   <h2 className="text-black text-[38px] uppercase drop-shadow-xl font-extrabold">About Us</h2>
                   <p className="absolute left-[30px] bottom-0 uppercase text-[60px] font-extrabold z-10 opacity-10">About Us</p>
                </div>
                <div className="py-[20px]">
                  <div className="gap-[20px]">
                    <p className="text-[25px] font-a text-[#013220] ">Coursework</p>
                    <p>Each course is like an interactive textbook, featuring pre recorded videos, quizzes, and projects to finance your.</p>
                  </div>
                  <div>
                    <p>Help & Support</p>
                    <p>Connect with thousands of other learners and debate ideas, discuss course material, and get help mastering concepts.</p>
                  </div>
                  <div>
                    <p>Certificates</p>
                    <p>Earn official recognition for your work, and share your success with friends, colleagues, and employers.</p>
                  </div>
                </div>
            </div>
            <div>
            <img className="w-[550px]" src="https://i.ibb.co/5nmdDTH/15-removebg-preview.png"></img>
            </div>
       </div>  
    );
};

export default About;
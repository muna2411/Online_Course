// import { useState } from "react";


const Card = () => {



  // const [isHovered, setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // onMouseEnter={handleMouseEnter}
  // onMouseLeave={handleMouseLeave}

    return (
      <div className="mx-auto">
        <div className="my-[200px] grid grid-cols-4 mx-[65px]"
       
        >
            <button className=" w-[320px] h-[400px] shadow-xl zoom "  >
              <img className="w-[320px] h-[250px]"  src="https://i.ibb.co/17QtWMj/student-studies-wall.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[17px] font-a text-black">THE WEB DEVELOPER BOOTCAMP</h2>
                  <div className="flex justify-around items-center mt-[10px]">
                  <p>20.00 $</p>
                  <p>Rating</p>
                  </div>
                </div>
            </button>
            <button className=" w-[320px] h-[400px] shadow-xl zoom">
              <img className="w-[320px] h-[250px]"  src="https://i.ibb.co/17QtWMj/student-studies-wall.jpg"></img>
                <div className="card-body text-center">
                <h2 className="text-[17px] font-a text-black">THE WEB DEVELOPER BOOTCAMP</h2>
                  <div className="flex justify-around items-center mt-[10px]">
                  <p>20.00 $</p>
                  <p>Rating</p>
                  </div>
                </div>
            </button>
            <button className=" w-[320px] h-[400px] shadow-xl zoom">
              <img className="w-[320px] h-[250px]"  src="https://i.ibb.co/17QtWMj/student-studies-wall.jpg"></img>
                <div className="card-body text-center">
                <h2 className="text-[17px] font-a text-black">THE WEB DEVELOPER BOOTCAMP</h2>
                  <div className="flex justify-around items-center mt-[10px]">
                  <p>20.00 $</p>
                  <p>Rating</p>
                  </div>
                </div>
            </button>
            <button className=" w-[320px] h-[400px] shadow-xl zoom">
              <img className="w-[320px] h-[250px]"  src="https://i.ibb.co/17QtWMj/student-studies-wall.jpg"></img>
                <div className="card-body text-center">
                <h2 className="text-[17px] font-a text-black">THE WEB DEVELOPER BOOTCAMP</h2>
                  <div className="flex justify-around items-center mt-[10px]">
                  <p>20.00 $</p>
                  <p>Rating</p>
                  </div>
                </div>
            </button>


            {/* {isHovered && (
          <div className="absolute inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <button
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFBF00]  w-[120px] h-[50px] text-black"
              
            >
              View
            </button>
          </div>
        )} */}
        </div>
        </div>
    );
};

export default Card;
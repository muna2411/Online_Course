
const Coursecard = () => {
    return (
   <div>

    <p className="text-center text-[50px] text-[#5DBB63] font-d my-[100px]">START LEARNING</p>
         <div className="flex justify-around items-center my-[100px] mx-[80px]">
            <div className=" w-[320px] h-[360px] bg-base-100 shadow-xl">
              <img src="https://i.ibb.co/VHFDr1k/pexels-cottonbro-studio-5483077.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
            <div className=" w-[320px] h-[360px] bg-base-100 shadow-xl">
              <img src="https://i.ibb.co/VHFDr1k/pexels-cottonbro-studio-5483077.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
            <div className=" w-[320px] h-[360px] bg-base-100 shadow-xl">
              <img src="https://i.ibb.co/VHFDr1k/pexels-cottonbro-studio-5483077.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
            <div className=" w-[320px] h-[360px] bg-base-100 shadow-xl">
              <img src="https://i.ibb.co/VHFDr1k/pexels-cottonbro-studio-5483077.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center mb-[100px]">
        <button className="bg-white text-[#5DBB63] text-[20px] py-2 px-4  focus:outline-none focus:shadow-outline mt-[60px] font-a" style={{ border: '1px solid black' }}>View All Courses</button>  
        </div>
   </div>
    );
};

export default Coursecard;
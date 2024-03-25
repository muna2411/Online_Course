import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div>
             <div className="h-[770px] bg-[#5DBB63]">


<div className="absolute inset-0  flex justify-around items-center mt-[100px]">

<div>
  <div className=" text-white lg:text-[25px] md:text-[20px] sm:text-[15px]  my-[300px]  text-start">
     <TypeAnimation 
       sequence={[
         'The best For Online Course Platform.........',
         100,  
       ]}
       speed={50}
       style={{ fontSize: '25px' }}
       className="font-b "
       repeat={Infinity}
     />
     <p className="text-start font-a text-[70px] my-[30px] text-white">COURSE COMPASS</p>
     <p className="text-start  font-a text-[40px] text-[#FFFF00]">Learn Anywhere || Your Path, Our Courses</p>
     <button className="bg-white text-[#5DBB63] text-[20px] py-2 px-4  focus:outline-none focus:shadow-outline mt-[60px] font-a" style={{ border: '1px solid black' }}>Get Started</button>
  </div>
</div>

<div>
  <img className="w-[550px]" src="https://i.ibb.co/5nmdDTH/15-removebg-preview.png"></img>
</div>

</div>

      
    </div>
        </div>
    );
};

export default Banner;
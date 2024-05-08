
import { Link } from 'react-router-dom';
import './Yes.css';

const Coursecard = () => {
    return (
   <div className='mt-[300px]'>

    <p className="text-center text-[60px] text-[#013220] font-d mb-[200px] divider ">START LEARNING</p>
         <div className="flex justify-around items-center my-[100px] mx-[50px]">

            <div className=" w-[320px] h-[400px] shadow-xl zoom">
              <img className="w-[320px] h-[250px]" src="https://i.ibb.co/mS3JRhZ/pexels-tima-miroshnichenko-6694543.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
            <div className=" w-[320px] h-[400px]  shadow-xl zoom">
              <img className="w-[320px] h-[250px]" src="https://i.ibb.co/gdSkSrN/pexels-petri-r-2909551-4930548.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
            <div className=" w-[320px] h-[400px] shadow-xl zoom">
              <img className="w-[320px] h-[250px]" src="https://i.ibb.co/G3CRjC2/pexels-polina-tankilevitch-3735782.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>
            <div className=" w-[320px] h-[400px] shadow-xl zoom">
              <img className="w-[320px] h-[250px]"  src="https://i.ibb.co/17QtWMj/student-studies-wall.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div>


        </div>
        <div className="flex justify-center items-center mb-[100px]">
        <Link to="/card"><button  className="bg-[#FFD700] text-[#013220] text-[20px] py-2 px-4 focus:outline-none focus:shadow-outline mt-[40px] font-a" style={{ border: '1px solid black' }}>View All Courses</button>  </Link>
        </div>
   </div>
    );
};

export default Coursecard;
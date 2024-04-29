// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Teacher = () => {
    return (
        <div className='my-[200px] w-[1000px] mx-auto'>
         
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[500px]  flex justify-around items-center"
      >
        <SwiperSlide> <div className=" w-[320px] h-[350px] bg-base-100 shadow-xl my-[70px]">
              <img className="rounded-full w-[200px] mx-auto" src="https://i.ibb.co/8DPWQbV/aa.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className=" w-[320px] h-[360px] bg-base-100 shadow-xl my-[70px]">
              <img  className="rounded-full w-[200px] mx-auto" src="https://i.ibb.co/sPjSK5p/bbbb.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide> <div className=" w-[320px] h-[360px] bg-base-100 shadow-xl my-[70px]">
              <img className="rounded-full w-[200px] mx-auto" src="https://i.ibb.co/1zTx0Dw/ducky.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div></SwiperSlide>
        <SwiperSlide><div className=" w-[320px] h-[360px] bg-base-100 shadow-xl my-[70px]">
              <img className="rounded-full w-[200px] mx-auto" src="https://i.ibb.co/dPnwmZ1/flower.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div></SwiperSlide>
       
        <SwiperSlide><div className=" w-[320px] h-[360px] bg-base-100 shadow-xl my-[70px]">
              <img className="rounded-full w-[200px] mx-auto" src="https://i.ibb.co/BPyydzy/u.jpg"></img>
                <div className="card-body text-center">
                  <h2 className="text-[25px] font-a">Advanced Career</h2>
                  <p>8 Courses</p>
                </div>
            </div></SwiperSlide>
  
      </Swiper>
        </div>
    );
};

export default Teacher;
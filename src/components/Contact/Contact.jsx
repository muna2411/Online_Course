import { useRef } from "react";
import { FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {


    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_cp71a1d','template_kag4xnw', form.current, {
          publicKey: 'rPbZzwJKv6ivVb0F7',
        })
        .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: "Successfully Send",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        <div>
            <div className="relative">
                <img className="w-full  opacity-60" src="https://i.ibb.co/qJmHW73/pexels-anna-nekrashevich-8534455.jpg"></img>
                <p className="absolute inset-0 text-center font-a uppercase text-[80px] text-black divider mt-[100px]"><FaPhone className="text-[150px] text-[#013220]"></FaPhone> Contact Us</p>
                <div className="absolute inset-0 bg-[#013220] shadow-2xl w-[460px] h-[600px] mt-[300px] mx-auto">
                    <div className="p-[30px]">
                    <p className="text-[25px] font-b text-white text-center ">Contact us</p>
                    <div className="divider bg-white h-[1px]"></div>
                    <p className="text-[30px] font-d text-[#FFD700]">Get In Touch</p>
                    
                    <div>
                      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 ">
                      <label className="text-[20px] font-d text-white">Name</label>
                      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[10px] p-4 bg-white" style={{border: '1px solid black'}} type="text" name="user_name" placeholder="Type Name" required/>
                      <label className="text-[20px] font-d text-white">Email</label>
                      <input className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[50px] my-[10px] p-4 bg-white" style={{border: '1px solid black'}} type="email" name="user_email" placeholder="Type Email" required/>
                      <label className="text-[20px] font-d text-white">Message</label>
                      <textarea className="lg:w-[400px] md:w-[400px] sm:w-[300px] h-[100px] my-[10px] p-4 bg-white" style={{border: '1px solid black'}} name="message" placeholder="Write Your Message" required/>
                      <input className='w-[120px] h-[50px] text-[20px] bg-[#FFD700] text-black font-d lg:ml-[280px] md:ml-[200px] sm:ml-[150px] mt-[20px]' type="submit" value="Send" />
                      </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
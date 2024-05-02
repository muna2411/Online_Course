import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";


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



  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
      attemptPlay();
    }, []);

  // https://i.ibb.co/Yh1VV9z/pexels-weekendplayer-701337.jpg

    return (
        <div >
            <div className="relative">
                <img className="w-full h-[450px] opacity-80" src="https://i.ibb.co/RSZMt1y/1920px-Palace-of-Westminster-from-the-dome-on-Methodist-Central-Hall-cropped.jpg"></img>
                {/* <p className="absolute inset-0 text-center font-a uppercase text-[80px] text-black mt-[150px] ">Contact Us</p> */}
                
               <div className="flex justify-around items-start mt-[80px]">
                <div>
                    <div className="p-[30px]">
                    <p className="text-[35px] font-b text-[#013220] text-center ">Contact us</p>
                    <div className="divider bg-white h-[1px]"></div>
                    <p className="text-[30px] font-d text-black">Get In Touch</p>
                    
                    <div>
                      <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 mt-[20px]">
                      <label className="text-[20px] font-d text-[#013220]">Name</label>
                      <input className="lg:w-[500px] md:w-[400px] sm:w-[300px] h-[50px] my-[10px] p-4 bg-white" style={{border: '1px solid black'}} type="text" name="user_name" placeholder="Type Name" required/>
                      <label className="text-[20px] font-d text-[#013220]">Email</label>
                      <input className="lg:w-[500px] md:w-[400px] sm:w-[300px] h-[50px] my-[10px] p-4 bg-white" style={{border: '1px solid black'}} type="email" name="user_email" placeholder="Type Email" required/>
                      <label className="text-[20px] font-d text-[#013220]">Message</label>
                      <textarea className="lg:w-[500px] md:w-[400px] sm:w-[300px] h-[120px] my-[10px] p-4 bg-white" style={{border: '1px solid black'}} name="message" placeholder="Write Your Message" required/>
                      <input className='w-[500px] h-[50px] text-[20px] bg-[#013220] text-white font-d  mt-[20px] rounded-full' type="submit" value="Send" />
                      </form>
                    </div>
                    </div>
                </div>
                <div>
                  <p className="font-semibold text-black text-[18px] mb-[80px] mx-[80px]">Have questions about our courses or need assistance?<br/>
                                                                        We are here to help! Feel free to reach out to us <br/>
                                                                        through any of the following channels:</p>
                  <div className="grid grid-cols-2 gap-[20px]">
                    <div className="text-center">
                      <FaPhone className="text-[35px] text-[#013220] mx-auto"></FaPhone>
                      <p className="text-[20px] text-[#013220] font-d">Phone Number</p>
                      <p className="text-[18px] text-[#013220] font-c">+088 16495736289</p>
                    </div>
                    <div className="text-center">
                      <FaEnvelope className="text-[35px] text-[#013220] mx-auto"></FaEnvelope>
                      <p className="text-[20px] text-[#013220] font-d">Email Address</p>
                      <p className="text-[18px] text-[#013220] font-c">email@email.com</p>
                    </div>
                    <div className="text-center">
                      <FaWhatsapp  className="text-[35px] text-[#013220] mx-auto"></FaWhatsapp>
                      <p className="text-[20px] text-[#013220] font-d">Whatsapp Number</p>
                      <p className="text-[18px] text-[#013220] font-c">+088 19495786200</p>
                    </div>
                    <div className="text-center">
                      <FaMapMarkerAlt className="text-[35px] text-[#013220] mx-auto"></FaMapMarkerAlt>
                      <p className="text-[20px] text-[#013220] font-d">Office Location</p>
                      <p className="text-[18px] text-[#013220] font-c">West Bakolia, Chittagong</p>
                    </div>
                    
                  </div>
                  <div className="my-[80px]">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14760.206744337313!2d91.8445534515068!3d22.351677170013765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad276c6e2b0f99%3A0x56129b01088360bd!2s17%20No.%20West%20Bakalia%20Ward%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1714663656675!5m2!1sen!2sbd" width="600" height="450"  allowFullScreen loading="lazy" ></iframe>
                  </div>
                </div>
            </div>
            {/* Video */}
            <div className="relative">
      <video
          style={{ Width: "600px",  height:"600px", margin: "0 auto" }}
          playsInline
          loop
          // muted
          // controls
          alt="All the devices"
          
          src="/v.mp4"
        
          ref={videoEl}
      />
      <div className="absolute inset-0">
      {/* <p className="text-start text-[50px] text-black font-extrabold mt-[50px] ml-[20px]">We Are Always Ready To <br/>Help & Guide You</p> */}
     <div className="w-[700px] ml-[20px] mt-[50px]">
      <TypeAnimation
                                sequence={[
                                    'We Are Always Ready To Help & Guide You .',
                                    100,
                                   
                                ]}
                                speed={50}
                                style={{ fontSize: '50px' }}
                                className="text-start text-[50px] text-black font-extrabold"
                                repeat={Infinity}
                            />
      </div>
      <div className="flex justify-between items-center w-[600px]">
      <img className='w-[200px] mt-[100px]' src="https://i.ibb.co/JpwYCf6/Animation-1711705548311.gif" alt="Animation"></img>
      <div>
      <p className="text-start ml-[100px] text-[60px] mt-[100px]  text-[#013220] font-a">Enroll Now</p>
      <button className="bg-white text-[#013220] text-[20px] py-2 px-4 ml-[100px] font-a mt-[20px]" style={{ border: '1px solid black' }}>Get Started</button>
      </div>
      </div>
      
      </div>
            </div>
        </div>
        </div>
    );
};

export default Contact;
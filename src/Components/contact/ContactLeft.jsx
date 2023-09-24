import React from "react";
import { devImg } from "../../assets/index";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function ContactLeft(){

return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne
              flex flex-col gap-8">
                <img className="w-full h-64 object-cover rounded-lg mb-2" src={devImg} alt="img"/>
                
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-white">Rohit Sarkar</h3>
                    <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>

                    <p className="text-base text-gray-400 tracking-wide">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius repellendus doloremque officia officiis at fuga recusandae voluptatum esse saepe iste.
                    </p>
                    <p className="text-base text-gray-400 flex items-center gap-2">
                        Phone: <span className="text-lightText">+91 9874630970</span>
                    </p>

                    <p className="text-base text-gray-400 flex items-center gap-2">
                        Email : <span className="text-lightText">sarkarrohit650@gmail.com</span>
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                    <div className="flex gap-4">
                    <span className="bannerIcon">
                        <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                        <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                    </div>
                </div>
              </div>
);

}


export default ContactLeft;
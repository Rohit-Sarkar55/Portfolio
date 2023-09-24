import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";


function Contacts(){
    return (
        <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact with Me" />
      </div>

      <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <ContactLeft />
              <div className="w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              flex flex-col p-8 gap-8 rounded-lg shadow-shadowOne">
                
                <form className="w-full">

                    <div className="w-full flex gap-10">
                        <div className="flex flex-col gap-4 w-[50%]">
                            <p className="text-sm text-gray-400 tracking-wide uppercase">Your Name</p>
                            <input className="contactInput" type="text" />
                        </div>


                        <div className="flex flex-col gap-4 w-[50%]">
                            <p className="text-sm text-gray-400 tracking-wide uppercase">Phone No</p>
                            <input className="contactInput" type="text" />
                        </div>
                    </div>

                </form>
              </div>
            </div>
          </div>

      </section>
    );
}



export default Contacts;
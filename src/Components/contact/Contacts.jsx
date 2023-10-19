import { useRef } from "react";
import React , {useState}  from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import emailjs from '@emailjs/browser';

function Contacts(){


    const form = useRef();
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");



    const emailValidation = () => {
        return String(email)
          .toLocaleLowerCase()
          .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
      };


  
    const handleSend = (e)=>{
        e.preventDefault();

        const serviceId = process.env.REACT_APP_SERVICE_ID 
        const templateId = process.env.REACT_APP_TEMPLATE_ID 
        const publicKey = process.env.REACT_APP_PUBLIC_KEY

      console.log("Your Public Key is " , publicKey);
        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  



        if (username === "") {
            setSuccessMsg("");
            setErrMsg("Username is required!");
          } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
            setSuccessMsg("");
          } else if (email === "") {
            setErrMsg("Please give your Email!");
            setSuccessMsg("");
          } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
            setSuccessMsg("");
          } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
            setSuccessMsg("");
          } else if (message === "") {
            setErrMsg("Message is required!");
            setSuccessMsg("");
          } else {
            setSuccessMsg(
              `Thank you dear ${username}, Your Messages has been sent Successfully!`
            );
            setErrMsg("");
            setUsername("");
            setPhoneNumber("");
            setEmail("");
            setSubject("");
            setMessage("");
          }
        

    }
    return (
        <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact with Me" />
      </div>

      <div className="w-full pt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <ContactLeft />
              <div className="w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] 
              flex flex-col p-8 gap-8 rounded-lg shadow-shadowOne">
                
                <form ref={form} className="w-full flex flex-col gap-4 py-2">
                    {
                        errMsg && <p className="errorMsg">{errMsg}</p>
                    }
                    {
                        successMsg && <p className="successMsg">{successMsg}</p>
                    }
                    <div className="w-full flex gap-10">
                        <div className="flex flex-col gap-4 w-[50%]">
                            <p className="text-sm text-gray-400 tracking-wide uppercase">Your Name</p>
                            <input onChange={(e)=>{
                                setUsername(e.target.value);
                            }} className={
                                `${errMsg === "Username is required!" && "outline-designColor"} contactInput`}
                     type="text" value={username} name="user_name"/>
                        </div>


                        <div className="flex flex-col gap-4 w-[50%]">
                            <p className="text-sm text-gray-400 tracking-wide uppercase">Phone No</p>
                            <input onChange={(e)=>{
                                setPhoneNumber(e.target.value);
                            }} className={`${
                      errMsg === "Phone number is required!" &&
                      "outline-designColor"
                    } contactInput`} type="text" value={phoneNumber}  name="user_ph_num"/>
                        </div>
                        
                    </div>



                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400 tracking-wide uppercase">Email</p>
                        <input onChange={(e)=>{
                                setEmail(e.target.value);
                            }} className={`${
                    errMsg === "Please give your Email!" &&
                    "outline-designColor"
                  } contactInput`} type="email" value={email}  name="user_email"/>
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400 tracking-wide uppercase">Subject</p>
                        <input onChange={(e)=>{
                                setSubject(e.target.value);
                            }} className={`${
                    errMsg === "Plese give your Subject!" &&
                    "outline-designColor"
                  } contactInput`} type="text" value={subject} name="subject"/>
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400 tracking-wide uppercase">Message</p>
                        <textarea onChange={(e)=>{
                                setMessage(e.target.value);
                            }} className={`${
                    errMsg === "Message is required!" && "outline-designColor"
                  } contactTextArea`} rows="7" type="text" value={message}  name="message"/>
                    </div>
                    

                    <div>
                        <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white 
                        duration-300 hover:border-[1px] hover:border-designColor border-transparent">Send Message</button>
                    </div>
                    
                    
                    {errMsg && (
                        <p className="errorMsg">
                        {errMsg}
                        </p>
                    )}
                    

                    {
                        successMsg && <p className="successMsg">{successMsg}</p>
                    }

                </form>
              </div>
            </div>
          </div>

      </section>
    );
}



export default Contacts;
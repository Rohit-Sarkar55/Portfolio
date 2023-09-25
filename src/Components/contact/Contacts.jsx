import React , {useState} from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";


function Contacts(){
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
        if (username === "") {
            setErrMsg("Username is required!");
          } else if (phoneNumber === "") {
            setErrMsg("Phone number is required!");
          } else if (email === "") {
            setErrMsg("Please give your Email!");
          } else if (!emailValidation(email)) {
            setErrMsg("Give a valid Email!");
          } else if (subject === "") {
            setErrMsg("Plese give your Subject!");
          } else if (message === "") {
            setErrMsg("Message is required!");
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
                
                <form className="w-full flex flex-col gap-4 py-2">
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
                            }} className="contactInput" type="text" value={username} />
                        </div>


                        <div className="flex flex-col gap-4 w-[50%]">
                            <p className="text-sm text-gray-400 tracking-wide uppercase">Phone No</p>
                            <input onChange={(e)=>{
                                setPhoneNumber(e.target.value);
                            }} className="contactInput" type="text" value={phoneNumber} />
                        </div>
                        
                    </div>



                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400 tracking-wide uppercase">Email</p>
                        <input onChange={(e)=>{
                                setEmail(e.target.value);
                            }} className="contactInput" type="email" value={email} />
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400 tracking-wide uppercase">Subject</p>
                        <input onChange={(e)=>{
                                setSubject(e.target.value);
                            }} className="contactInput" type="text" value={subject}/>
                    </div>


                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-gray-400 tracking-wide uppercase">Message</p>
                        <textarea onChange={(e)=>{
                                setMessage(e.target.value);
                            }} className="contactTextArea" rows="7" type="text" value={message} />
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
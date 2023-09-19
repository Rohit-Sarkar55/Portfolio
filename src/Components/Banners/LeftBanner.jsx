import React from "react";
import  { useTypewriter , Cursor } from "react-simple-typewriter";
import { FaLinkedin ,FaGithubAlt , FaFacebook } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiLinkedin , SiFacebook } from "react-icons/si";


function LeftBanner(){
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack Developer.", "UI Designer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
      });

    return (<div className="w-1/2 flex flex-col gap-20">
    <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal"> Welcome to Ro-Verse</h4>
        
        <h1 className="text-white text-6xl font-bold">
            Hi I'm 
            <span className="text-designColor capitalize"> Rohit Sarkar</span>
        </h1>

        <h2 className="text-white text-4xl font-bold">
            a <span> {text}</span>
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I use animation as a third dimension by which to simplify experiences
        and kuiding thro each and every interaction. I'm not adding motion
        just to spruce things up, but doing it in ways that.
        </p>
    </div>

    <div className= "border-[6px] border-white flex justify-between p-10">
        <div>
            <h2>Find Me In</h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                <FaFacebookF />
                </span>
                
                <span className="bannerIcon">
                <FaLinkedinIn />
                </span>

                <span className="bannerIcon">
                    <FaGithubAlt />
                </span>
            </div>
        </div>
        <div>
            <h2>Best Skills On</h2>
            <div className="flex gap-4">
                <span className="bannerIcon">
                <FaFacebookF />
                </span>
                
                <span className="bannerIcon">
                <FaLinkedinIn />
                </span>

                <span className="bannerIcon">
                    <FaGithubAlt />
                </span>
            </div>
        </div>
    </div>
</div>);
}

export default LeftBanner;
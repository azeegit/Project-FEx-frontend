import React from "react";
import Typed from "react-typed";


const Hero = () => {
    return (
        <div className='text-white'>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">Invest in Future</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Invest in Yourself</h1>
                <div className="flex justify-center items-center">
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4"> Investing for : </p>
                    <Typed 
                    className="md:text-5xl sm:text-4xl text-xl font-bold pl-2"
                    strings={["startups","Investors", " you"]} typeSpeed={120} backSpeed={140} loop></Typed>
                </div>
                <div>
                    <button className="bg-[#00df9a] w-[200px] rounded-md px-4 py-2 font-medium text-xl mt-4 text-black">Get Started</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;
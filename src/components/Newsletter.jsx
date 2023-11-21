import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-[#000300] py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <p>Newsletter</p>
          <h1>Subscribe to our newsletter</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quas
            et sit officiis nobis vel ad eos cum delectus nemo ipsum fugit id
            dolores repellat? Aliquam qui recusandae similique pariatur.
          </p>
          <form className="flex justify-between items-center">
            <input
              className="bg-[#000300] border border-white px-4 py-2 rounded-full text-white"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#4edf00] text-white px-4 py-2 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[200px] h-[200px] bg-[#4edf00] rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
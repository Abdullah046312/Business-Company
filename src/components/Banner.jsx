import React from 'react';
import Container from './Container';
import images from "../assets/images.png";
import images1 from "../assets/images1.png";

const Banner = () => {
  return (
    <section
      className="" // Add padding for better spacing
      style={{
        background: 'linear-gradient(to right, #30344E, #30344E, #52C5B6)', 
      }}
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:space-x-8 space-y-8 lg:space-y-0">
          {/* Left Section */}
          <div className="w-full lg:w-[45%] text-center lg:text-left">
            <h2 className="text-[40px] lg:text-[60px] text-[#FFF] font-Poppins font-semibold">
              We Provide Premium Consulting Service For Your Business
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#E1E1E1] font-Inter font-normal mt-3">
              Already a member of our community? Sign in! The Premium Consulting Service provides a faster way to process plans, register dealings, and create titles.
            </p>

            <button className="py-4 px-6 bg-[#FD5F36] rounded-lg text-[18px] text-[#FFF] font-Poppins font-semibold mt-6 hover:bg-[#52C5B6] transition-colors duration-300">
              Free Consultation
            </button>

            <p className="text-[16px] lg:text-[18px] text-[#E1E1E1] font-Inter font-normal mt-4">
              Already a member of our community? Sign in.
            </p>

            <img className="mt-8 mx-auto lg:mx-0" src={images1} alt="Consulting Image" />
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-[45%]">
          <img
  className="w-full filter drop-shadow-[1px_1px_100px_#6D67E4]"
  src={images}
  alt="Business Consulting"
/>

          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;

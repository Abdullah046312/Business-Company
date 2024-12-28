import React from 'react';
import Container from './Container';
import images9 from "../assets/images9.png";

const SixthPart = () => {
  return (
    <section className="bg-[#52C5B6] text-white py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Left Section */}
          <div className="w-full md:w-[35%] text-center md:text-left">
            <h2 className="text-[32px] sm:text-[38px] text-[#FFFF] font-Poppins font-bold">
              Trusted by the world’s leading companies
            </h2>
            <button className="py-4 px-6 bg-[#FD5F36] rounded-lg text-[16px] sm:text-[18px] text-[#FFF] font-Poppins font-semibold mt-6 hover:bg-[#624E88] transition-colors duration-300">
              Free Consultation
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex justify-between w-full md:w-[65%] text-center md:text-left space-x-6">
            <div className="w-[30%]">
              <h2 className="text-[38px] sm:text-[60px] text-[#FFFF] font-Poppins font-bold">150+</h2>
              <h4 className="text-[14px] sm:text-[20px] text-[#FFFF] font-Inter font-normal">Finished Sessions</h4>
            </div>
            <div className="w-[30%]">
              <h2 className="text-[38px] sm:text-[60px] text-[#FFFF] font-Poppins font-bold">100%</h2>
              <h4 className="text-[14px] sm:text-[20px] text-[#FFFF] font-Inter font-normal">Satisfaction Rate</h4>
            </div>
            <div className="w-[30%]">
              <h2 className="text-[38px] sm:text-[60px] text-[#FFFF] font-Poppins font-bold">350+</h2>
              <h4 className="text-[14px] sm:text-[20px] text-[#FFFF] font-Inter font-normal">Trusted Clients</h4>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:pl-56  ">
          <img src={images9} alt="Business image" className="max-w-full h-auto" />
        </div>
      </Container>
    </section>
  );
};

export default SixthPart;

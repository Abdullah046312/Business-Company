import React from 'react'
import Container from './Container'
import images2 from "../assets/images2.png"
import { AiFillCheckCircle } from "react-icons/ai";

const FirstPart = () => {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <Container>
        <div className="flex flex-col lg:flex-row lg:space-x-10">
          {/* Left Section (Image) */}
          <div className="w-full lg:w-[50%]">
            <img className="w-full h-auto" src={images2} alt="About Us" />
          </div>

          {/* Right Section (Text) */}
          <div className="w-full lg:w-[40%] mt-10 lg:mt-0">
            <h4 className="text-[18px] text-[#FD5F36] font-Poppins font-semibold">ABOUT US</h4>
            <h2 className="text-[32px] lg:text-[48px] text-[#262626] font-Poppins font-semibold mt-4">
              Welcome to World Best Business Company
            </h2>
            <p className="text-[16px] lg:text-[18px] text-[#5B5F77] font-Inter font-normal mt-3">
              We partner with experienced and qualified Accountants, Financial Advisors, and Chartered Secretaries to provide
            </p>

            {/* Features List */}
            <div className="mt-6">
              <h5 className="flex items-center gap-2 text-[16px] lg:text-[18px] text-[#30344E] font-Inter font-normal">
                <AiFillCheckCircle className="text-[rgba(91,95,119,0.49)] text-[20px]" /> Monthly assessment report
              </h5>
              <h5 className="flex items-center gap-2 text-[16px] lg:text-[18px] text-[#30344E] font-Inter font-normal mt-3">
                <AiFillCheckCircle className="text-[rgba(91,95,119,0.49)] text-[20px]" /> Tax planning consultation
              </h5>
              <h5 className="flex items-center gap-2 text-[16px] lg:text-[18px] text-[#30344E] font-Inter font-normal mt-3">
                <AiFillCheckCircle className="text-[rgba(91,95,119,0.49)] text-[20px]" /> Monthly rent problem solution
              </h5>
            </div>

            {/* Button */}
            <button className="py-4 px-8 bg-[#FD5F36] rounded-lg text-[18px] text-[#FFF] font-Poppins font-semibold mt-8 hover:bg-[#624E88] transition-colors duration-300">
              Free Consultation
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FirstPart;

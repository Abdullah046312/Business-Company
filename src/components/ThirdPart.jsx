import React from 'react';
import Container from './Container';
import images7 from "../assets/images7.png";

const ThirdPart = () => {
  return (
    <section className='py-20'>
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] text-[#262626] font-Poppins font-semibold">
              Best Reliable Solution For Your Business
            </h2>
            <p className="text-[16px] sm:text-[18px] text-[#5B5F77] font-Inter font-normal mt-4">
              We help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and drive growth.
            </p>
            <button className="py-4 px-6 bg-[#FD5F36] rounded-lg text-[18px] text-[#FFF] font-Poppins font-semibold mt-6 hover:bg-[#4B70F5] transition-colors duration-300">
              Free Consultation
            </button>

            <div className="flex flex-col sm:flex-row mt-8 gap-8">
              <div className="w-full sm:w-1/2">
                <h2 className="text-[20px] sm:text-[24px] text-[#262626] font-Poppins font-semibold">
                  First-class investment solutions
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#5B5F77] font-Inter font-normal">
                  We can help you with your business strategy, architecture, mapping, and optimisation.
                </p>
              </div>
              <div className="w-full sm:w-1/2">
                <h2 className="text-[20px] sm:text-[24px] text-[#262626] font-Poppins font-semibold">
                  Building the idea of future solutions
                </h2>
                <p className="text-[14px] sm:text-[16px] text-[#5B5F77] font-Inter font-normal">
                  Offering Performance Driven Partnerships, CIBA specializes in Business Process Outsourcing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section (Image) */}
          <div className="w-full lg:w-[45%] mt-8 lg:mt-0">
            <img
              src={images7}
              alt="Business Solution"
              className="w-full h-auto rounded-lg transition-all duration-300 hover:shadow-[5px_5px_15px_rgba(0,0,0,0.5)]"
            />
          </div>

        </div>
      </Container>
    </section>
  );
};

export default ThirdPart;

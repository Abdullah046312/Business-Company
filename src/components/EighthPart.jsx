import React from 'react';
import Container from './Container';
import images12 from '../assets/images12.png';
import images13 from '../assets/images13.png';
import images14 from '../assets/images14.png';
import images15 from '../assets/images15.png';

const EighthPart = () => {
  return (
    <section className="py-16">
      <Container>
        {/* Heading Section */}
        <div className="text-center">
          <h4 className="text-[#FD5F36] text-[20px] font-Poppins font-semibold uppercase">New Blog</h4>
          <h2 className="text-[32px] md:text-[48px] text-[#262626] font-Poppins font-semibold py-8 md:py-16">
            Latest Updates and News
          </h2>
        </div>

        {/* Blog Cards Section */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Blog Card 1 */}
          <div className="w-full sm:w-[48%] lg:w-[30%]">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images12}
                alt="Blog 1"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h2 className="text-[20px] md:text-[24px] text-[#3F3C5C] font-Inter font-semibold mt-3">
              Simple Juice Recipes to boost your immune system
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#575470] font-Inter font-normal mt-2">
              Objectively restore stand-alone markets rather than enterprise-wide products.
            </p>
            <img className="mt-3" src={images15} alt="Author 1" />
          </div>

          {/* Blog Card 2 */}
          <div className="w-full sm:w-[48%] lg:w-[30%]">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images13}
                alt="Blog 2"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h2 className="text-[20px] md:text-[24px] text-[#3F3C5C] font-Inter font-semibold mt-3">
              4 steps for measuring the impact of product
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#575470] font-Inter font-normal mt-2">
              Clearly, the rise of time spent on social media creates a strain on all of its users, and these effects.
            </p>
            <img className="mt-3" src={images15} alt="Author 2" />
          </div>

          {/* Blog Card 3 */}
          <div className="w-full sm:w-[48%] lg:w-[30%]">
            <div className="overflow-hidden rounded-lg">
              <img
                src={images14}
                alt="Blog 3"
                className="transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <h2 className="text-[20px] md:text-[24px] text-[#3F3C5C] font-Inter font-semibold mt-3">
              The modern product manager’s tech stack
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#575470] font-Inter font-normal mt-2">
              The essential tools for the modern product manager for capturing feedback, prioritizing, ideating.
            </p>
            <img className="mt-3" src={images15} alt="Author 3" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EighthPart;

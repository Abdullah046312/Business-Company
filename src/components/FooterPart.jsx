import React from 'react';
import Container from './Container';
import logo from "../assets/Logo.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const FooterPart = () => {
  return (
    <section className="bg-[#30344E] text-white py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between border-b-2 border-[#767676] py-10">
          {/* Logo Section */}
          <div className="w-full md:w-[25%] text-center md:text-left">
            <img src={logo} alt="Logo" className="mx-auto md:mx-0" />
            <p className='text-[16px] text-[#FFF] font-Poppins mt-3'>
              Build a modern and creative website with Innovate.
            </p>
            <div className="flex gap-5 mt-5 text-[30px] justify-center md:justify-start">
              <AiFillGoogleCircle className="hover:text-[#FD5F36] transition-colors duration-300" />
              <FaTwitter className="hover:text-[#1DA1F2] transition-colors duration-300" />
              <FaLinkedin className="hover:text-[#0077B5] transition-colors duration-300" />
              <FaGithub className="hover:text-[#FD5F36] transition-colors duration-300" />
            </div>
          </div>

          {/* Product Links */}
          <div className="w-full md:w-[15%] text-center md:text-left mt-6 md:mt-0">
            <h4 className='text-[18px] text-[#52C5B6] font-Inter'>Product</h4>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Landingpages</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Pricing</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Benefits</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Features</h5>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-[15%] text-center md:text-left mt-6 md:mt-0">
            <h4 className='text-[18px] text-[#52C5B6] font-Inter'>Company</h4>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>About</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Privacy Policy</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Terms & Conditions</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Partners</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Contact</h5>
          </div>

          {/* Resources Links */}
          <div className="w-full md:w-[15%] text-center md:text-left mt-6 md:mt-0">
            <h4 className='text-[18px] text-[#52C5B6] font-Inter'>Resources</h4>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Guides and resources</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Blog</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Tools</h5>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>Support</h5>
          </div>

          {/* Get Latest Updates Section */}
          <div className="w-full md:w-[25%] text-center md:text-left mt-6 md:mt-0">
            <h4 className='text-[18px] text-[#52C5B6] font-Inter'>Get Latest Updates</h4>
            <h5 className='text-[16px] text-[#FFF] font-Inter mt-1'>
              Subscribe to our newsletter and get many interesting things every week.
            </h5>
            <input
              className='py-2 px-5 text-[16px] outline-none mt-5 pl-3 text-[#262626] rounded-lg'
              type="text"
              placeholder='Your Email Address'
            />
          </div>
        </div>
        <div className="">
            <h2 className='text-[16] text-[#FFF] font-Inter mt-3'>© 2020 Innovate - All Right Reserved</h2>
            <h2 className='text-[16] text-[#FFF] font-Inter mt-1'>Design By Abdullah Al-Mamun.</h2>
        </div>
      </Container>
    </section>
  );
};

export default FooterPart;

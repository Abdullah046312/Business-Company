import React from 'react';
import Container from './Container';
import images3 from "../assets/images3.png";
import images4 from "../assets/images4.png";
import images5 from "../assets/images5.png";
import images6 from "../assets/images6.png";
import Slider from "react-slick"; // Importing React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SecondPart = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at a time (on larger screens)
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Medium screens (tablets, etc.)
        settings: {
          slidesToShow: 3, // Show 3 slides on smaller screens
          slidesToScroll: 1,
          autoplay: true, // Ensure autoplay on medium screens as well
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600, // Small screens (mobile)
        settings: {
          slidesToShow: 2, // Show 2 slides on smaller screens
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          dots: false, // Disable dots on mobile screens
          arrows: false, // Disable arrows on mobile screens
        },
      },
    ],
  };

  return (
    <section className="bg-[#DBDBDB] py-20">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between mb-10">
          {/* Left Section */}
          <div className="w-full lg:w-[30%]">
            <h4 className="text-[20px] text-[#FD5F36] font-Poppins font-semibold">Services</h4>
            <h2 className="text-[32px] lg:text-[48px] text-[#262626] font-Poppins font-semibold mt-4">
              Find the service we provide
            </h2>
          </div>
          
          {/* Right Section (Description) */}
          <div className="w-full lg:w-[30%] mt-6 lg:mt-0">
            <p className="text-[16px] lg:text-[18px] text-[#5B5F77] font-Inter font-normal">
              Our consultants have years of experience in success. Through the provision of our services, we have helped businesses grow and thrive.
            </p>
          </div>
        </div>

        {/* React Slick Carousel */}
        <div>
          <Slider {...settings}>
            <div className="px-3"> {/* Add padding around each slide to create the gap */}
              <img 
                src={images3} 
                alt="Consulting Service 1" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
            <div className="px-3">
              <img 
                src={images4} 
                alt="Consulting Service 2" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
            <div className="px-3">
              <img 
                src={images5} 
                alt="Consulting Service 3" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
            <div className="px-3">
              <img 
                src={images6} 
                alt="Consulting Service 4" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default SecondPart;

import React from 'react'
import Container from './Container'
import images10 from "../assets/images10.png"
import images11 from "../assets/images11.png"
import Slider from "react-slick"; // Importing React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SeventhPart = () => {

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
              slidesToShow: 2, // Show 3 slides on smaller screens
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
   <section className="bg-[#DCE7FE]  py-16">
    <Container>
    <div className="w-full md:w-[40%] text-center md:text-left">
  <h2 className="text-[32px] sm:text-[40px] md:text-[48px] text-[#262626] font-Poppins font-semibold">
    What our customers are saying about us
  </h2>
</div>


        <div>
          <Slider {...settings}>
            <div className="px-3"> {/* Add padding around each slide to create the gap */}
              <img 
                src={images10} 
                alt="Consulting Service 1" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
            <div className="px-3">
              <img 
                src={images11} 
                alt="Consulting Service 2" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
            <div className="px-3">
              <img 
                src={images10} 
                alt="Consulting Service 3" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
            <div className="px-3">
              <img 
                src={images11} 
                alt="Consulting Service 4" 
                className="w-full h-[250px] md:h-[350px] object-cover rounded-lg" 
              />
            </div>
          </Slider>
        </div>
    </Container>
   </section>
  )
}

export default SeventhPart

import React from 'react';
import Container from './Container';

const FourthPart = () => {
  const teamMembers = [
    { name: 'Eleanor Pena', role: 'Senior Engineer '},
    { name: 'Jenny Wilson', role: 'Project Manager' },
    { name: 'Jerome Bell', role: 'Senior Engineer' },
    { name: 'Robert Fox', role: 'Marketing Expert' },
  ];

  return (
    <section className="bg-[#353A55] text-white py-16">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-[#FD5F36] text-[20px] font-Poppins font-semibold uppercase">Our Team</p>
          <h2 className="text-[48px] text-[#FFFF] font-Poppins font-bold">Meet With Expert</h2>
        </div>

        {/* Team Members */}
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-gray-300 w-64 h-80 rounded-lg overflow-hidden shadow-lg group hover:scale-105 transition-transform duration-300"
            >
              {/* Social Icons */}
              <div className="absolute top-8 right-8 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href="#"
                  className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
                <a
                  href="#"
                  className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="#"
                  className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <button
                    className="bg-red-500 text-white w-10 h-10 rounded-full flex items-center justify-center"
                    onClick={(e) => {
                      e.currentTarget.closest(".absolute").classList.add("hidden");
                    }}
                  >
                    X
                  </button>
              </div>

              {/* Member Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-teal-500 p-4 text-white">
                <p className="font-bold text-lg">{member.name}</p>
                <p className="text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FourthPart;

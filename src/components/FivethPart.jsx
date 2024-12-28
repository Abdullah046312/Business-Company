import React, { useState } from 'react';
import Container from './Container';
import images8 from '../assets/images8.png';

const FivethPart = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'Securing Digital Payment?',
      answer: 'Through our Connected Content™ approach, we unite communications, digital experiences, and performance marketing to help more than 1600 global companies.',
    },
    {
      id: 2,
      question: 'Investing in Digital Company?',
      answer: 'Simply contact us via our website or call us directly to schedule an initial consultation.',
    },
    {
      id: 3,
      question: 'Building the idea of the future?',
      answer: 'We specialize in technology, finance, healthcare, and retail industries.',
    },
    {
      id: 4,
      question: 'Accurate and friendly support?',
      answer: 'Yes, all our solutions are personalized based on the specific needs and goals of your business.',
    },
    {
      id: 5,
      question: 'What is the typical duration of a project?',
      answer: 'The duration varies depending on the project scope, but most engagements range from a few weeks to several months.',
    },
  ];

  const toggleFAQ = (id) => {
    setOpenQuestion((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Image Section */}
          <div className="w-full sm:w-[40%] md:w-[40%]">
            <img
              className="w-full filter drop-shadow-[1px_1px_10px_#8D0B41]"
              src={images8}
              alt="Business Consulting"
            />
          </div>

          {/* FAQ Section */}
          <div className="w-full sm:w-[60%] md:w-[50%] space-y-6 mt-6 md:mt-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 font-Poppins">
              Startup digital platform for investing
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-300 pb-4 hover:bg-gray-100 transition duration-300"
                >
                  {/* Question */}
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <p className="text-lg sm:text-xl font-medium text-gray-700 text-[28px] mt-5 hover:text-[#8D0B41]">
                      {faq.question}
                    </p>
                    <span
                      className={`font-bold text-[20px] transition ${
                        openQuestion === faq.id ? 'text-[#8D0B41]' : 'text-gray-500'
                      }`}
                    >
                      {openQuestion === faq.id ? '−' : '+'}
                    </span>
                  </div>

                  {/* Answer */}
                  {openQuestion === faq.id && (
                    <p className="mt-2 text-gray-600 text-[20px] font-Inter">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FivethPart;

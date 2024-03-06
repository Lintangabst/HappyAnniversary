'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Memories: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0);
  const [toggle, setToggle] = useState(false);

  const months = [
    ["/img/mar1.png", "/img/mar2.png", "/img/mar3.png"],
    ["/img/apr1.png", "/img/apr2.png", "/img/apr3.png"],
    ["/img/may1.png", "/img/may2.png", "/img/may3.png"],
    ["/img/jun1.png", "/img/jun2.png", "/img/jun3.png"],
    ["/img/jul1.png", "/img/jul2.png", "/img/jul3.png"],
    ["/img/aug1.png", "/img/aug2.png"],
    ["/img/sep1.png", "/img/sep2.png", "/img/sep3.png"],
    ["/img/oct2.png", "/img/oct1.png", "/img/oct3.png"],
    ["/img/nov3.png", "/img/nov2.png", "/img/nov1.png"],
    ["/img/des2.png", "/img/des1.png", "/img/des3.png"],
    ["/img/jan3.png", "/img/jan2.png", "/img/jan1.png"],
    ["/img/feb2.png", "/img/feb1.png", "/img/feb3.png"]
  ];

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? months.length - 1 : prev - 1));
    setToggle(!toggle);
  };

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === months.length - 1 ? 0 : prev + 1));
    setToggle(!toggle);
  };

  return (
    <div className="mx-auto pb-16 text-center" id='Memories'>
      <div className="flex  justify-center items-center space-x-4 pb-4">
      {toggle ? (
          <hr className="my-2 w-1/2 border-pink-500" />
        ) : (
          <hr className="my-2 w-1/2 border-black" />
        )}
        <h2 className="text-xl font-homemadeApple font-bold">{getMonthName(currentMonth)} Moments</h2>
        {!toggle ? (
          <hr className="my-2 w-1/2 border-pink-500" />
        ) : (
          <hr className="my-2 w-1/2 border-black" />
        )}
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 lg:flex-row lg:space-x-4">
        {months[currentMonth].map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${getMonthName(currentMonth)} ${index + 1}`}
            className="w-full lg:w-auto"
          />
        ))}
      </div>
      <div className="flex  justify-center mt-4 space-x-4 md:flex-col lg:flex-row lg:justify-between">
      <button onClick={prevMonth} className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={nextMonth} className="px-4 py-2 bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
    </div>
  );
};

const getMonthName = (index: number): string => {
  const months = [
    "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January", "February"
  ];
  return months[index];
};

export default Memories;

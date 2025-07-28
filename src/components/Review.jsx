import React from 'react';
import ReviewData from '../assets/ReviewData.json';

export const Review = () => {
  return (
    <div className="w-screen h-screen bg-gray-50 scroll-mt-20" id='Review'>
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center mb-10 ">
        <h1 className="text-4xl font-bold">Customer Reviews</h1>
        <h2 className="text-lg text-gray-600">Real Stories from Those Who Found Home</h2>
        <h2 className="text-lg text-gray-600">with Us</h2>
      </div>

      {/* Review Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {ReviewData.map((item, index) => (
          <div
            key={index}
            className="max-w-sm w-full bg-white rounded overflow-hidden shadow-lg flex flex-col jus items-center text-center p-6 h-[400px]"

          >
            {/* Image */}
            <figure className="flex justify-center mb-4">
              <img src={item.image} alt="profile" className="w-24 h-24 object-cover rounded-full" />
            </figure>
 <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${i < item.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>

            {/* Content */}
            <div>
              <div className="font-bold text-xl mb-1">{item.name}</div>
              <div className="text-gray-500 text-sm mb-4">{item.field}</div>
              <div className="flex-grow flex items-end">
    <p className="text-gray-700 text-base text-center">{item.msg}</p>
  </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

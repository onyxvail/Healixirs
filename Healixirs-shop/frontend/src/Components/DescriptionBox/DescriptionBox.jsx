import React from 'react';

export const DescriptionBox = () => {
  return (
    <div className='description-box bg-customNeon mx-20 my-10 rounded-lg shadow-lg'>
      <div className="descriptionbox-navigator flex bg-customNeon" >
        <div className="descriptionbox-nav-box flex items-center justify-center text-base font-semibold border rounded-lg w-36 h-16 mr-4">
          Description
        </div>
        <div className="descriptionbox-nav-box flex items-center justify-center text-base font-semibold border bg-customNeon text-gray-500 rounded-lg w-36 h-16">
          Reviews (120)
        </div>
      </div>

      <div className="descriptionbox-description flex flex-col gap-3 p-4 pb-16 text-sm">
        <p>yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada yada
          yada yada yada yada yada yadayada yada yada yada yada yadayada yada yada yada yada yada yada
          yada yada yada yada yada yadayada yada yada yada yada yadayada yada yada yada yada yada - will be filled later
        </p>
        <p>Never gonna let u up, never gonna let you down, Never gonna let u up, never gonna let you down,
          Never gonna let u up, never gonna let you down, Never gonna let u up, never gonna let you down,
          Never gonna let u up, never gonna let you down
        </p>
      </div>
    </div>
  );
};

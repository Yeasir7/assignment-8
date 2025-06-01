import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
      <div className="hero bg-base-200 md:h-[500px] rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/public/images/spine-of-the-dragon.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="p-14 w-2/3">
            <h1 className="text-5xl font-bold mb-10">
              Books to freshen up your bookshelf
            </h1>
            <Link className="btn bg-[#23BE0A] text-white" to="/listedBook">
              View The List
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Banner;
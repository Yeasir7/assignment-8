import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const book = useLoaderData();
    const {
      bookName,
      image,
      author,
      category,
      review,
      tags,
      totalPages,
      publisher,
      yearOfPublishing,
      rating,
    } = book;

    if (!book) {
      return (
        <div className="text-center text-xl mt-10">
          Book not found. Please check the URL.
        </div>
      );
    }
    return (
      <div className="flex">
        <div className="w-1/2">
          <img className="w-[500px] h-[650px]" src={image} alt="" />
        </div>
        <div className="w-1/2">
          <h1 className="text-[40px] font-extrabold">{bookName}</h1>
          <p className="mt-2">by: {author}</p>
          <hr className="my-4" />
          <p className="text-[20px] font-medium">{category}</p>
          <hr className="my-4" />
          <p>
            {" "}
            <span className="font-extrabold">Review:</span> {review}
          </p>

          <div className="grid grid-cols-3 mt-3">
            <span className="font-black">Tag:</span>{" "}
            {tags.map((tag) => (
              <div className=" text-[#23BE0A]">#{tag}</div>
            ))}
          </div>

          <hr className="my-4" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-5">
              <p>Year of Publishing:</p>
              <p>{totalPages}</p>
            </div>
            <div className="flex gap-5">
              <p>Numbers of pages:</p>
              <p>{yearOfPublishing}</p>
            </div>
            <div className="flex gap-5">
              <p>Publisher:</p>
              <p>{publisher}</p>
            </div>
            <div className="flex gap-5">
              <p>Rating:</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className='flex gap-3 mt-4'>
            <button className="btn">Read</button>
            <button className="btn bg-[#50B1C9]">Wishlist</button>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;
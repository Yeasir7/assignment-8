import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
  return (
    <Link to="/pageToRead" className="card bg-base-100 shadow-sm">
      <figure>
        <img
          className="w-[300px] h-[200px] rounded-xl"
          src={book.image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body">
        <div className="card-actions">
          {book.tags.map((tag) => (
            <div className="badge badge-outline">{tag}</div>
          ))}
        </div>

        <h2 className="card-title">{book.bookName}</h2>
        <p>By: {book.author}</p>
        <hr className="border-dashed" />
        <div className="flex justify-between">
          <h1>{book.category}</h1>
          <div className="flex items-center justify-center gap-2">
            <p>{book.rating}</p>
            <CiStar className="w-6 h-6" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;

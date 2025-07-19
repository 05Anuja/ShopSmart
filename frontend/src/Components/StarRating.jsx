import React from "react";

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center space-x-0.5 text-yellow-400 text-sm">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i}>
          {rating >= i ? "★" : rating >= i - 0.5 ? "⯪" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;

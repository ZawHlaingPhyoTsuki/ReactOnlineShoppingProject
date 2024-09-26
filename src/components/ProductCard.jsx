import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <div className="p-5 border border-black flex flex-col items-start gap-5">
      <img src={image} alt={title} className="h-40 " />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price}</p>
        <button className="border border-black text-sm px-3 py-1">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

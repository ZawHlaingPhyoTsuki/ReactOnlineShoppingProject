import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { carts } from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  return (
    <Link
      to={`/product-detail/${id}`}
      className="p-5 border border-black flex flex-col items-start gap-5"
    >
      <img src={image} alt={title} className="h-40 " />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price}</p>
        {carts.find((cart) => cart.product.id === id) ? (
          <button className=" bg-black text-white border border-black text-sm px-3 py-1">Added</button>
        ) : (
          <button className="border border-black text-sm px-3 py-1">
            Add to cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

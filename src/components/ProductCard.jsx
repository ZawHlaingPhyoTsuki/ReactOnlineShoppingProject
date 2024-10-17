import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import toast from "react-hot-toast";
// import { carts } from "../data/carts";

const ProductCard = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const { carts, addCart } = useCartStore();

  // if product already added in cart, show already added toast
  const handleAddedBtn = (event) => {
    event.stopPropagation(), toast.success("Already added");
  };

  // if pressed add to cart, prevent from going to ProductDetail Page
  const handleAddCart = (event) => {
    event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: id,
      quantity: 1,
    };
    addCart(newCart);
  };

  const navigate = useNavigate();
  const handleOpenDetail = () => {
    navigate(`/product-detail/${id}`);
  };

  return (
    <div
      onClick={handleOpenDetail}
      className="p-5 border border-black flex flex-col items-start gap-5 sm:w-[450px] sm:mx-auto md:w-full"
    >
      <img src={image} alt={title} className="h-40 mx-auto " />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price}</p>
        {carts.find((cart) => cart.productId === id) ? (
          <button
            onClick={handleAddedBtn}
            className="bg-black text-white border border-black text-sm px-3 py-1 transition-transform transform duration-200 active:scale-95 hover:scale-90"
          >
            Added
          </button>
        ) : (
          <button
            onClick={handleAddCart}
            className="border border-black text-sm px-3 py-1 transition-transform transform duration-200 hover:scale-105"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

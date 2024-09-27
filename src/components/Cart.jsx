import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="border mb-5 border-black p-5 grid grid-cols-6 md:gap-4 xl:gap-5 xs:gap-1 items-center">
      <div className="col-span-1">
        <img
          src={cart.product.image}
          alt={cart.product.title}
          className="h-24 block mx-auto object-contain"
        />
      </div>
      <div className="col-span-3">
        <p>{cart.product.title}</p>
        <p>Price ({cart.product.price})</p>
      </div>
      <div className="col-span-1 flex flex-col items-center gap-1">
        <p>Quantity</p>
        <div className="flex justify-center items-center gap-2">
          <button className="border border-black px-2 bg-black text-white font-bold py-1">-</button>
          <p>{cart.quantity}</p>
          <button className="border border-black px-2 bg-black text-white font-bold py-1">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-2xl text-end">$ {cart.cost}</p>
      </div>
    </div>
  );
};

export default Cart;

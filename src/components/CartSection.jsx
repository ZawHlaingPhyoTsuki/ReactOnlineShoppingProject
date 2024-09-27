import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { carts } from "../data/carts";

const CartSection = () => {
  

  return (
    <>
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}

      <div className="absolute bottom-10 left-0 right-0 w-full bg-red-300 h-52">
        <Container>
          <div className="flex gap-10 justify-end border-t border-black py-3">
            <div>
              <p className=" text-end text-2xl font-bold">Total</p>
              <p className=" text-end font-bold ">$ 99.98</p>
            </div>
            <div>
              <p className=" text-end text-2xl font-bold">Tax (10%)</p>
              <p className=" text-end font-bold ">$ 99.98</p>
            </div>
            <div>
              <p className=" text-end text-2xl font-bold">Net Total</p>
              <p className=" text-end font-bold ">$ 99.98</p>
            </div>
          </div>
          <div className="text-end">
            <Link className="inline-block bg-black text-white font-bold border border-black px-5 py-2">
              Order Now
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default CartSection;

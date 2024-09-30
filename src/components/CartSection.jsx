import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";
import useProductStore from "../store/useProductStore";
// import { carts } from "../data/carts";
import emptyCart from "../assets/emptyCart.svg";

const CartSection = () => {
  const { carts } = useCartStore();
  const { products } = useProductStore();

  // const total = carts.reduce((pv, cv) => {
  //   const cost =
  //     cv.quantity * products.find(({ id }) => id === cv.productId).price;
  //   return pv + cost;
  // }, 0);

  // const tax = (total * 0.1).toFixed(2);
  // // console.log(tax);
  // const netTotal = parseFloat(total) + parseFloat(tax);
  // // console.log(netTotal);

  const total = carts.reduce(
    (pv, cv) =>
      pv + cv.quantity * products.find((p) => p.id === cv.productId).price,
    0
  );

  const tax = +(total * 0.1).toFixed(2); // shorthand for parseFloat
  const netTotal = total + tax;

  // console.log(tax, netTotal);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="mx-4">
        {carts.length === 0 ? (
          <img
            src={emptyCart}
            alt="emptyCart"
            className="mt-20 xs:w-52 md:w-72 mx-auto block"
          />
        ) : (
          carts.map((cart) => <Cart key={cart.id} cart={cart} />)
        )}
      </div>

      <div className="mx-4">
        <div className="flex gap-10 justify-end border-t border-black py-3 mt-auto">
          <div>
            <p className=" text-end text-2xl font-bold">Total</p>
            <p className=" text-end font-bold ">$ {total.toFixed(2)}</p>
          </div>
          <div>
            <p className=" text-end text-2xl font-bold">Tax (10%)</p>
            <p className=" text-end font-bold ">$ {tax}</p>
          </div>
          <div>
            <p className=" text-end text-2xl font-bold">Net Total</p>
            <p className=" text-end font-bold ">$ {netTotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="text-end mb-20">
          <Link className="inline-block bg-black text-white font-bold border border-black px-5 py-2">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartSection;

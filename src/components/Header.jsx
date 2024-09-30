import React from "react";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import useCartStore from "../store/useCartStore";

function Header() {
  const { carts } = useCartStore();
  return (
    <header className="px-5 py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="text-3xl font-bold">Online Shop</Link>
          <Link to="/my-cart" className="border border-black px-5 py-2 relative active:scale-90 hover:bg-stone-100 hover:scale-105">
            My Cart
            <span className="absolute text-xs bg-red-500 text-white rounded-full px-2 py-1 top-0 right-0 translate-x-1/2 -translate-y-1/2">
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;

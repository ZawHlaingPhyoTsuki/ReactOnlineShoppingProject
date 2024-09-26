import React from "react";

function Header() {
  return (
    <header className="px-5 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Online Shop</h1>
        <button className="border border-black px-5 py-2 relative">
          My Cart<span className="absolute text-xs bg-red-500 text-white rounded-full px-2 py-1 top-0 right-0 translate-x-1/2 -translate-y-1/2">1</span>
        </button>
      </div>
    </header>
  );
}

export default Header;

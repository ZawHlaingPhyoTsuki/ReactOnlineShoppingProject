import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <footer className="mx-5 mt-auto bg-black text-white text-center py-2 flex justify-between px-5">
      <span>©{year} Tsukuyomi by tro2233zhp@gmail.com</span>
      <span> All rights reserved.</span>
    </footer>
  );
}

export default Footer;

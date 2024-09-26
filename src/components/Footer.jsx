import React from "react";

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
      <footer className="mx-5 mt-auto bg-black text-white text-center py-2">
          ©{year} MMS IT. All rights reserved.
      </footer>
  );
}

export default Footer;

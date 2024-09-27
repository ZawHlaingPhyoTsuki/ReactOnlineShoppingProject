import React from "react";

export const Container = ({ children }) => {
  return <div className="w-full xs:w-[320px]  sm:w-[540px] md:w-[720px] lg:w-[960px] mx-auto">{children}</div>;
};



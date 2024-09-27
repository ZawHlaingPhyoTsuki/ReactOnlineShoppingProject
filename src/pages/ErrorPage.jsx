import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="text-center flex flex-col gap-5 items-center">
        <h1 className="text-3xl font-bold">404 Not Found</h1>
        <p className="w-96 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          officiis be Lorem ipsum dolor sit amet
          consectetur acing elit. Aspernatur adtatibus pr
        </p>
        <Link to="/" className="border border-black px-5 py-2">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;

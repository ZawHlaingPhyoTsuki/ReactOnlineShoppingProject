import React from "react";
import { useParams } from "react-router-dom";
// import products from '../data/products';
import { Container } from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import useProductStore from "../store/useProductStore";
import useCartStore from "../store/useCartStore";

const ProductDetails = () => {
  const { carts, addCart } = useCartStore();

  const { productId } = useParams();
  const { products } = useProductStore();
  const currentProduct = products.find((product) => product.id == productId);
  
  const handleAddCart = (event) => {
    // event.stopPropagation();
    const newCart = {
      id: Date.now(),
      productId: currentProduct.id,
      quantity: 1,
    };
    addCart(newCart);
  };
  // console.log(currentProduct)

  // console.log(productId)
  // console.log(useParams())
  return (
    <Container className={""}>
      <Breadcrumb currentPageTitle="Product Details" />
      <div className="border border-black p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          <div className="col-span-1 flex items-center">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="xs:w-48 sm:w-52  mx-auto "
            />
          </div>
          <div className="col-span-1 flex flex-col gap-5 items-start">
            <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
            <p className="bg-gray-200 text-gray-700 inline-block px-5 py-1">
              {currentProduct.category}
            </p>
            <p>{currentProduct.description}</p>
            <Rating rate={currentProduct.rating.rate} />
            <div className="flex justify-between w-full items-center">
              <p className="text-2xl">Price : ${currentProduct.price}</p>
              {/* <button className="border border-black px-5 py-2">
                Add to cart
              </button> */}
              {carts.find((cart) => cart.productId === currentProduct.id) ? (
                <button
                  // onClick={handleAddedBtn}
                  className=" bg-black text-white border border-black text-sm px-3 py-1  transition-transform transform duration-200 active:scale-95 hover:scale-90"
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddCart}
                  className="border border-black text-sm px-3 py-1  transition-transform transform duration-200 hover:scale-105"
                >
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;

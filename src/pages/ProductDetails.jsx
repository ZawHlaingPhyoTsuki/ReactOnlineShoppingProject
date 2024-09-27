import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { Container } from '../components/Container';
import Rating from '../components/Rating';
import Breadcrumb from '../components/Breadcrumb';

const ProductDetails = () => {
  const { productId } = useParams();
  const currentProduct = products.find((product) => product.id == productId);
  // console.log(currentProduct)


  // console.log(productId)
  // console.log(useParams())
  return (
    <Container>
      <Breadcrumb currentPageTitle="Product Details" />
      <div className="border border-black p-10">
        <div className="grid grid-cols-2 gap-10 ">
          <div className="col-span-1">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="h-96 block mx-auto"
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
              <button className="border border-black px-5 py-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetails

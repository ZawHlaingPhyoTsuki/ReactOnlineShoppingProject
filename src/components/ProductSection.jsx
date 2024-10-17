import React from "react";
import ProductCard from "./ProductCard";
import { Container } from "./Container";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";
// import products from "../data/products";

function ProductSection() {
  
  const { products } = useProductStore();
  const { categories } = useCategoryStore();

  const currentCategory = categories.find((category) => category.isActive === true);

  return (
    <section className="px-5 mb-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">Available Product Lists</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.filter((product) => currentCategory.name === "All" || product.category === currentCategory.name ).map((product) => ( 
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default ProductSection;

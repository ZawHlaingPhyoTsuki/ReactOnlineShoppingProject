import React from "react";
import CategoryButton from "./CategoryButton";
import { Container } from "./Container";
import useCategoryStore from "../store/useCategoryStore";

function CategorySection() {
  const title = "Product Categories";

  // const categories = [
  //   "electronics",
  //   "jewelery",
  //   "men's clothing",
  //   "women's clothing",
  // ];

  const { categories } = useCategoryStore();
  // console.log(categories)

  return (
    <div id="category-section" className="p-5">
      <Container>
        <p className="text-sm text-gray-500 mb-2">{title}</p>
        <div
          className="flex overflow-x-auto category-button-group"
          onWheel={(e) => {
            e.currentTarget.scrollLeft += e.deltaY; // This makes vertical mouse scrolling act horizontally.
          }}
        >
          {/* <CategoryButton categoryName="all" current={true} /> */}
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CategorySection;

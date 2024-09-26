import React from "react";
import CategoryButton from "./CategoryButton";

function CategorySection() {
  const title = "Product Categories";

  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];

  return (
    <div id="category-section" className="p-5">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <div
        className="flex overflow-x-auto category-button-group"
        onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY; // This makes vertical mouse scrolling act horizontally.
        }}
      >
        <CategoryButton categoryName="all" current={true} />
        {categories.map((category) => (
          <CategoryButton
            key={category}
            categoryName={category}
            current={false}
          />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;

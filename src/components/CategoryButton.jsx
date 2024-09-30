import React from "react";
import useCategoryStore from "../store/useCategoryStore";

function CategoryButton({category:{id,name, isActive}}) {
  // console.log(category.name, category.isActive);

  const { activeCategory } = useCategoryStore();

  const handleClick = () => {
    activeCategory(id);
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${
          isActive && "bg-black text-white"
        } border border-black px-4 py-2 me-2 text-nowrap `}
      >
        {name}
      </button>
    </div>
  );
}

export default CategoryButton;



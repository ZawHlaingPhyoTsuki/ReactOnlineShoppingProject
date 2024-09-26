import React from 'react'

function CategoryButton({categoryName, current}) {
  return (
    <div>
      <button className={`${current && "bg-black text-white"} border border-black px-4 py-2 me-2 text-nowrap`}>
        {categoryName}
      </button>
    </div>
  );
}

export default CategoryButton

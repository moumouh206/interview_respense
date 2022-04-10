import React from 'react';

export default function Categories({ categories, handdleCategoryChange }) {
  return (
    <div className="col-span-4 md:col-span-1 bg-gray-100 p-10">
      <select
        className="form-multiselect cursor-pointer w-full overflow-hidden mt-1 focus:outline-none focus:ring-0 focus:border-0 bg-transparent h-full min-h-[400px] appearance-none"
        multiple
        onChange={(e) => handdleCategoryChange(e)}
      >
        <option
          selected
          className="py-2 font-bold active:bg-purple-500 pl-5  visited:bg-purple-500"
          value="All"
        >
          Tous les categorie
        </option>
        {categories.map((category) => (
          <option
            key={category.category}
            className="py-2 active:bg-purple-500 pl-3  visited:bg-purple-500 selected:bg-purple-500"
            value={category.category}
          >
            {category.category}
          </option>
        ))}
      </select>
    </div>
  );
}

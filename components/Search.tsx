import React, { useState } from 'react';

export default function Search({ handleSearch }) {
  const [SearchValue, setSearchValue] = useState('');
  return (
    <div className="py-5">
      <h1 className="">Rechercher votre film</h1>
      <input
        type="text"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        value={SearchValue}
        placeholder="Rechercher"
        onChange={(e) => {
          setSearchValue(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

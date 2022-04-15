import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from 'redux/actions/moviesActions';
import { setCurrentPage } from 'redux/actions/paginationActions';

export default function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (value: string) => {
    dispatch(setSearchQuery(value));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className="py-5">
      <h1 className="">Rechercher votre film</h1>
      <input
        type="text"
        className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        value={search}
        placeholder="Rechercher"
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

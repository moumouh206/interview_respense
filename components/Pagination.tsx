/* eslint-disable react/destructuring-assignment */

import React, { useEffect, useState } from 'react';

export default function Pagination({
  items,
  setFiltred,
  current,
  setCurrent,
  moviesPerPage,
  setMoviesPerPage,
}) {
  const [pageSize, setPageSize] = useState(moviesPerPage);
  const [currentPage, setCurrentPage] = useState(current);
  const pagesCount = Math.ceil(items.length / pageSize);

  const pages = [...Array(pagesCount).keys()];
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    setCurrent(pageNumber);
  };
  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value);
    setMoviesPerPage(e.target.value);
    setCurrentPage(1);
    setCurrent(1);
  };

  useEffect(() => {
    if (items.length < pageSize) {
      setFiltred(items.slice(0, pageSize));
    } else {
      const pageItems = items.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
      );
      setFiltred(pageItems);
    }
  }, [pageSize, currentPage]);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <button
            className="bg-gray-200 p-2 rounded-lg text-sm mx-2 disabled:bg-gray-100 disabled:text-gray-300"
            type="button"
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Précédent
          </button>

          {pages.map((page) => (
            <button
              type="button"
              className={`bg-gray-200 p-2 px-3 rounded-lg text-sm mx-2 ${
                currentPage === page + 1 ? 'bg-purple-500 text-white' : ''
              }`}
              key={page + 1}
              onClick={() => paginate(page + 1)}
            >
              {page + 1}
            </button>
          ))}

          <button
            className="bg-gray-200 p-2 rounded-lg text-sm mx-2 disabled:bg-gray-100 disabled:text-gray-300"
            type="button"
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === pagesCount}
          >
            Suivant
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Film par page:</span>
          <select
            onChange={(e) => handlePageSizeChange(e)}
            className="p-1"
            defaultValue={12}
          >
            {/* <option value={3}>3</option>
            <option value={4}>4</option> */}
            <option value={6}>6</option>
            {/* <option value={8}>8</option> */}
            <option value={12}>12</option>
            <option value={18}>18</option>
          </select>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable react/destructuring-assignment */

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, setPerPage } from 'redux/actions/paginationActions';
import store from 'redux/store';

type RootState = ReturnType<typeof store.getState>;
export default function Pagination({ items, setFiltred }) {
  const pagination = useSelector((state: RootState) => state.pagination);
  const { currentPage, perPage } = pagination.pagination;
  const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState(perPage);
  const [current, setCurrent] = useState(currentPage);
  const pagesCount = Math.ceil(items.length / pageSize);

  const pages = [...Array(pagesCount).keys()];
  const paginate = (pageNumber: number) => {
    setCurrent(pageNumber);
    dispatch(setCurrentPage(pageNumber));
  };
  const handlePageSizeChange = (e: any) => {
    setPageSize(e.target.value);
    dispatch(setPerPage(e.target.value));
    setCurrent(1);
  };

  useEffect(() => {
    if (items.length < pageSize) {
      setFiltred(items.slice(0, pageSize));
    } else {
      const pageItems = items.slice(
        (current - 1) * pageSize,
        current * pageSize,
      );
      setFiltred(pageItems);
    }
  }, [pageSize, current]);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <button
            className="bg-gray-200 p-2 rounded-lg text-sm mx-2 disabled:bg-gray-100 disabled:text-gray-300"
            type="button"
            onClick={() => paginate(current - 1)}
            disabled={current === 1}
          >
            Précédent
          </button>

          {pages.map((page) => (
            <button
              type="button"
              className={`bg-gray-200 p-2 px-3 rounded-lg text-sm mx-2 ${
                current === page + 1 ? 'bg-purple-500 text-white' : ''
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
            onClick={() => paginate(current + 1)}
            disabled={current === pagesCount}
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

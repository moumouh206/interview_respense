/* eslint-disable react/destructuring-assignment */

import Movie from 'datatypes/movie';
import { useSelector, useDispatch } from 'react-redux';

import { setCurrentPage, setPerPage } from 'redux/actions/paginationActions';
import store from 'redux/store';

type RootState = ReturnType<typeof store.getState>;
export default function Pagination() {
  const pagination = useSelector((state: RootState) => state.pagination);
  const filtredMovies: Movie[] = useSelector(
    (state: RootState) => state.allMovies.filtredMovies,
  );

  const { currentPage, perPage } = pagination.pagination;
  const dispatch = useDispatch();

  const pagesCount: number = Math.ceil(filtredMovies.length / perPage);

  const pages = [...Array(pagesCount).keys()];

  const paginate = (pageNumber: number) => {
    dispatch(setCurrentPage(pageNumber));
  };
  const handleperPageChange = (e: any) => {
    dispatch(setPerPage(e.target.value));
    dispatch(setCurrentPage(1));
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <button
            className="bg-gray-200 p-2 rounded-lg text-sm mx-2 disabled:bg-gray-100 disabled:text-gray-300"
            type="button"
            onClick={() => paginate(currentPage - 1)}
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
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pagesCount || pagesCount === 0}
          >
            Suivant
          </button>
        </div>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">Film par page:</span>
          <select
            onChange={(e) => handleperPageChange(e)}
            className="p-1"
            defaultValue={12}
          >
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={18}>18</option>
          </select>
        </div>
      </div>
    </div>
  );
}

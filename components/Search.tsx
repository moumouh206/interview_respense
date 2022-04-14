import Movie from 'datatypes/movie';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setFiltredMovies,
  setMoviesPerPage,
  setSearchQuery,
} from 'redux/actions/moviesActions';
import store from 'redux/store';

type RootState = ReturnType<typeof store.getState>;
export default function Search() {
  const allMovies: Movie[] = useSelector(
    (state: RootState) => state.allMovies.movies,
  );

  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const handleSearch = (value: string) => {
    dispatch(setSearchQuery(value));
    const MoviesSearch = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase()),
    );
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

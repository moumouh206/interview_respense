/* eslint-disable no-param-reassign */

import Movie from 'datatypes/movie';
import movies$ from 'data/movies';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from 'redux/actions/moviesActions';

import Head from 'next/head';
import MoviesList from 'components/MoviesList';
import Pagination from 'components/Pagination';

export default function Index() {
  const AllMovies: Movie[] = useSelector((state) => state.allMovies.movies);
  const [AllMoviesWithoutPagination, setAllMoviesWithoutPagination] = useState(
    [],
  );
  const [Search, setSearch] = useState('');
  const [FiltredMovies, setFiltredMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const Dispatch = useDispatch();
  // get movies from data/movies.ts
  const films = () => {
    movies$.then((movies) => {
      // despatch the movies to the state
      Dispatch(setMovies(movies));
      setFiltredMovies(movies.slice(0, 6));
      setAllMoviesWithoutPagination(movies);
      setCategories(
        Object.values(
          movies.reduce((m: Array<any>, { category }) => {
            m[category] = { category };
            return m;
          }, {}),
        ),
      );
    });
  };
  useEffect(films, []);
  useEffect(() => {
    setFiltredMovies(AllMovies.slice(0, 6));
    setAllMoviesWithoutPagination(AllMovies);
    setCategories(
      Object.values(
        AllMovies?.reduce((m: Movie[], { category }) => {
          m[category] = { category };
          return m;
        }, {}),
      ),
    );
  }, [AllMovies]);
  const handdleCategoryChange = (e: any) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value,
    );

    if (value.length === 0 || value[0] === 'All') {
      setFiltredMovies(AllMovies);
      setAllMoviesWithoutPagination(AllMovies);
    } else {
      setFiltredMovies(
        AllMovies.filter((movie) => value.includes(movie.category)),
      );
      setAllMoviesWithoutPagination(
        AllMovies.filter((movie) => value.includes(movie.category)),
      );
    }
  };

  return (
    <div className="flex flex-col items-center  min-h-screen pb-2 font-medium">
      <Head>
        <title>Interview Respense - BIDA Mohamed Amine</title>
      </Head>
      <main className=" w-full max-w-6xl mx-auto ">
        <div className="max-w-7xl mx-auto w-full p-10 bg-gray-50 min-h-screen">
          <h1>Liste des films</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
                    className="py-2 active:bg-purple-500 pl-3  visited:bg-purple-500 selected:bg-purple-500"
                    value={category.category}
                  >
                    {category.category}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-span-4 md:col-span-3 ">
              <div className="py-5">
                <h1 className="">Rechercher votre film</h1>
                <input
                  type="text"
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  value={Search}
                  placeholder="Rechercher"
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setFiltredMovies(
                      AllMovies?.filter((movie) =>
                        movie.title
                          .toLowerCase()
                          .includes(e.target.value.toLowerCase()),
                      ),
                    );
                  }}
                />
              </div>
              <MoviesList FiltredMovies={FiltredMovies} />
              <Pagination
                items={AllMoviesWithoutPagination}
                setFiltred={setFiltredMovies}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

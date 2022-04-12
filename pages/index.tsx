/* eslint-disable no-param-reassign */

import Movie from 'datatypes/movie';
import movies$ from 'data/movies';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from 'redux/actions/moviesActions';

import Head from 'next/head';
import MoviesList from 'components/MoviesList';
import Pagination from 'components/Pagination';
import Categories from 'components/Categories';
import Search from 'components/Search';
import store from 'redux/store';

type RootState = ReturnType<typeof store.getState>;

export default function Index() {
  const AllMovies: Movie[] = useSelector(
    (state: RootState) => state.allMovies.movies,
  );
  const [AllMoviesWithoutPagination, setAllMoviesWithoutPagination] = useState(
    [],
  );

  const [FiltredMovies, setFiltredMovies] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(12);
  const Dispatch = useDispatch();
  // get movies from data/movies.ts
  const films = () => {
    movies$.then((movies) => {
      // pour eliminer les doublons dans la liste des films qui ont le meme titre
      /* movies = movies.filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.title === value.title),
      ); */
      // despatch the movies to the state
      Dispatch(setMovies(movies));
      setFiltredMovies(
        movies.slice(
          (currentPage - 1) * moviesPerPage,
          currentPage * moviesPerPage,
        ),
      );
      setAllMoviesWithoutPagination(movies);
      const disponiblecategories = movies
        .filter(
          (value, index, self) =>
            index === self.findIndex((t) => t.category === value.category),
        )
        .map((value) => ({ category: value.category }));
      setCategories(disponiblecategories);
    });
  };
  useEffect(films, []);
  useEffect(() => {
    setFiltredMovies(
      AllMovies.slice(
        (currentPage - 1) * moviesPerPage,
        currentPage * moviesPerPage,
      ),
    );
    setAllMoviesWithoutPagination(AllMovies);
    const disponiblecategories = AllMovies.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.category === value.category),
    ).map((value) => ({ category: value.category }));
    setCategories(disponiblecategories);
  }, [AllMovies]);
  const handdleCategoryChange = (e: any) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value,
    );

    if (value.length === 0 || value[0] === 'All') {
      setFiltredMovies(
        AllMovies.slice(
          (currentPage - 1) * moviesPerPage,
          currentPage * moviesPerPage,
        ),
      );
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

  const handleSearch = (value: string) => {
    if (value === '') {
      setFiltredMovies(
        AllMovies.slice(
          (currentPage - 1) * moviesPerPage,
          currentPage * moviesPerPage,
        ),
      );
      setAllMoviesWithoutPagination(AllMovies);
    } else {
      setFiltredMovies(
        AllMovies.filter((movie) =>
          movie.title.toLowerCase().includes(value.toLowerCase()),
        ),
      );
      setAllMoviesWithoutPagination(AllMovies);
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
            <Categories
              categories={categories}
              handdleCategoryChange={handdleCategoryChange}
            />
            <div className="col-span-4 md:col-span-3 ">
              <Search handleSearch={handleSearch} />
              <MoviesList FiltredMovies={FiltredMovies} />
              <Pagination
                current={currentPage}
                setCurrent={setCurrentPage}
                items={AllMoviesWithoutPagination}
                setFiltred={setFiltredMovies}
                moviesPerPage={moviesPerPage}
                setMoviesPerPage={setMoviesPerPage}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

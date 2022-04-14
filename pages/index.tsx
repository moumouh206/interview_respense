/* eslint-disable no-param-reassign */

import movies$ from 'data/movies';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setFiltredMovies, setMovies } from 'redux/actions/moviesActions';

import Head from 'next/head';
import MoviesList from 'components/MoviesList';
import Pagination from 'components/Pagination';
import Categories from 'components/Categories';
import Search from 'components/Search';

export default function Index() {
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
      Dispatch(setFiltredMovies(movies));
    });
  };
  useEffect(films, []);

  return (
    <div className="flex flex-col items-center  min-h-screen pb-2 font-medium">
      <Head>
        <title>Interview Respense - BIDA Mohamed Amine</title>
      </Head>
      <main className=" w-full max-w-6xl mx-auto ">
        <div className="max-w-7xl mx-auto w-full p-10 bg-gray-50 min-h-screen">
          <h1>Liste des films</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Categories />
            <div className="col-span-4 md:col-span-3 ">
              <Search />
              <MoviesList />
              <Pagination />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

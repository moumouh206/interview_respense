import Movie from 'datatypes/movie';
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setFiltredMovies,
  setMoviesPerPage,
} from 'redux/actions/moviesActions';
import store from 'redux/store';
import MovieComponent from './Movie';

type RootState = ReturnType<typeof store.getState>;
export default function MoviesList() {
  const [ResultaText, setResultaText] = useState('');

  const dispatch = useDispatch();
  const moviesPerPage: Movie[] = useSelector(
    (state: RootState) => state.allMovies.moviesPerPage,
  );
  const filtredMovies: Movie[] = useSelector(
    (state: RootState) => state.allMovies.filtredMovies,
  );
  const allMovies: Movie[] = useSelector(
    (state: RootState) => state.allMovies.movies,
  );
  const { currentPage, perPage } = useSelector(
    (state: RootState) => state.pagination.pagination,
  );
  const selectedCategories: string[] = useSelector(
    (state: RootState) => state.allMovies.selectedCategories,
  );
  const searchValue: string = useSelector(
    (state: RootState) => state.allMovies.search,
  );
  const [checkStateChangeBefore, setCheckStateChangeBefore] = useState({
    currentPage,
    perPage,
    searchValue,
    selectedCategories,
    allMovies,
  });
  useEffect(() => {
    const checkStateChangeAfter = {
      currentPage,
      perPage,
      searchValue,
      selectedCategories,
      allMovies,
    };
    if (checkStateChangeAfter.currentPage === checkStateChangeBefore.currentPage && checkStateChangeAfter.perPage === checkStateChangeBefore.perPage && checkStateChangeAfter.searchValue === checkStateChangeBefore.searchValue && checkStateChangeAfter.selectedCategories === checkStateChangeBefore.selectedCategories && checkStateChangeAfter.allMovies === checkStateChangeBefore.allMovies) {
      return;
    }
    if (searchValue === '') {
      if (selectedCategories.length === 0 || selectedCategories[0] === 'All') {
        dispatch(setFiltredMovies(allMovies));
        dispatch(
          setMoviesPerPage(
            allMovies.slice((currentPage - 1) * perPage, currentPage * perPage),
          ),
        );
      } else {
        const moviesinCategory = allMovies.filter((movie) =>
          selectedCategories.includes(movie.category),
        );
        if (moviesinCategory.length === 0) {
          setResultaText('Aucun film dans cette catégorie');
          dispatch(setFiltredMovies(allMovies));
          dispatch(
            setMoviesPerPage(
              allMovies.slice(
                (currentPage - 1) * perPage,
                currentPage * perPage,
              ),
            ),
          );
        } else {
          dispatch(setFiltredMovies(moviesinCategory));
          dispatch(
            setMoviesPerPage(
              moviesinCategory.slice(
                (currentPage - 1) * perPage,
                currentPage * perPage,
              ),
            ),
          );
        }
      }
    } else {
      const moviesSearch = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()),
      );
      if (moviesSearch.length === 0) {
        setResultaText('Aucun film trouvé pour cette recherche');
        dispatch(setFiltredMovies(moviesSearch));
        dispatch(
          setMoviesPerPage(
            moviesSearch.slice(
              (currentPage - 1) * perPage,
              currentPage * perPage,
            ),
          ),
        );
      } else if (
        selectedCategories.length === 0 ||
        selectedCategories[0] === 'All'
      ) {
        dispatch(setFiltredMovies(moviesSearch));
        dispatch(
          setMoviesPerPage(
            moviesSearch.slice(
              (currentPage - 1) * perPage,
              currentPage * perPage,
            ),
          ),
        );
      } else {
        const moviesinCategory = moviesSearch.filter((movie) =>
          selectedCategories.includes(movie.category),
        );

        if (moviesinCategory.length === 0) {
          setResultaText('Aucun film dans cette catégorie');
        }
        dispatch(setFiltredMovies(moviesinCategory));
        dispatch(
          setMoviesPerPage(
            moviesinCategory.slice(
              (currentPage - 1) * perPage,
              currentPage * perPage,
            ),
          ),
        );
      }
    }
    setCheckStateChangeBefore(checkStateChangeAfter);
  }, [
    currentPage,
    perPage,
    selectedCategories,
    allMovies,
    filtredMovies,
    searchValue,
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {moviesPerPage.length > 0 ? (
        moviesPerPage?.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))
      ) : (
        <div className="w-full col-span-3 flex items-center justify-center flex-col">
          <h1 className="font-bold text-gray-500 mb-20 mt-20">{ResultaText}</h1>
          <img src="../images/emptylist.svg" alt="emptylist" className="w-60" />
        </div>
      )}
    </div>
  );
}

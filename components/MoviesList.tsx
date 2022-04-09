import React from 'react';
import MovieComponent from './Movie';

export default function MoviesList({ FiltredMovies }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {FiltredMovies.length > 0 ? (
        FiltredMovies?.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} />
        ))
      ) : (
        <div className="w-full col-span-3 flex items-center justify-center flex-col">
          <h1 className="font-bold text-gray-500 mb-20 mt-20">
            Aucun film trouvé
          </h1>
          <img src="../images/emptylist.svg" alt="emptylist" className="w-60" />
        </div>
      )}
    </div>
  );
}

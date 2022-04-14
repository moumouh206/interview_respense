import Movie from 'datatypes/movie';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategories } from 'redux/actions/moviesActions';
import { setCurrentPage } from 'redux/actions/paginationActions';
import store from 'redux/store';

type RootState = ReturnType<typeof store.getState>;
export default function Categories() {
  const allMovies: Movie[] = useSelector(
    (state: RootState) => state.allMovies.movies,
  );

  const [categories, setCategories] = useState<{ category: string }[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const disponiblecategories = allMovies
      .filter(
        (value, index, self) =>
          index === self.findIndex((t) => t.category === value.category),
      )
      .map((value) => ({ category: value.category }));
    setCategories(disponiblecategories);
  }, [allMovies]);
  const handdleCategoryChange = (e: any) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option: any) => option.value,
    );
    dispatch(setSelectedCategories(value));
    dispatch(setCurrentPage(1));
  };
  return (
    <div className="col-span-4 md:col-span-1 bg-gray-100 p-10">
      <select
        className="form-multiselect cursor-pointer w-full overflow-hidden mt-1 focus:outline-none focus:ring-0 focus:border-0 bg-transparent h-full min-h-[400px] appearance-none"
        multiple
        onChange={(e) => handdleCategoryChange(e)}
        defaultValue={categories}
      >
        <option
          className="py-2 font-bold  pl-5  checked:bg-purple-300"
          value="All"
        >
          Tous les categorie
        </option>
        {categories.map((category) => (
          <option
            key={category.category}
            className="py-2 active:bg-purple-500 pl-3  checked:bg-purple-300 selected:bg-purple-500"
            value={category.category}
          >
            {category.category}
          </option>
        ))}
      </select>
    </div>
  );
}

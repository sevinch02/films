import React from 'react'
import Movie from './Movie'
import { useEffect, useState } from 'react';
import usePrevious from '../hooks.js';
import apiCalls from '../config/api';

const MoviesGrid = (props) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const prevGenre = usePrevious(props.genre);
  const [error, setError] = useState(1);
  const loadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  useEffect(() => {
    let list;
    if(prevGenre !== props.genre) {
      list = []
    } else {
      list = movies;
    }
      const discover = async () => {
        try {
          const data = await apiCalls.discover({
            page: page,
            language:"en-US",
            include_adult:false,
            with_genres : props.genre

          });
          setMovies([...list, ...data.results]);
          setTotalPage(data.total_pages);
        } catch (error) {
            setError(error.message);
        }
      }
      discover();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.genre, page]);

  return (
    <div className="moviesgrid">
    {error ? error : <Movie/>}
     <div className="row">
        {movies.map( (el, i) => <Movie className="moviesgrid__movie" movieobj={el} key={i} /> )}
     </div>
      {
        page < totalPage ? <button type="button" className="load_btn" onClick={loadMore}>Load more</button> : ''
      }
      <button className="movies_count"> Movies count: {movies.length}</button> 

    </div>
  );
};
export default MoviesGrid;
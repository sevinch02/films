import React from 'react';
import {useState, useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import Movie from './Movie';
import { Link } from 'react-router-dom';
import apiCalls from '../config/api';
const Movielist = ({type, title}) => {

  const [moviesList,setMoviesList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await apiCalls.getMovies(type);
        setMoviesList(data.results);
      } catch (error) {
          setError(error.message);
      }
    }
    getMovies();
    
  },[type]);
  return (
    <div className="movielist"> 
      <div className="row" >
        <h2 className="movie-title">{title}</h2>
       <button className="catalog-btn"> <Link className="catalog-btn_link" to="/catalog" >All Movies </Link> </button>
      </div>
      {!error && <Swiper
                spaceBetween={30} slidesPerView={6}>
                {moviesList.map( el => ( <SwiperSlide key={el.id}><Movie movieobj={el}  /></SwiperSlide> ))}
            </Swiper>}
            {error && <div>{error}</div>} 
    </div>
  );
}
export default Movielist;
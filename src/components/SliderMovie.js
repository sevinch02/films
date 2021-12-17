import React, {useEffect} from 'react'
import SwiperCore from 'swiper';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useState} from "react/cjs/react.development";
import apiCalls from '../config/api';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const BACKDROP_URL = 'https://image.tmdb.org/t/p/original/';

const SliderMovie = ({type}) => {

  SwiperCore.use([Autoplay]);

  const [isLoading,  setIsLoading] = useState(true);
  const [sliderMovies,  setSliderMovies] = useState([]);
  const [error,  setError] = useState('');


  useEffect(() => {
    setTimeout(() => {
    const getMovies = async () =>{
      try{
        const data = await apiCalls.getMovies(type);
        setSliderMovies(data.results.slice(0, 4));
        setIsLoading(false)
      }catch(error){
        setIsLoading(false)
        setError(error.message)
      }
    }
      getMovies(); 
  },1000)
  },[type]);

  const newArr = sliderMovies.map(el => 
  (<SwiperSlide key={el.id}>
    <div className="slider_movie">
      <div className="slider-card">
        <img className="slider-card__img" src={IMAGE_URL + el.poster_path} alt={el.title} />
      <div className="slider-card-text">
           <h3  className="slider-card__title">{el.title}</h3>
            <p className="slider-card__overview ">{el.overview}</p>
           <span className="movie-title movie-average slider-card__vote">{el.vote_average}</span>
          </div>
        </div>
     
      <img className="slider_movie__backdrop"  src={BACKDROP_URL + el.backdrop_path} alt={el.title}/>
    </div>
  </SwiperSlide>));

  return (
    <div>
       {error ? error : isLoading}
       {isLoading ? isLoading : <Swiper/>} 
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}>
        {newArr}
      </Swiper>
    </div>
  )
}

export default SliderMovie;

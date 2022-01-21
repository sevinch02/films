import {useEffect, useState} from "react";
import Header from "../components/Header";
import Actorcard from "../components/actor/Actorcard";
import Similar from "../components/similar/Similar";
import apiCalls from '../config/api';
import { useParams } from "react-router-dom";
import {Swiper , SwiperSlide} from 'swiper/react';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const ViewMovie = () => {
  const [error, setError] = useState('');

  const [movieInfo,setMovieInfo] = useState({});

  const [actorsInfo,setActorsInfo] = useState([]);

  const [similar, setSimilar] = useState([]);

  const {id} = useParams();

    useEffect(() => {
      const detail = async () => {
        try {
          const data = await apiCalls.detail(id);
          setMovieInfo(data);
        } catch (error) {
            setError(error.message);
        };
      };  
      detail();
      
      const actorsAndCast = async () => {
        try {
          const data = await apiCalls.actorsAndCast(id);
          setActorsInfo(data.cast);
        } catch (error) {
            setError(error.message);
        }
      }
      actorsAndCast();

      const similar = async () => {
        try {
          const data = await apiCalls.similar(id);
          setSimilar(data.results);
        } catch (error) {
            setError(error.message);
        }
      }
      similar();
  }, [id]);

  const newArr = 
  <Swiper grabCursor={true} spaceBetween={0}slidesPerView={6}loop >
 { actorsInfo.map((el, i) => (
    <SwiperSlide  key={i}>
      <Actorcard actorsobj={el}
      id={el.id}
      name={el.original_name}
      imgLink={el.profile_path}
      charName={el.character}
    />
    </SwiperSlide>
  ))}
</Swiper>
  const newSimilar = similar.map((element, index) => <Similar key={index} similar={element}/>);

  function goBack() {
    window.history.back();
  }
  return (
    <div className="container">
      <Header/>
      <button onClick={goBack} className="back" > Prev</button>
      
      <div className="view-movie-content">
        <div className="view-movie__column">
          <img className='view-movie__img' src={IMAGE_URL + movieInfo.poster_path} alt={movieInfo.title}/>
        </div>
        

        <div className="view-movie-overview">
      { movieInfo.genres &&  movieInfo.genres.map(el => 
        <span key={el.id} className="genres" >
           {el.name} </span>)}
         
        <h1 className="movie-title view-movie__title">{movieInfo.title}</h1>

          <div className="view-movie__sorts">
            <h4 className="movie-sort">
             <mark> Popularity: </mark> {movieInfo.popularity}
            </h4>
            <h4 className="movie-sort">
            <mark> Time:</mark> {movieInfo.runtime + ' minuts'}            
            </h4>
            <h4 className="movie-sort">
            <mark> budget: </mark> {movieInfo.budget  + '  $'}</h4>
              <h4 className="movie-sort"> <mark> Vote count:</mark> {movieInfo.vote_count}
          </h4>
          </div>
          <p className="view-movie__overview">
            {movieInfo.overview}</p>
        
        </div>
      </div>
      <h3 className="movie-title">Actors
      </h3>
      <div className="row">
        {newArr}
      </div>
      <h4 className="movie-title">
        Similar Films</h4>
      <div className="row">
        
        {error ? error : newSimilar}
      </div>
    </div>
  );
};
export default ViewMovie;
import React from 'react';
// import {Link} from 'react-router-dom';

const Similar = (props) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
 
  return (
    <div className="similar-card" >
    <>
    <img
        className="similar-card__img"
        src={IMAGE_URL + props.similar.poster_path}
        alt={props.similar.title}/>
    {/* <Link className='link' to={`/movie/${props.similar.id}`}>   */}
    <a className='link' href={`/movie/${props.similar.id}`}><h3 className="movie-title">{props.similar.title}</h3></a>  
     {/* </Link> */}
      </>
     </div>
  )
}
export default Similar;

import React from 'react'
import {Link} from 'react-router-dom'
// import {useParams} from "react-router-dom";
// import './similar.css'
const Similar = (props) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  // const {id} = useParams();
  return (
    <Link className="similar-card" to={`/movie/${props.similar.id}`}>
      <img
        className="similar-card__img"
        src={IMAGE_URL + props.similar.poster_path}
        alt={props.similar.title}/>
      <h3 className="movie-title">{props.similar.title}</h3>
    </Link>
  )
}
export default Similar;

import {Link} from "react-router-dom";

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const Movie = ({movieobj}) => {
  const url = `/movie/${movieobj.id}`;
  return (
    <div className="movie">
      <img
        className='movie__img'
        src={IMAGE_URL + movieobj.poster_path}
        alt={movieobj.title}/>
      <div className="movie-text">
        <h2 className="movie-title">{movieobj.title  ? movieobj.title : movieobj.name}</h2>
        <span className=" movie-title movie-average">
          {movieobj.vote_average}
        </span>
        <p className="view-link" >  <Link className="link-view-movie" to={url}>  View this movie</Link></p>
      </div>
    </div>
  );
}
export default Movie;
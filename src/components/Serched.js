import React from 'react'

const Serched = (props) => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
       <div className="search">
             <img className="" src={IMAGE_URL + props.searchobj.profile_path} alt={props.searchobj.name}/>
             <p className="navbar__link">{props.searchobj.name}</p>
           <p className="actor__character ">( {props.searchobj.character} )</p>
      </div>
  );
};

export default Serched;
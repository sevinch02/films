import React from 'react';
// import './actor.css'


function ActorImg(props) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500' + props.profile;
  if (props.profile) {
      return <img src={IMAGE_URL} alt=""/>
  } else {
      return <div className="poster"> <img className="poster poster_img" src="/img/no-img.png"  alt=""/></div>
  }
}
const Actorcard = (props) => {
  return (    
       <div className="actorcard">
          <ActorImg profile={props.actorsobj.profile_path} />
          <div className="actorcard-text">
             <h4 className="actor__character">{props.actorsobj.name}</h4>
           <p  className="actor__character ">( {props.actorsobj.character} )</p>
           </div>       
       </div>
  );
};
export default Actorcard;




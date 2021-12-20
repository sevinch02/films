import React from 'react';


// https://ru.wikipedia.org/wiki/

function ActorImg(props) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500' + props.profile;
  if (props.profile) {
      return <img src={IMAGE_URL} alt="actors"/>
  } else {
      return <div className="poster"> <img className="poster poster_img" src="/img/no-img.png"  alt="poster "/></div>
  }
}
const Actorcard = (props) => {
  return (  
    <a target='_blank' className='actor__link' href={`https://en.wikipedia.org/wiki/${props.actorsobj.name}`}>  
       <div className="actorcard">
          <ActorImg profile={props.actorsobj.profile_path} />
          <div className="actorcard-text">
             <h4 className="actor__character">{props.actorsobj.name}</h4>
           <p  className="actor__character ">( {props.actorsobj.character} )</p>
           </div>       
       </div>
   </a>
  )
};
export default Actorcard;
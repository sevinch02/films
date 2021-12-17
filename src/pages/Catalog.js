import React from 'react'
import Header from '../components/Header'
import Genres from '../components/genres/Genres'
import MoviesGrid from '../components/MoviesGrid'
import {useParams} from 'react-router-dom';


const Catalog = () => {
  
  const {genreid} = useParams();
  return (
    <div className="catalog">
        <Header/>
        {/* //row */}
        <div className="wrapper">
          
        {/* <div > */}
        <div style={{position: "sticky", top: 0}} className="sidebar">
          <Genres/>
        </div>
        <div className="content">
           <MoviesGrid genre={genreid}/>
          </div>
        </div>
    </div>
    // </div>
  );
};
export default Catalog;

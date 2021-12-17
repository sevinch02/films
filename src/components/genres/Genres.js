import React from 'react'
import {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import apiCalls from '../../config/api';
// import './ganres.css'

const Genres = () => {    
  const [genresList,setGenresList] = useState([]);
  const [, setError] = useState('');

    useEffect(() => {
      const genres = async () => {
        try {
          const data = await apiCalls.genres();
          setGenresList(data.genres);
          console.log(data.genres)
        } catch (error) {
            setError(error.message);
        };
      };genres();
      },[]);  
      const newArr = genresList.map(el => 
      <div className="genre" 
         key={el.id} > 
         <NavLink className="genre__item"  to={`/catalog/${el.id}`}> {el.name} </NavLink> 
      </div>)
      return (
        <div className="genres"  >
          <h2 className="sidebar__title">Genres</h2>
          <h2 className="genre__item allMovie">All Movies </h2>
         {newArr}
         {console.log(newArr)}
        </div>
    );
};

export default Genres;

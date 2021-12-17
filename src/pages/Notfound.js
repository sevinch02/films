import React from 'react';
// import styled from 'styled-components'
import { Link } from 'react-router-dom';
// import Header from '../components/Header'


const NotFound = () => (
  <div>
      {/* <Header/> */}
    <h1 className="movie-title"> 404 - Not Found! </h1>
    <Link to="/">
      Go Home
    </Link>
  </div>
);

export default NotFound;
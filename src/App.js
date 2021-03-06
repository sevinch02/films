import React from "react";
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ViewMovie from "./pages/ViewMovie";
import Search from './pages/Search' ;
import Catalog from './pages/Catalog';
import Notfound from "./pages/Notfound";
import SkrollToTop from "./components/SkrollToTop";


const App = () => {
  return (
    <div className="wrapper1">
      <BrowserRouter>
        <SkrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={ <ViewMovie/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/catalog/:genreid" element={ <Catalog />} />
          <Route path="/catalog" element={ <Catalog />} />
          <Route path="*" element={<Notfound/>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
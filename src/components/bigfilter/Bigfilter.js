import React from 'react'
import { useState , useEffect } from 'react'
import Select from 'react-select';
import Movie from '../Movie';
import apiCalls from '../../config/api';

const Bigfilter = () => {
 const [year, setYear] = useState('');
 const [genre,setGenre] = useState('');
 const [genresList,setGenresList] = useState([]);
 const [sort, setSort] = useState('');
 const [ ,setTotal] =useState([]);
 const [, setError] = useState([])
  const options = [
    {value: 'popularity',label: 'Popularity'},
    {value: 'original_title', label: 'Title'},

  ];
  const yearoptions = [
    {value: '1960',label: '1960' },
    {value: '1961',label: '1961'}, 
    {value: '1962', label: '1962' }, 
    {value: '1963',  label: '1963'},
    { value: '1964',label: '1964'},
    {value: '1965', label: '1965'},
    { value: '1966',  label: '1966'},
    { value: '1967', label: '1967'},
    { value: '1968', label: '1968'}, 
    {value: '1969',label: '1969'},
    {value: '1970',label: '1970'},
    {value: '1971',label: '1971' },
    { value: '1972',  label: '1972'},
    {value: '1973',label: '1973'},
    { value: '1974',label: '1974'},
    {value: '1975',label: '1975'},
    {value: '1976',label: '1976'},
    {value: '1977',label: '1977'},
    {value: '1978',label: '1978'},
    {value: '1979',label: '1979' },
    { value: '1980', label: '1980' },
    { value: '1981',  label: '1981'  },
    {value: '1982', label: '1982'  },
    {value: '1983',  label: '1983'},
    {  value: '1984', label: '1984'},
    { value: '1985', label: '1985'  },
    { value: '1986',label: '1986'  },
    {  value: '1987',label: '1987'  },
    {  value: '1988', label: '1988'  },
    {value: '1989', label: '1989' },
    { value: '1990', label: '1990'   },
    {value: '1991', label: '1991'  },
    { value: '1992',   label: '1992'  },
    { value: '1993', label: '1993'  },
    {  value: '1994', label: '1994'},
    { value: '1995',  label: '1995'},
    {value: '1996', label: '1996' },
      {value: '1997', label: '1997'  },
      { value: '1998',  label: '1998'  }, 
      {value: '1999',  label: '1999'},
      { value: '2000',label: '2000' },
      {value: '2001', label: '2001'},
      {value: '2002', label: '2002'},
      { value: '2003',  label: '2003' },
      { value: '2004', label: '2004'},
      { value: '2005',label: '2005'}, 
      {value: '2006',label: '2006'},
      { value: '2007', label: '2007'},
      { value: '2008',  label: '2008' },
      {  value: '2009',label: '2009' },
      { value: '2010', label: '2010'},
      { value: '2011', label: '2011'},
      {value: '2012', label: '2012'},
      { value: '2013', label: '2013'},
      {  value: '2014', label: '2014'},
      { value: '2015',   label: '2015'},
      { value: '2016',  label: '2016'},
      {  value: '2017',   label: '2017'},
      { value: '2018',label: '2018'},
      {   value: '2019', label: '2019'},
      {value: '2020',label: '2020' },
      {  value: '2021', label: '2021'  },
  ];
  const handleYearChange = (newValue) => {
    setYear(newValue.value);
    console.log(newValue);
  };
    useEffect(() => {
      const genres = async () => {
        try {
          const data = await apiCalls.genres();
          setGenresList(data.genres);
        } catch (error) {
            setError(error.message);
        };
      };genres();
    
    },[])
  
const handleGenreChange = (newValue) => {
  console.log(newValue);
};

//map 
   const newGenreArr = genresList.map(el => {
   return {
     value : el.id, 
     label: el.name
    }
   })

   const handleSortChange = (newValue) => {
     setSort(newValue.value);
     console.log(newValue)
   }
   const [discover, setDiscover] = useState([]);
   const handleDiscover = () => {
   const discover = async () => {
    try {
        const data = await apiCalls.discover({
          language: "en-US",
          include_adult: false,
          with_genres :genre,
          sort_by: sort,
          page: 1,
          year: year
        });
        setDiscover (data.results);
        setTotal(data.total_results);
        setGenre(data.genres);
    } catch (error) {
        setError(error.message);
    }
  }
  discover();
}
const mappedDiscover = discover.map(el => (<Movie key={el.id} movieobj={el} />))
   return (
     <div>
    <div className="search-card">
       <span className="movie-title">movie genre</span>
      <Select className="search-genres" options={yearoptions}  onChange={handleYearChange} isMulti/>
      
      <span  className="movie-title">movie genre</span>
      <Select className="search-years" options={newGenreArr} onChange={handleGenreChange}/>

      <span className="movie-title">Sort by</span>
      <Select className="search-name" options={options} onChange={handleSortChange}/>  
      <button onClick={handleDiscover} className="search-btn" type="button"> Discover </button>
      </div>
      <div className="search-movies" >
        {mappedDiscover}
     </div>
       <button type="button"  className="search-btn found-btn">Found movies: {discover.length}</button>
  </div>
  );
};
export default Bigfilter;
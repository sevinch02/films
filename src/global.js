export const MY_API_KEY = '3b62cbd3019cef6ea3bcc5ecce56c01c';
export const SINGLE_MOVIE_API = `https://api.themoviedb.org/3/movie/`;
export const API_PARAMS = `?api_key=${MY_API_KEY}&language=en-US`;
export const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const BY_GENRES = `https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false&with_genres=`;
// export const SEARCH = `https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&include_adult=false&with_genres=${ganre}&sort_by=${sort}&page=1&year=${year}&with_cast=`;   

    
export const SORT_BY_VALUES = [
    'popularity.asc', 
    'popularity.desc',
    'release_date.asc',
    'release_date.desc',
    'revenue.asc',
    'revenue.desc', 
    'original_title.asc',
    'original_title.desc',
    'vote_average.asc',
    'vote_average.desc',
    'vote_count.asc', 
    'vote_count.desc'
];
// export const SORT_BY_ALL = [
//     // SEARCH + API_PARAMS +  &sort_by=${sort}&include_adult=false&page=1&year=${year}&with_genres=${genre}
//     https://api.themoviedb.org/3/discover/movie?api_key=${MY_API_KEY}&language=en-US&sort_by=${sort}&include_adult=false&page=1&year=${year}&with_genres=${genre}
// ]
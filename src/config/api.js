import axiosClient from './axiosClient';
const apiCalls = {
    getMovies: (type, params) => {
        return axiosClient.get(`movie/${type}`, {params});
    },
    getVideos: (id) => {
        return axiosClient.get(`movie/${id}/videos`);
    },
    search: (params) => {
        return axiosClient.get(`search/movie`, {params});
    },
    discover: (params) => {
        return axiosClient.get(`discover/movie`, {params});
    },
    detail: (id, params) => {
        return axiosClient.get(`movie/${id}`, {params});
    },
    actorsAndCast: (id) => {
        return axiosClient.get(`movie/${id}/credits`);
    },
    similar: (id) => {
        return axiosClient.get(`movie/${id}/similar`);
    },
    genres: (params) => {
        return axiosClient.get(`genre/movie/list`, {params});
    },
};
export default apiCalls;
import axios from "axios";

const instanceApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
});

export default instanceApi
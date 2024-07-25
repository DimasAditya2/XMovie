import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instanceApi from "../helpers/instanceMovie";
import InstanceAxios from "../helpers/InstanceAxios";
const token = import.meta.env.VITE_MOVIE;

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    data: [],
    detail: [],
    movies: [],
    loading: "",
    query: "",
    title: "",
  },
  reducers: {
    setError: (state) => {
      state.error = "";
    },
    setTitle: (state) => {
      state.title = ''
    },
    fetchMovies: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    },
    fetchById: (state, action) => {
      state.detail = action.payload;
    },
    fetchBulkMovie: (state, action) => {
      state.movies = action.payload;
    },
    resetData: (state) => {
      state.data = [];
    },
    searchMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const {
  fetchMovies,
  fetchById,
  resetData,
  fetchBulkMovie,
  searchMovies,
  setTitle
} = movieSlice.actions;
export default movieSlice.reducer;

export function getMovies() {
  return (dispatch, getState) => {
    InstanceAxios.get("/movies", {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    })
      .then((res) => {
        dispatch(fetchMovies(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function detailMovies(id) {
  return async (dispatch, getState) => {
    try {
      const response = await InstanceAxios.get("/movies/" + id, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      dispatch(fetchById(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function bulkMovie() {
  return async (dispatch, getState) => {
    const token = import.meta.env.VITE_MOVIE;
    try {
      const response = await instanceApi.get("", {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(fetchBulkMovie(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function searchMovie(query) {
  return async (dispatch, getState) => {
    const token = import.meta.env.VITE_MOVIE;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(searchMovies(response.data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addMovie() {
  return async(dispatch, getState) => {
    const data = ''
    try {
      const response = await InstanceAxios.post('/movies',data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      dispatch(fetchMovies(response.data))
    } catch (error) {
      console.log(error);
    }
  }
}
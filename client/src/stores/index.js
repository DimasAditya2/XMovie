import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlicer";

const store = configureStore({
  reducer: movieReducer,
});

export default store;

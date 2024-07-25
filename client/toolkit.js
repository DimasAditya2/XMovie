import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    incremented: (state, action) => {
      console.log(action);
      return {...state, value: state.value + action.payload}
    },
    decremented: (state) => {
      state.value -= 1;
    },
  },
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    stock: 0,
    products: [],
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    age: 0,
  },
});

export const { incremented, decremented } = counterSlice.actions;
export const {} = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

// const example = configureStore({
//   reducer: {counter: counterSlice.reducer, user : userSlice.reducer}
// })

console.log(store.getState())
store.dispatch(incremented(1000))
console.log(store.getState())

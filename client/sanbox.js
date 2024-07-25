import { legacy_createStore as createStore } from "redux";
// ? reducer adalah sebuah function biasa yng mengatur/menentukan perubahan state
// ? state ini tidak boleh langsung diubah oleh reducer, mereturn suatu state atau nilai baru
// ? state => data kita, yang nanti nya akan diakses oleh komponen yang lain
// ? action mentrigger ketika ada nilai/state
let initialState = {
  value: 0,
  users: [],
};

function counterReducer(state = initialState, action) {
  // type ga bisa dicustom
  switch (action.type) {
    case "counter/incremented":
      console.log(action);
      return { value: state.value + action.bebas };
    case "counter/incremented":
      return { value: state.value - 1 };
    case "addUser":
      return { ...state, users : action.payload };
    default:
      return state;
  }
}

const store = createStore(counterReducer);

console.log(store.getState());
 
store.dispatch({ type: "counter/incremented", bebas: 1001 }); // payload bebas custom
store.dispatch({ type: "addUser", payload: [{name: 'dimas'}, {name: 'dwi'}] }); // payload bebas custom

console.log(store.getState());

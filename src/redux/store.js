// import { createStore } from "redux";
// import rootReducer from "./rootReducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// // Root reducer = kho chung quan ly du lieu trong store

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

//  # redux core && redux tool khi init Store

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import toDoSlice from "../components/ToDoList/toDoSlice";

const store = configureStore({
  reducer: {
    // rootReducer
    filters: filterSlice.reducer,
    todoList: toDoSlice.reducer,
  },
});

export default store;

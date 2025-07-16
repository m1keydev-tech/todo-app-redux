// const initState = {
//   filter: {
//     search: "",
//     status: "ALL",
//     priority: [],
//   },
//   todoList: [
//     {
//       id: 1,
//       name: "Javascript",
//       completed: false,
//       priority: "Medium",
//     },
//     {
//       id: 2,
//       name: "ReactJS",
//       completed: false,
//       priority: "High",
//     },
//     {
//       id: 3,
//       name: "HTML",
//       completed: true,
//       priority: "Low",
//     },
//   ],
// };

// ***** Slice rootReducer cho tung features ( filter va toDoList)

// const rootReducer = (state = initState ,action) {
// switch (action.type) {
//   case "todoList/addTodo":
//     return {
//       ...state,
//       // Copy state, thay doi du lieu trong todoList
//       todoList: [...state.todoList, action.payload],
//     };

//   case "filters/searchFilterChange":
//     return {
//       ...state,
//       filter: {
//         ...state,
//         search: action.payload,
//       },
//     };
//   default:
//     return state;
// }
// }

import { combineReducers } from "redux";

import filterReducer from "../components/Filters/filterSlice";
import todoListReducer from "../components/ToDoList/toDoSlice";

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
});

export default rootReducer;

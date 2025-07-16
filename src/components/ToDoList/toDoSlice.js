// const initState = [
//   {
//     id: 1,
//     name: "Javascript",
//     completed: false,
//     priority: "Medium",
//   },
//   {
//     id: 2,
//     name: "ReactJS",
//     completed: false,
//     priority: "High",
//   },
//   {
//     id: 3,
//     name: "HTML",
//     completed: true,
//     priority: "Low",
//   },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

// Co the viet mutation cho cap nhat state vi co thu vien IMMER
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    {
      id: 1,
      name: "Javascript",
      completed: false,
      priority: "Medium",
    },
    {
      id: 2,
      name: "ReactJS",
      completed: false,
      priority: "High",
    },
    {
      id: 3,
      name: "HTML",
      completed: true,
      priority: "Low",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      // filter tra ve array,
      const currentStatus = state.find((todo) => todo.id === action.payload);
      console.log(currentStatus);
      if (currentStatus) {
        currentStatus.completed = !currentStatus.completed;
      }
    },
  },
});

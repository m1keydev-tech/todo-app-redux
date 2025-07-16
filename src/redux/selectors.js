import { createSelector } from "@reduxjs/toolkit";

// Nhiem vu cua selector de lay cac gia tri tu rootReducer gia tri

// export const todoListSelector = (state) => {
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filter.search);
//   });

//   return todosRemaining;
// };
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const searchTextSelector = (state) => state.filters.search;
export const filterPrioritiesSelector = (state) => state.filters.priority;

// Reselect

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    // status => "ALL", 'completed' 'to do '
    return todoList.filter((todo) => {
      if (status === "ALL") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)

        // True luon luon dung de chi kiem tra 2 dieu kien truoc
      );
    });
  }
);

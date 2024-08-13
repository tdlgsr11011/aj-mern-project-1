import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTodos,
  updateTodos,
  createTodo,
  deleteTodo,
} from "../thunk/todoThunk";

const todoSlice = createSlice({
  name: "todoSlice",

  initialState: {
    todos: [],
    status: "idle",
    error: null,
  },

  reducers: {
    setError: (state, action) => {
      state.error = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload.todos;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload.todos;
      })
      .addCase(updateTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        const { todos, error } = action.payload;
        if (error) {
          state.status = "failed";
          state.error = error.message;
        } else {
          state.status = "succeeded";
          state.todos = todos;
        }
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTodo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload.todos;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setError } = todoSlice.actions;
export default todoSlice.reducer;

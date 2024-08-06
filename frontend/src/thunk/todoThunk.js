import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch("http://localhost:5000/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  }
);

export const updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async (payload) => {
    const response = await fetch(`http://localhost:5000/todos/${payload.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload.body),
    });
    const data = await response.json();
    return data;
  }
);

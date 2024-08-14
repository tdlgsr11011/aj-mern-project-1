import { createAsyncThunk } from "@reduxjs/toolkit";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const response = await fetch(`${baseUrl}/todos`, {
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
    const response = await fetch(`${baseUrl}/todos/${payload.id}`, {
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

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (payload) => {
    const response = await fetch(`${baseUrl}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload.body),
    });

    const data = await response.json();
    return data;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (payload) => {
    const response = await fetch(`${baseUrl}/todos/${payload.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  }
);

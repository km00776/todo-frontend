import { PostTodo, TodoProps } from "../types/todoTypes";

// can pass id
export const fetchTodos = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/todos");

    if (!response.ok) {
      throw new Error("Network request was not ok");
    }
    const data = response.json();
    return data;
  } catch (error) {
    throw new Error(
      `Failed to fetch todos: ${error instanceof Error ? error.message : "Unknown Error"}`
    );
  }
};

export const createTodo = async (todo: PostTodo) => {
  try {
    const response = await fetch("http://localhost:8080/api/todos/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Network request was not ok");
    }

    // Await the response.json() since it returns a promise
    const data = await response.json();
    console.log("data", data);
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(
      `Failed to create todo: ${error instanceof Error ? error.message : "Unknown Error"}`
    );
  }
};

export const deleteTodo = async (todoId: string) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/todos/deleteTodo/${todoId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network request was not ok");
    }

    // Await the response.json() since it returns a promise
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(
      `Failed to delete todo: ${error instanceof Error ? error.message : "Unknown Error"}`
    );
  }
};

export const updateTodo = async (todo: TodoProps) => {
  try {
    const response = await fetch(
      `http://localhost:8080/api/todos/updateTodo/${todo.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      }
    );
    if (!response.ok) {
      throw new Error("failed to fetch the update the todo");
    }
    const updatedTodo = await response.json();
    return updatedTodo;
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? `Failed to create todo: ${error.message}`
        : "Unknown PUT Error"
    );
  }
};

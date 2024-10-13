import { TodoProps } from "../types/todoTypes";

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

export const createTodo = async (todo: TodoProps) => {
  console.log("called hre");
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

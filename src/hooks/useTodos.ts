import { TodoProps } from "../types/todoTypes";
import { useCallback, useState } from "react";
import { createTodo, fetchTodos } from "../services/todoService";

export const useTodos = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<TodoProps[]>([]); // Initialize as an empty array
  const [error, setError] = useState<string | null>(null);

  const getTodos = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occured"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const postTodo = useCallback(async (todo: TodoProps) => {
    setLoading(true);
    try {
      const data = await createTodo(todo); // Assuming this returns the created todo
      setTodos((prevTodos) => [...prevTodos, data]); // Add the new todo to the list
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return { getTodos, todos, loading, error, postTodo };
};

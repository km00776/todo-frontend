import { PostTodo, TodoProps } from "../types/todoTypes";
import { useCallback, useState } from "react";
import { createTodo, fetchTodos, deleteTodo } from "../services/todoService";

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

  const postTodo = useCallback(async (todo: PostTodo) => {
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

  const removeTodo = useCallback(async (todoId: string) => {
    setLoading(true);
    try {
      await deleteTodo(todoId); // Assuming this returns the created todo
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId)); // Add the new todo to the list
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  return { getTodos, todos, loading, error, postTodo, removeTodo };
};

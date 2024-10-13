import { useCallback, useState } from "react";
import { User } from "../types/userTypes";
import { fetchUserById, signUpUser } from "../services/userService";
export const useAuth = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User[]>([]); // Initialize as an empty array
  const [error, setError] = useState<string | null>(null);

  //   const getTodos = useCallback(async () => {
  //     setLoading(true);
  //     try {
  //       const data = await fetchTodos();
  //       setTodos(data);
  //     } catch (error) {
  //       setError(
  //         error instanceof Error ? error.message : "An unknown error occured"
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, []);

  const createUser = useCallback(async (user: User) => {
    setLoading(true);
    try {
      const data = await signUpUser(user);
      setUser((prevUsers) => [...prevUsers, data]); // Add the new todo to the list
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  //   const getUserById = useCallback(async (id: string) => {
  //     try {
  //         const user = await fetchUserById(id);
  //     }
  //   }, []);

  //   const postTodo = useCallback(async (todo: Todo) => {
  //     setLoading(true);
  //     try {
  //       const data = await createTodo(todo); // Assuming this returns the created todo
  //       setTodos((prevTodos) => [...prevTodos, data]); // Add the new todo to the list
  //     } catch (error) {
  //       setError(
  //         error instanceof Error ? error.message : "An unknown error occurred"
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   }, []);

  return { createUser, error, loading };
};

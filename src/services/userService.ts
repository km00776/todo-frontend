import { User } from "../types/userTypes";

export const signUpUser = async (user: User) => {
  try {
    const response = await fetch("http://localhost:8080/api/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log("response", response);
    if (!response.ok) {
      throw new Error("Network request was not ok");
    }

    // Await the response.json() since it returns a promise
    const data = await response.json();
    return data; // Return the parsed JSON data
  } catch (error) {
    throw new Error(
      `Failed to create todo: ${error instanceof Error ? error.message : "Unknown Error"}`
    );
  }
};

export const fetchUserById = async (Id: string) => {
  try {
    const response = await fetch(`http://localhost:8080/api/${Id}`);
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

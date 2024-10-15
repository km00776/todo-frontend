import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.css";
import { Todo } from "./components/todo/Todo";
import { useTodos } from "../../hooks/useTodos";
import { FormModal } from "./components/formModal/FormModal.modal";
const Dashboard = () => {
  const { todos, getTodos, removeTodo } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getTodos();
  }, [getTodos, todos]);

  return (
    <div className={styles.container}>
      <div className="flex flex-wrap justify-center ">
        <h1 className={styles.title}>Todo</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded shadow-lg shadow-red-700/400"
        >
          Create new
        </button>
      </div>
      <div className="flex flex-wrap justify-center my-12 grid-cols-4 gap-4 mx-4 ">
        {todos.map((todo) => {
          return (
            <Todo
              title={todo.title}
              description={todo.description}
              key={todo.id}
              onDelete={() => removeTodo(todo.id)}
            />
          );
        })}
      </div>
      {isModalOpen && (
        <FormModal
          isModalOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;

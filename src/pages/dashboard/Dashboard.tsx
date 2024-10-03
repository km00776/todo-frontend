import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  React.useEffect(() => {
    // const fetchFunction = async () => {
    //   const response = await fetch("http://localhost:8080/api/todos");
    //   console.log("res", response.json);
    // };
    // fetchFunction();
  }, []);

  return (
    <div className={styles.container}>
      <div className="flex flex-wrap justify-center ">
        <h1 className={styles.title}>Todo</h1>
        <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded shadow-lg shadow-red-700/400">
          Create new
        </button>
      </div>
      <div className="flex flex-wrap justify-start my-12 grid-cols-4 gap-4 mx-8 ">
        <div className="flex flex-col justify-between outline-4 blur-none my-4 outline-dashed outline-2 outline-black outline-offset-2 rounded-lg bg-white text-white mx-auto p-4 h-[20rem] w-[25rem]">
          <h3 className="flex flex-wrap justify-center text-center font-suse text-black text-lg font-bold">
            Clean dishes
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-auto">
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Edit Todo
            </button>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Delete Todo
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between outline-4 blur-none my-4 outline-dashed outline-2 outline-black outline-offset-2 rounded-lg bg-white text-white mx-auto p-4 h-[20rem] w-[25rem]">
          <h3 className="flex flex-wrap justify-center text-center font-suse text-black text-lg font-bold">
            Clean dishes
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-auto">
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Edit Todo
            </button>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Delete Todo
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between outline-4 blur-none my-4 outline-dashed outline-2 outline-black outline-offset-2 rounded-lg bg-white text-white mx-auto p-4 h-[20rem] w-[25rem]">
          <h3 className="flex flex-wrap justify-center text-center font-suse text-black text-lg font-bold">
            Clean dishes
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-auto">
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Edit Todo
            </button>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Delete Todo
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between outline-4 blur-none my-4 outline-dashed outline-2 outline-black outline-offset-2 rounded-lg bg-white text-white mx-auto p-4 h-[20rem] w-[25rem]">
          <h3 className="flex flex-wrap justify-center text-center font-suse text-black text-lg font-bold">
            Clean dishes
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-auto">
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Edit Todo
            </button>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Delete Todo
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between outline-4 blur-none my-4 outline-dashed outline-2 outline-black outline-offset-2 rounded-lg bg-white text-white mx-auto p-4 h-[20rem] w-[25rem]">
          <h3 className="flex flex-wrap justify-center text-center font-suse text-black text-lg font-bold">
            Clean dishes
          </h3>
          <div className="flex justify-center items-center gap-x-4 mt-auto">
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Edit Todo
            </button>
            <button className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded w-[8rem] shadow-lg shadow-red-700/400">
              Delete Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

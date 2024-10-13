import { TodoProps } from "../../../../types/todoTypes";

export const Todo = ({ title, description }: TodoProps) => {
  return (
    <div className="flex flex-wrap justify-start my-12 grid-cols-4 gap-4 mx-8 ">
      <div className="flex flex-col justify-between outline-4 blur-none my-4 outline-dashed outline-2 outline-black outline-offset-2 rounded-lg bg-white text-white mx-auto p-4 h-[20rem] w-[25rem]">
        <h3 className="flex flex-wrap justify-center text-center font-suse text-black text-lg font-bold">
          {title}
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
  );
};

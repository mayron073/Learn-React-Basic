import { useContext } from "react";
import { Context } from "../context/Context";

function TaskCard({ task }) {
  const { deleteTask } = useContext(Context);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h2 className="text-xl font-bold capitalize">{task.title}</h2>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="bg-red-600 px-1 py-1 rounded-sm mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        delete
      </button>
    </div>
  );
}

export default TaskCard;

import { useState, useContext } from "react";
import {Context} from '../context/Context'

function TaskForm() {
  
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTask } = useContext(Context)


  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description
    });
    setTitle("");
    setdescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Añade tareas</h1>
        <input
          placeholder="Write youre task"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-400 p-3 w-full mb-2"
        />

        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          value={description}
          className="bg-slate-400 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-green-500 p-1 rounded-md hover:bg-green-300">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;

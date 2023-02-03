import { createContext } from "react";
import { tasks as data } from "../task";
import { useState, useEffect } from "react";

export const Context = createContext();

export function ContextProvider(props) {

  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description
      }
    ])
  }

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  
  useEffect(() => {
    setTasks(data);
  }, []);


  return (
    <Context.Provider value={{
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
    }}>
        {props.children}
    </Context.Provider>
  )
}

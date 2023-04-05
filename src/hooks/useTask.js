import {useState} from 'react';

const useTask = () => {
  const [showAdd, setShowAdd] = useState(false);

  const [task, setTask] = useState('');
  //Guardar tasks
  const [tasks, setTasks] = useState(['Tareas pendientes']);

  const addTask = () => {
    //agregar el task al arreglo
    setTasks(currentTasks => [...currentTasks, task]);
    //limpiar el task
    setTask('');
    //quitar input
    setShowAdd(false);
  };

  const deleteTask = index => {
    const temp = [...tasks];
    temp.splice(index, 1);
    setTasks(temp);
  };

  const updateAdd = state => {
    setShowAdd(state);
  };

  const editTask = (index, text) => {
    //mandamos el texto al input
    setShowAdd(true);
    const temp = [...tasks];
    setTask(text)
    temp[index] = 'updated';
    setTasks(temp);
    //setTask(text);
    //editamos la cadena que tiene el imput

    //asígnamos el nuevo valor al indice que la tarea que se editó
  };

  return {
    addTask,
    deleteTask,
    task,
    tasks,
    showAdd,
    updateAdd,
    editTask,
  };
};

export default useTask;

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

  const editTask = (text) => {
    setTask(text);
  };

  const updateTask = (index, item) => {
    //mandamos el texto al input
    setShowAdd(true);
    const temp = [...tasks];
    setTask(item)
    temp[index] = editTask;
    setTasks(temp);
    /*const temp = tasks.map((value, i) => {
      if(i === index) {
        value = 'updated';
        return value;
      } else {
        return value;
      }
    });
    setTasks(temp);
    console.log(index);*/
  };

  return {
    addTask,
    deleteTask,
    task,
    tasks,
    showAdd,
    updateAdd,
    editTask,
    updateTask
  };
};

export default useTask;

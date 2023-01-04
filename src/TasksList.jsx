import { useEffect, useState } from 'react';
import { tasks$ } from './rxjs';
import TasksItem from './TasksItem';

const TasksList = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(()=>{
    tasks$.subscribe((newTasks) => setTasks([ ...newTasks]));
  },[]);
  return (
    <div>
      {tasks.map((task) =>
       
      <TasksItem 
        key= {task.id}
        task ={task}
      />)}
    </div>
  );
}

export default TasksList;


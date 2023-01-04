import React from 'react';
import { deleteTask, toggleTask } from './rxjs';

const TasksItem = (props) =>{
  const { task} = props
  
  return (
    <div>
      <label>
        <input type='checkbox' checked={task.done} onChange={() => toggleTask(task.id)}/>
      
      {task.text}
        <span>
          <button onClick={() => deleteTask(task.id)} style={{padding: "5px", marginLeft: "2px"}}>x</button>
        </span>
      </label>
    </div>
  );
} 

export default TasksItem;

import { useEffect, useState } from "react";
import { tasks$ } from "./rxjs";


const TaskHeader = (props) => {
  const [undoneTasks, setundoneTasks] = useState((0));

  useEffect(()=>{
    tasks$.subscribe((newTasks) => {
      setundoneTasks(newTasks.filter(t=> t.done !==false).length);  
    });
  },[]);

  return (
    <div>
      <h1>React Tasks Todo </h1>
      <p>Tasks Todo :&nbsp;
      <strong style={{background: "darkslateblue"}}>{undoneTasks}</strong>
      </p>
    </div>
  );
}

export default TaskHeader;

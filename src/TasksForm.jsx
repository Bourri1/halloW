import { useState } from 'react';
import { addTask } from './rxjs';

const TasksForm = (props) => {
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    addTask(text);
    setText("");
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='text' placeholder=' addTask' value={text} onChange={(e)=> setText(e.target.value)} />
      </form>
      
    </div>
  );
}

export default TasksForm;

import './App.css';
import TaskHeader from './TaskHeader';
import TasksForm from './TasksForm';
import TasksList from './TasksList';

function App() {


  return (
    <div className='App'>
      <article>
        <TaskHeader/>
        <TasksList/>
        <footer>
          <TasksForm/>
        </footer>
      </article>
    </div>
  );
}

export default App;

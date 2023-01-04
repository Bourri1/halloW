import { BehaviorSubject } from "rxjs";

const tasks = [
  {id: 1, text: " Aller faire les courses ", done: false},
  {id: 2, text: " Ménages ! ", done: true},
  {id: 3, text: " Après un déménagement ", done: false},
];

export const tasks$ = new BehaviorSubject(tasks);

export const addTask = (text) => {
  tasks.push({
    id: Date.now(),
    done: false,
    text,
  });
  tasks$.next(tasks);
}

export const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id === id);
  if (index){
    tasks.splice(index, 1)
    tasks$.next(tasks);
  }
}

export const toggleTask = (id) => {
  const task = tasks.find(t => t.id === id);
  if(task) {
    task.done = !task.done

    tasks$.next(tasks);
  }
}
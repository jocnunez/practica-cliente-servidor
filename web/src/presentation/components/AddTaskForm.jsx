
import { createSignal } from 'solid-js';
import { AddTask } from '../../domain/usecases/AddTask';
import './AddTaskForm.css';

const AddTaskForm = () => {
  const [newTaskTitle, setNewTaskTitle] = createSignal('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    await new AddTask().execute(newTaskTitle());
    setNewTaskTitle(''); 
  };

  return (
    <form onSubmit={handleSubmit} class="add-task-form">
      <input 
        type="text" 
        value={newTaskTitle()} 
        onInput={(e) => setNewTaskTitle(e.currentTarget.value)} 
        placeholder="Add a task..." 
        class="task-input"
      />
      <button type="submit" class="add-task-button">Add</button>
    </form>
  );
};

export default AddTaskForm;
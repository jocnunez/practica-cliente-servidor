import { createSignal } from 'solid-js';
import './TaskItem.css';

const TaskItem = (props) => {
  const [completed, setCompleted] = createSignal(props.task.completed);

  const toggleCompleted = () => {
    setCompleted(!completed());
  };

  return (
    <li class="task-item">
      <input 
        type="checkbox" 
        checked={completed()}
        onChange={toggleCompleted} 
        class="task-checkbox"
      />
      <span class={completed() ? 'completed' : ''}>{props.task.title}</span>
    </li>
  );
};

export default TaskItem;
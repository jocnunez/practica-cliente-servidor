import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = (props) => {

	return (
    	<ul class="task-list">
      		{props.tasks && props.tasks.map(task => (
        		<TaskItem key={task.id} task={task} />
		    ))}
    	</ul>
	);
};

export default TaskList;
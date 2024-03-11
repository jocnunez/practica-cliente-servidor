import { createSignal, createEffect } from 'solid-js';
import { GetTasks } from '../domain/usecases/GetTasks';
import AddTaskForm from './components/AddTaskForm'; 
import TaskList from './components/TaskList';
import './App.css';

const App = () => {
	const [tasks, setTasks] = createSignal([]);

	// createEffect(async () => { 
    // 	const fetchedTasks = await new GetTasks().execute();
    //  	setTasks(fetchedTasks);
	// }, []);

	return (
    	<div class='app-container'>
       		<h1>Mis tareas</h1>
       		<AddTaskForm />
			<TaskList tasks={tasks} />
     	</div>
   );
};

export default App;
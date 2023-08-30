import { useContext, useEffect } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import { TodoContext } from './Context';

const App = () => {
	const { addTodo, changeHandler, newTodoText } = useContext(TodoContext);

	return (
		<div className="flex flex-col items-center justify-end mx-auto">
			<h1 className="my-8 text-6xl font-bold text-center text-white">Todo List</h1>
			<div className="flex justify-center items-center min-h-[20vh] gap-5 w-20 sm:w-[450px] ">
				<input
					placeholder="Add your text"
					type="text"
					className="border-none outline-none w-[360px] bg-slate-500 p-3 rounded-xl text-slate-100 font-sans text-[20px]"
					onChange={changeHandler}
					value={newTodoText}
				/>
				<button onClick={addTodo} className="px-4 py-3 text-white border-2 border-none rounded-md hover:bg-slate-600 bg-slate-900">
					Add
				</button>
			</div>
			<div className="flex flex-col  mx-auto w-[350px] sm:w-[450px]">
				<TodoList />
			</div>
		</div>
	);
};

export default App;

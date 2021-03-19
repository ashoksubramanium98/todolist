import React, {Suspense} from 'react';
import TodoContextProvider from "./Components/TodoContextProvider";
import Todo from "./Components/Todo";
import AddTodo from "./Components/AddTodo";

const App = () => (
    <>
    	<Suspense fallback={<p>Loading...</p>}>
			<TodoContextProvider>
				<AddTodo />
				<Todo />
			</TodoContextProvider>
		</Suspense>
    </>
);

export default App;
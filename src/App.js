import React, {Suspense} from 'react';
import TodoContextProvider from "./Components/TodoContextProvider";
import Todo from "./Components";

const App = () => (
    <>
    	<Suspense fallback={<p>Loading...</p>}>
			<TodoContextProvider>
				<Todo />
			</TodoContextProvider>
		</Suspense>
    </>
);

export default App;
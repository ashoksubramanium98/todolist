import React, {Suspense} from 'react';
import ErrorBoundary from './Components/ErrorBoundary';
import TodoContextProvider from "./Components/TodoContextProvider";
import Todo from "./Components";

const App = () => (
    <>
    	<Suspense fallback={<p>Loading...</p>}>
			<ErrorBoundary>
				<TodoContextProvider>
					<Todo />
				</TodoContextProvider>
			</ErrorBoundary>
		</Suspense>
    </>
);

export default App;
import React, {Suspense} from 'react';
import MenuContextProvider from "./Components/MenuContextProvider";
import Menu from "./Components/Menu";
import AddTodo from "./Components/AddTodo";
import './Components/index.css';

const App = () => (
    <>
    	<Suspense fallback={<p>Loading...</p>}>
			<MenuContextProvider>
				<AddTodo />
				<Menu />
			</MenuContextProvider>
		</Suspense>
    </>
);

export default App;
import { useState } from "react";
import Window from "./components/Window";
import Menu from "./components/Menu";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div >
			<Menu/>
			<div className="flex flex-col justify-center items-center">
			<Window type={"function"} />
			<Window type={"coordonnate"} />
			</div>
			<div className="flex flex-row justify-center items-start">
			<Window type={"experiences"}/>
			<div className="flex flex-col">
			<Window type={"formations"}/>
			<Window type={"competences"}/>
			</div>

			</div>

		</div>
	);
}

export default App;

import { useState } from "react";
import Window from "./components/Window";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Window type={"function"} />
			<Window type={"coordonnate"} />
		</>
	);
}

export default App;

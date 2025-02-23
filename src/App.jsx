import { useState } from "react";
import Window from "./components/Window";
import Menu from "./components/Menu";

function App() {
	const [count, setCount] = useState(0);
	const [displayExperience, setDisplayExperience] = useState(true);
	const [displayFormation, setDisplayFormation] = useState(true);
	const [displayFunction, setDisplayFunction] = useState(true);
	const [displayPDF, setDisplayPDF] = useState(true);
	const [displayPrinter, setDisplayPrinter] = useState(true);
	const [displayProfile, setDisplayProfile] = useState(true);
	const [displaySkill, setDisplaySkill] = useState(true);
	const [displayWrite, setDisplayWrite] = useState(true);

	const handleDisplayExperience = () => {
		setDisplayExperience((prev) => !prev);
	};
	const handleDisplayFormation = () => {
		setDisplayFormation((prev) => !prev);
	};
	const handleDisplayFunction = () => {
		setDisplayFunction((prev) => !prev);
	};
	const handleDisplayPDF = () => {
		setDisplayPDF((prev) => !prev);
	};
	const handleDisplayPrinter = () => {
		setDisplayPrinter((prev) => !prev);
	};
	const handleDisplayProfile = () => {
		setDisplayProfile((prev) => !prev);
	};
	const handleDisplaySkill = () => {
		setDisplaySkill((prev) => !prev);
	};
	const handleDisplayWrite = () => {
		setDisplayWrite((prev) => !prev);
	};
	const [close, setClose] = useState(true);

	return (
		<>
			<div>
				<Menu
					handleDisplayExperience={handleDisplayExperience}
					handleDisplayFormation={handleDisplayFormation}
					handleDisplayFunction={handleDisplayFunction}
					handleDisplayPDF={handleDisplayPDF}
					handleDisplayPrinter={handleDisplayPrinter}
					handleDisplayProfile={handleDisplayProfile}
					handleDisplaySkill={handleDisplaySkill}
					handleDisplayWrite={handleDisplayWrite}
				/>
			</div>

			<div className="ml-35 mr-10 mt-10 grid grid-cols-2 gap-5 grid-rows-[1fr, 3fr, auto, auto, auto]">
				<div className={`${displayFunction ? "block" : "hidden"} col-start-1 col-end-3 row-start-1 row-end-2`}>
					<Window type={"function"} />
				</div>
				<div className={`${displayProfile ? "block" : "hidden"} col-start-1 col-end-3 row-start-2 row-end-3`}>
					<Window type={"coordonnate"} />
				</div>

				<div className={`${displayExperience ? "block" : "hidden"} col-start-1 col-end-2 row-start-3 row-end-6`}>
					<Window type={"experiences"} />
				</div>

				<div className={`${displayFormation ? "block" : "hidden"} col-start-2 col-end-3 row-start-3 row-end-4`}>
					<Window type={"formations"} />
				</div>
				<div className={`${displaySkill ? "block" : "hidden"} col-start-2 col-end-3 row-start-4 row-end-5`}>
					<Window type={"competences"} />
				</div>
			</div>
		</>
	);
}

export default App;

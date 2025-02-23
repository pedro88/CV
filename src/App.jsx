import { useState } from "react";
import Window from "./components/Window";
import Menu from "./components/Menu";

function App() {
	const [count, setCount] = useState(0);
	const [displayExperience, setDisplayExperience] = useState(true)
	const [displayFormation, setDisplayFormation] = useState(true)
	const [displayFunction, setDisplayFunction] = useState(true)
	const [displayPDF, setDisplayPDF] = useState(true)
	const [displayPrinter, setDisplayPrinter] = useState(true)
	const [displayProfile, setDisplayProfile] = useState(true)
	const [displaySkill, setDisplaySkill] = useState(true)
	const [displayWrite, setDisplayWrite] = useState(true)

const handleDisplayExperience = () => {
	setDisplayExperience((prev) => !prev)
}
const handleDisplayFormation = () => {
	setDisplayFormation((prev) => !prev)
}
const handleDisplayFunction = () => {
	setDisplayFunction((prev) => !prev)
}
const handleDisplayPDF = () => {
	setDisplayPDF((prev) => !prev)
}
const handleDisplayPrinter = () => {
	setDisplayPrinter((prev) => !prev)
}
const handleDisplayProfile = () => {
	setDisplayProfile((prev) => !prev)
}
const handleDisplaySkill = () => {
	setDisplaySkill((prev) => !prev)
}
const handleDisplayWrite = () => {
	setDisplayWrite((prev) => !prev)
}
const [close, setClose] = useState(true)


	return (
		<div >
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
			<div className="flex flex-col justify-center items-center">
				<div className={`${displayFunction ? "block" : "hidden"}`}>
				<Window type={"function"} />
				</div>
				<div className={`${displayProfile ? "block" : "hidden"}`}>
				<Window type={"coordonnate"} />
				</div>
			</div>
			<div className="flex flex-row justify-center items-start">
				<div className={`${displayExperience ? "block" : "hidden"}`}>
				<Window type={"experiences"} />
				</div>
				<div className="flex flex-col">
					<div className={`${displayFormation ? "block" : "hidden"}`}>
					<Window type={"formations"} />
					</div>
					<div className={`${displaySkill ? "block" : "hidden"}`}>
					<Window type={"competences"} />
					</div>

				</div>

			</div>

		</div>
	);
}

export default App;

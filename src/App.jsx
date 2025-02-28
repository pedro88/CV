import { useState } from "react";
import Window from "./components/Window";
import Menu from "./components/Menu";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import React from "react";
import WindowShadow from "./components/WindowShadow";

function App() {
	const gridSize = 50;
	const printRef = React.useRef();
	
	//EXPERIENCE
	const [displayExperience, setDisplayExperience] = useState(true);
	const [indexExperience, setIndexExperience] = useState(10);
	const [positionExperience, setPositionExperience] = useState({
		x: 0,
		y: 0,
	});
	const handleDisplayExperience = () => {
		setDisplayExperience((prev) => !prev);
	};
	const snapToGridExperience = (x, y) => {
		const snappedX = Math.round(x / gridSize) * gridSize;
		const snappedY = Math.round(y / gridSize) * gridSize;
		return { x: snappedX, y: snappedY };
	};
	const handleDragExperience = (e, data) => {
		const { x, y } = snapToGridExperience(data.x, data.y);
		setPositionExperience({ x, y });
	};
	const handleIndexExperience = () => {
		if (
			indexExperience <= indexFormation ||
			indexExperience <= indexFunction ||
			indexExperience <= indexProfile ||
			indexExperience <= indexSkill
		) {
			setIndexExperience((prev) => {
				let newIndex = prev + 10;
				while (
					newIndex <= indexFormation ||
					newIndex <= indexFunction ||
					newIndex <= indexProfile ||
					newIndex <= indexSkill
				) {
					newIndex++;
				}
				return newIndex;
			});
		}
	};
	const [reduceExperience, setReduceExperience] = useState(false);
	const handleReduceExperience = () => {
		setReduceExperience((prev) => !prev);
	};
	
	//FORMATION
	const [displayFormation, setDisplayFormation] = useState(true);
	const [indexFormation, setIndexFormation] = useState(10);
	const [positionFormation, setPositionFormation] = useState({ x: 0, y: 0 });
	const handleDisplayFormation = () => {
		setDisplayFormation((prev) => !prev);
	};
	const snapToGridFormation = (x, y) => {
		const snappedX = Math.round(x / gridSize) * gridSize;
		const snappedY = Math.round(y / gridSize) * gridSize;
		return { x: snappedX, y: snappedY };
	};
	const handleDragFormation = (e, data) => {
		const { x, y } = snapToGridFormation(data.x, data.y);
		setPositionFormation({ x, y });
	};
	const handleIndexFormation = () => {
		if (
			indexFormation <= indexExperience ||
			indexFormation <= indexFunction ||
			indexFormation <= indexProfile ||
			indexFormation <= indexSkill
		) {
			setIndexFormation((prev) => {
				let newIndex = prev + 10;
				while (
					newIndex <= indexExperience ||
					newIndex <= indexFunction ||
					newIndex <= indexProfile ||
					newIndex <= indexSkill
				) {
					newIndex++;
				}
				return newIndex;
			});
		}
	};
	const [reduceFormation, setReduceFormation] = useState(false);
	const handleReduceFormation = () => {
		setReduceFormation((prev) => !prev);
	};
	
	//FUNCTION
	const [displayFunction, setDisplayFunction] = useState(true);
	const [indexFunction, setIndexFunction] = useState(10);
	const [positionFunction, setPositionFunction] = useState({ x: 0, y: 0 });
	const handleDisplayFunction = () => {
		setDisplayFunction((prev) => !prev);
	};
	const snapToGridFunction = (x, y) => {
		const snappedX = Math.round(x / gridSize) * gridSize;
		const snappedY = Math.round(y / gridSize) * gridSize;
		return { x: snappedX, y: snappedY };
	};
	const handleDragFunction = (e, data) => {
		const { x, y } = snapToGridFunction(data.x, data.y);
		setPositionFunction({ x, y });
	};
	const handleIndexFunction = () => {
		if (
			indexFunction <= indexFormation ||
			indexFunction <= indexExperience ||
			indexFunction <= indexProfile ||
			indexFunction <= indexSkill
		) {
			setIndexFunction((prev) => {
				let newIndex = prev + 10;
				while (
					newIndex <= indexFormation ||
					newIndex <= indexExperience ||
					newIndex <= indexProfile ||
					newIndex <= indexSkill
				) {
					newIndex++;
				}
				return newIndex;
			});
		}
	};
	
	//PROFILE
	const [displayProfile, setDisplayProfile] = useState(true);
	const [indexProfile, setIndexProfile] = useState(10);
	const [positionProfile, setPositionProfile] = useState({ x: 0, y: 0 });
	const handleDisplayProfile = () => {
		setDisplayProfile((prev) => !prev);
	};
	const snapToGridProfile = (x, y) => {
		const snappedX = Math.round(x / gridSize) * gridSize;
		const snappedY = Math.round(y / gridSize) * gridSize;
		return { x: snappedX, y: snappedY };
	};
	const handleDragProfile = (e, data) => {
		const { x, y } = snapToGridProfile(data.x, data.y);
		setPositionProfile({ x, y });
	};
	const handleIndexProfile = () => {
		if (
			indexProfile <= indexFormation ||
			indexProfile <= indexFunction ||
			indexProfile <= indexExperience ||
			indexProfile <= indexSkill
		) {
			setIndexProfile((prev) => {
				let newIndex = prev + 10;
				while (
					newIndex <= indexFormation ||
					newIndex <= indexFunction ||
					newIndex <= indexExperience ||
					newIndex <= indexSkill
				) {
					newIndex++;
				}
				return newIndex;
			});
		}
	};	
	const [reduceProfile, setReduceProfile] = useState(false);
	const handleReduceProfile = () => {
		setReduceProfile((prev) => !prev);
	};
	//SKILL
	const [displaySkill, setDisplaySkill] = useState(true);
	const [indexSkill, setIndexSkill] = useState(10);
	const [positionSkill, setPositionSkill] = useState({ x: 0, y: 0 });
	const handleDisplaySkill = () => {
		setDisplaySkill((prev) => !prev);
	};
	
	const snapToGridSkill = (x, y) => {
		const snappedX = Math.round(x / gridSize) * gridSize;
		const snappedY = Math.round(y / gridSize) * gridSize;
		return { x: snappedX, y: snappedY };
	};
	const handleDragSkill = (e, data) => {
		const { x, y } = snapToGridSkill(data.x, data.y);
		setPositionSkill({ x, y });
	};
	
	const handleIndexSkill = () => {
		if (
			indexSkill <= indexFormation ||
			indexSkill <= indexFunction ||
			indexSkill <= indexProfile ||
			indexSkill <= indexExperience
		) {
			setIndexSkill((prev) => {
				let newIndex = prev + 10;
				while (
					newIndex <= indexFormation ||
					newIndex <= indexFunction ||
					newIndex <= indexProfile ||
					newIndex <= indexExperience
				) {
					newIndex++;
				}
				return newIndex;
			});
		}
	};
	const [reduceSkill, setReduceSkill] = useState(false);
	const handleReduceSkill = () => {
		setReduceSkill((prev) => !prev);
	};

		//PROJECT
		const [displayProject, setDisplayProject] = useState(true);
		const [indexProject, setIndexProject] = useState(10);
		const [positionProject, setPositionProject] = useState({ x: 0, y: 0 });
		const handleDisplayProject = () => {
			setDisplayProject((prev) => !prev);
		};
		
		const snapToGridProject = (x, y) => {
			const snappedX = Math.round(x / gridSize) * gridSize;
			const snappedY = Math.round(y / gridSize) * gridSize;
			return { x: snappedX, y: snappedY };
		};
		const handleDragProject = (e, data) => {
			const { x, y } = snapToGridProject(data.x, data.y);
			setPositionProject({ x, y });
		};
		
		const handleIndexProject = () => {
			if (
				indexProject <= indexFormation ||
				indexProject <= indexFunction ||
				indexProject <= indexProfile ||
				indexProject <= indexExperience
			) {
				setIndexSkill((prev) => {
					let newIndex = prev + 10;
					while (
						newIndex <= indexFormation ||
						newIndex <= indexFunction ||
						newIndex <= indexProfile ||
						newIndex <= indexExperience
					) {
						newIndex++;
					}
					return newIndex;
				});
			}
		};
		const [reduceProject, setReduceProject] = useState(false);
		const handleReduceProject = () => {
			setReduceProject((prev) => !prev);
		};
	
	//PDF
	const handleDisplayPDF = async () => {
		const element = printRef.current;
		const canvas = await html2canvas(element);
		const data = canvas.toDataURL("image/png");
		
		const pdf = new jsPDF("p", "mm", "a4");
		const imgProperties = pdf.getImageProperties(data);
		const pdfWidth = pdf.internal.pageSize.getWidth() - 20;
		const pdfHeight =
		(imgProperties.height * pdfWidth) / imgProperties.width;
		
		const offsetX = (pdf.internal.pageSize.getWidth() - pdfWidth) / 2;
		pdf.addImage(data, "PNG", offsetX, 5, pdfWidth, pdfHeight);
		pdf.save("print.pdf");
	};
	
	//PRINTER
	const handleDisplayPrinter = () => {
		setDisplayPrinter((prev) => !prev);
	};
	
	
	//WRITE
	const handleDisplayWrite = () => {
		setDisplayWrite((prev) => !prev);
	};
	
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
					handleDisplayProject={handleDisplayProject}
				/>
			</div>

			<div
				ref={printRef}
				className="mainDisplay"
			>
				<Draggable
					position={positionFunction}
					onStop={handleDragFunction}
					grid={[gridSize, gridSize]}
				>
					<div
						style={{ zIndex: indexFunction }}
						className="relative col-span-2 row-span-1 w-full min-w-0 "
					>
						<div
							className={` absolute w-full min-w-0 top-3 left-3 -z-10 ${
								displayFunction ? "block" : "hidden"
							}`}
						>
							<WindowShadow type={"function"}></WindowShadow>
						</div>

						<div
							className={` ${
								displayFunction ? "block" : "hidden"
							}`}
							onClick={handleIndexFunction}
						>
							<Window
								type={"function"}
								handleClose={handleDisplayFunction}
							/>
						</div>
					</div>
				</Draggable>
				<Draggable
					position={positionProfile}
					onStop={handleDragProfile}
					grid={[gridSize, gridSize]}
				>
					<div
						style={{ zIndex: indexProfile }}
						className="relative col-span-2 row-span-1 w-full min-w-0"
					>
						<div
							className={` absolute w-full min-w-0 top-3 left-3 -z-10 ${
								displayProfile ? "block" : "hidden"
							}`}
						>
							<WindowShadow
								type={"coordonnate"}
								handleReduce={handleReduceProfile}
								reduce={reduceProfile}
							></WindowShadow>
						</div>

						<div
							className={` ${displayProfile ? "block" : "hidden"} 
					`}
							onClick={handleIndexProfile}
						>
							<Window
								type={"coordonnate"}
								handleClose={handleDisplayProfile}
								handleReduce={handleReduceProfile}
								reduce={reduceProfile}
							/>
						</div>
					</div>
				</Draggable>
				<Draggable
					position={positionExperience}
					onStop={handleDragExperience}
					grid={[gridSize, gridSize]}
				>
					<div
						style={{ zIndex: indexExperience }}
						className="relative col-span-1 row-span-3 w-full min-w-0"
					>
						<div
							className={` absolute w-full min-w-0 top-3 left-3 -z-10 ${
								displayExperience ? "block" : "hidden"
							}`}
						>
							<WindowShadow
								type={"experiences"}
								handleReduce={handleReduceExperience}
								reduce={reduceExperience}
							></WindowShadow>
						</div>

						<div
							className={` ${
								displayExperience ? "block" : "hidden"
							} 
					`}
							onClick={handleIndexExperience}
						>
							<Window
								type={"experiences"}
								handleClose={handleDisplayExperience}
								handleReduce={handleReduceExperience}
								reduce={reduceExperience}
							/>
						</div>
					</div>
				</Draggable>
				<Draggable
					position={positionFormation}
					onStop={handleDragFormation}
					grid={[gridSize, gridSize]}
				>
					<div
						style={{ zIndex: indexFormation }}
						className="relative col-span-1 row-span-1 w-full min-w-0"
					>
						<div
							className={` absolute w-full min-w-0 top-3 left-3 -z-10 ${
								displayFormation ? "block" : "hidden"
							}`}
						>
							<WindowShadow
								type={"formations"}
								handleReduce={handleReduceFormation}
								reduce={reduceFormation}
							></WindowShadow>
						</div>
						<div
							className={` ${
								displayFormation ? "block" : "hidden"
							} 
					`}
							onClick={handleIndexFormation}
						>
							<Window
								type={"formations"}
								handleClose={handleDisplayFormation}
								handleReduce={handleReduceFormation}
								reduce={reduceFormation}
							/>
						</div>
					</div>
				</Draggable>
				<Draggable
					position={positionSkill}
					onStop={handleDragSkill}
					grid={[gridSize, gridSize]}
				>
					<div
						style={{ zIndex: indexSkill }}
						className="relative col-span-1 row-span-1 w-full min-w-0"
					>
						<div
							className={` absolute w-full min-w-0 top-3 left-3 -z-10 ${
								displaySkill ? "block" : "hidden"
							}`}
						>
							<WindowShadow
								type={"competences"}
								handleReduce={handleReduceSkill}
								reduce={reduceSkill}
							></WindowShadow>
						</div>

						<div
							className={` ${displaySkill ? "block" : "hidden"} 
					`}
							onClick={handleIndexSkill}
						>
							<Window
								type={"competences"}
								handleClose={handleDisplaySkill}
								handleReduce={handleReduceSkill}
								reduce={reduceSkill}
							/>
						</div>
					</div>
				</Draggable>

				<Draggable
					position={positionProject}
					onStop={handleDragProject}
					grid={[gridSize, gridSize]}
				>
					<div
						style={{ zIndex: indexProject }}
						className="relative col-span-1 row-span-1 w-full min-w-0"
					>
						<div
							className={` absolute w-full min-w-0 top-3 left-3 -z-10 ${
								displayProject ? "block" : "hidden"
							}`}
						>
							<WindowShadow
								type={"projects"}
								handleReduce={handleReduceProject}
								reduce={reduceProject}
							></WindowShadow>
						</div>

						<div
							className={` ${displayProject ? "block" : "hidden"} 
					`}
							onClick={handleIndexProject}
						>
							<Window
								type={"projects"}
								handleClose={handleDisplayProject}
								handleReduce={handleReduceProject}
								reduce={reduceProject}
							/>
						</div>
					</div>
				</Draggable>

			</div>
		</>
	);
}

export default App;

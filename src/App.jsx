import { useState } from "react";
import Window from "./components/Window";
import Menu from "./components/Menu";
import Draggable from "react-draggable";
import html2canvas from "html2canvas";
import {jsPDF} from 'jspdf'
import React from "react";
import domtoimage from 'dom-to-image';
import WindowShadow from "./components/WindowShadow";

function App() {
	const gridSize = 50
	const printRef = React.useRef()
	
	
	//EXPERIENCE
	const [displayExperience, setDisplayExperience] = useState(true);
	const [indexExperience, setIndexExperience] = useState(10)
	const [positionExperience, setPositionExperience] = useState({ x : 0, y : 0})
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
	}
	
	//FORMATION
	const [displayFormation, setDisplayFormation] = useState(true);
	const [indexFormation, setIndexFormation] = useState(10)
	const [positionFormation, setPositionFormation] = useState({ x : 0, y : 0})
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
	}
	
	//FUNCTION
	const [displayFunction, setDisplayFunction] = useState(true);
	const [indexFunction, setIndexFunction] = useState(10)
	const [positionFunction, setPositionFunction] = useState({ x : 0, y : 0})
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
	}
	
	//PROFILE
	const [displayProfile, setDisplayProfile] = useState(true);
	const [indexProfile, setIndexProfile] = useState(10)
	const [positionProfile, setPositionProfile] = useState({ x : 0, y : 0})
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
	}
	
	//SKILL
	const [displaySkill, setDisplaySkill] = useState(true);
	const [indexSkill, setIndexSkill] = useState(10)
	const [positionSkill, setPositionSkill] = useState({ x : 0, y : 0})
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
	}
	
	//WRITE
	const handleDisplayWrite = () => {
		setDisplayWrite((prev) => !prev);
	};
	
	//PDF
	const handleDisplayPDF = async () => {
		const element = printRef.current;
		const canvas = await html2canvas(element);
		const data = canvas.toDataURL('image/png');
	  
		const pdf = new jsPDF('p', 'mm', 'a4'); 
		const imgProperties = pdf.getImageProperties(data);
		const pdfWidth = pdf.internal.pageSize.getWidth() - 20; 
		const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
	  
		const offsetX = (pdf.internal.pageSize.getWidth() - pdfWidth) / 2; 
		pdf.addImage(data, 'PNG', offsetX, 10, pdfWidth, pdfHeight);
		pdf.save('print.pdf');
	  };
	
	//PRINTER
	const handleDisplayPrinter = () => {
		setDisplayPrinter((prev) => !prev);
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
				/>
			</div>

			<div ref={printRef} className="ml-35 mr-10 mt-10 grid grid-cols-(repeat(auto-fill, 100px)) gap-20 grid-rows-(repeat(auto-fill, 100px))">
				<Draggable
				position={positionFunction}
				onStop={handleDragFunction}
				grid={[gridSize, gridSize]}
				>
					<div
					style={{zIndex: indexFunction}}
						className={`${
							displayFunction ? "block" : "hidden"
						} col-start-1 col-end-3 row-start-1 row-end-2
						`}
						onClick={handleIndexFunction}
					>
						<Window type={"function"}
						handleClose={handleDisplayFunction}/>
					</div>
				</Draggable>
				<Draggable
				position={positionProfile}
				onStop={handleDragProfile}
				grid={[gridSize, gridSize]}
				>
					<div
					style={{zIndex: indexProfile}}
						className={`${
							displayProfile ? "block" : "hidden"
						} col-start-1 col-end-3 row-start-2 row-end-3
						relative`}
						onClick={handleIndexProfile}
					>
						<Window type={"coordonnate"}
						handleClose={handleDisplayProfile} />
					</div>
				</Draggable>
				<Draggable
				position={positionExperience}
				onStop={handleDragExperience}
				grid={[gridSize, gridSize]}
				>
					<div
						style={{zIndex: indexExperience}}
						className={`${
							displayExperience ? "block" : "hidden"
						} col-start-1 col-end-2 row-start-3 row-end-6
						`}
						onClick={handleIndexExperience}
					>
						<Window type={"experiences"}
						handleClose={handleDisplayExperience} />
					</div>
				</Draggable>
				<Draggable
				position={positionFormation}
				onStop={handleDragFormation}
				grid={[gridSize, gridSize]}
				>
					<div
					style={{zIndex: indexFormation}}
						className={`${
							displayFormation ? "block" : "hidden"
						} col-start-2 col-end-3 row-start-3 row-end-4
						`}
						onClick={handleIndexFormation}
					>
						<Window type={"formations"}
						handleClose={handleDisplayFormation} />
					</div>
				</Draggable>
				<Draggable
				position={positionSkill}
				onStop={handleDragSkill}
				grid={[gridSize, gridSize]}
				>
					<div
					style={{zIndex: indexSkill}}
						className={`${
							displaySkill ? "block" : "hidden"
						} col-start-2 col-end-3 row-start-4 row-end-5
						`}
						onClick={handleIndexSkill}
					>
						<Window type={"competences"}
						handleClose={handleDisplaySkill} />
					</div>
				</Draggable>
			</div>
		</>
	);
}

export default App;

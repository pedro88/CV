import React, { useState } from "react";
import WindowContent from "./WindowContent";
import data from "../data/data.js";

const Window = ({ type, handleClose }) => {
	const [reduce, setReduce] = useState(false);
	const [close, setClose] = useState(false);

	const handleReduce = () => {
		setReduce((prev) => !prev);
		console.log(!reduce);
	};



	return (
		<>
			{/* <div className='display'> */}

			<div
				className={`border-solid border-3 shadow-[10px_8px_0px_#13505B] bg-white  
      	${close ? "hidden" : "block"}`}
			>
				{/* <div className='window'>  */}
				<div
					className={`border-solid border-b-3 bg-[#119DA4] flex 
            flex-row justify-between items-center
    			${close ? "hidden" : "block"}`}
				>
					{/* <div className='window-name'> */}

					{type === "function" ? (
						<h1 className="function">
							{data.function}
						</h1>
					) : (
						<h2 className="title">
							{type.toUpperCase()}
						</h2>
					)}
					<div className={`flex flex-row mr-5`}>
						<div
							className="square"
						>
							<div
								onClick={handleReduce}
								className="w-[10px] h-[10px] bg-contain bg-[url(../public/ressources/icons/g2.png)] "
							></div>
						</div>
						<div
							className="square"
						>
							<div
								value={type}
								onClick={handleClose}
								className="w-[10px] h-[10px] bg-contain bg-[url(../public/ressources/icons/g1.png)] "
							></div>
						</div>
					</div>
				</div>

				<div
					className={`
            transition-all duration-500 ease-in-out transform
      ${
			type === "experiences" ||
			type === "formations" ||
			type === "competences"
				? "w-[100%]"
				: "w-[100%] grid grid-rows-[auto auto] grid-cols-3"
		} 
				${reduce ? "hidden" : "block"}
    			${close ? "hidden" : "block"}`}
				>
					<WindowContent type={type} reduced={reduce} />
				</div>
			</div>
		</>
	);
};

export default Window;

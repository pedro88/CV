import React, { useState } from "react";
import WindowContent from "./WindowContent";
import data from "../data/data.js";

const Window = ({ type, handleClose, handleReduce, reduce }) => {
	const [close, setClose] = useState(false);

	return (
		<>
			{/* <div className='display'> */}

			<div
				className={`border-solid border-3 bg-white  
      	${close ? "hidden" : "block"}`}
			>
				{/* <div className='window'>  */}
				<div
					className={`border-solid border-b-3 bg-[#119DA4] flex-row-center-full
    			${close ? "hidden" : "block"}`}
				>
					{/* <div className='window-name'> */}

					{type === "function" ? (
						<h1 className="function">{data.function}</h1>
					) : (
						<h2 className="title">{type.toUpperCase()}</h2>
					)}
					<div className={`flex flex-row mr-5`}>
						<div className="relative hover:scale-110 duration-100 ease-out">
							<div className="squareShadow"></div>
							<div onClick={handleReduce} className="square">
								<div className="w-[10px] h-[10px] flex items-center justify-center mb-4">
									__
								</div>
							</div>
						</div>

						<div className="relative hover:scale-110 duration-100 ease-out">
						<div className="squareShadow"></div>
							<div onClick={handleClose} className="square">
								<div
									value={type}
									className="w-[10px] h-[10px] flex items-center justify-center mb-0.5">
									X
								</div>
							</div>
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

import React from "react";
import data from "../data/data.js";

const WindowContent = ({ type }) => {



	const windowType = () => {
		switch (type) {
			case "competences":
				return (
					<ul className="mt-5 mb-5">
						{data.competences.competences.map((comp, index) => (
							<li className="list" key={index}>
								<img src={"comp.logo"} alt="" />
								<div className="flex-row-center-full">

								{comp.skill}
								<input type="range" value={comp.level} min="0" max="5" 
								className="level-cursor" />
								</div>
							</li>
						))}
					</ul>
				);

			case "coordonnate":
				return (
					<>
						<div className="profile"></div>
						<div className="col-start-2 col-end-3 mt-5 mb-5 pl-10 border-l-3 border-dashed">
							<div>
								<h2 className="h2" >Coordonnates</h2>
							</div>
							<div className="flex">
								<img src={data.coordonnate.nameLogo} alt="" />
								<h3 className="h3">name </h3>
								<h3>
									{" : "}
									{data.coordonnate.name}{" "}
									{data.coordonnate.lastName}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.GSMLogo} alt="" />
								<h3 className="h3">GSM </h3>
								<h3>
									{" : "}
									{data.coordonnate.GSM}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.emailLogo} alt="" />
								<h3 className="h3">email </h3>
								<h3>
									{" : "}
									{data.coordonnate.email}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.adressLogo} alt="" />
								<h3 className="h3">address </h3>
								<h3>
									{" : "}
									{data.coordonnate.address}
								</h3>
							</div>
							<div className="flex-row-center-full mt-5 mb-5 -ml-10 ">
								{data.coordonnate.social.map((el, index) => (
									<div key={index} className="flex flex-col items-center underline relative">
									<h4>{el.social}</h4>
									<img src={el.qrcode} alt="" className="h-[7vw] " />
									
									{/* <p className=" absolute -bottom-7" >{el.link2}</p>
									<p className=" absolute -bottom-3" >{el.link1}</p> */}
									</div>
								))}
							</div>
						</div>
						<div className="col-start-3 col-end-4 border-l-3 border-dashed mt-5 mb-5 pl-10 ">
							<div>
								<h2 className="h2">Interest</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.interest.map(
										(item, index) => (
											<li key={index} className="list-disc ml-5" >
												<img
													src={
														data.coordonnate
															.interestLogo[
															{ index }
														]
													}
													alt=""
												/>
												{item}
											</li>
										)
									)}
								</ul>
							</div>
							<div>
								<h2 className="h2 mt-5">Language</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.language.map(
										(item, index) => (
											<li key={index} className="list-disc ml-5">
												{item.flag} 
												<div className="flex-row-center-full">
												{item.language} :{" "}
												<input type="range" value={item.level} min="0" max="5" 
												className="level-cursor"/>
												</div>

											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</>
				);
			case "experiences":
				return data.experiences.experiences.map((exp, index) => {
					return (
						<div
							className={`ml-5 mr-5 border-b-3 pb-5 ${index === data.experiences.experiences.length-1 ? "border-none" : "border-dashed"}`}   
							key={index} 
						>
							<div className="flex-row-center-full  mt-5 mb-2">
								<h3 className="ml-5 h2">{exp.function}</h3>
								<h4 className=" date">{exp.date}</h4>
							</div>
								<h3 className="location">{exp.location}</h3>
							<p className="mb-2 ml-5 whitespace-pre-line">{exp.description}</p>
							<ul>
								{exp.competences.map((item, index) => (
									<li className="list" key={index}>
										{item}
									</li>
								))}
							</ul>
						</div>
					);
				});
			case "function":
				return;
			case "formations":
				return data.formations.formations.map((form, index) => {
					return (
						<div
							className={`ml-5 mr-5 border-b-3 pb-5 ${index === data.formations.formations.length-1 ? "border-none" : "border-dashed"}`}
							key={form.date}
						>
							<div className="flex-row-center-full mt-5 mb-2">
								<h3 className="ml-5 h2">{form.title}</h3>
								<h4 className="ml-10 date">{form.date}</h4>
							</div>
							<p className="mb-2 location">{form.location}</p>
							<ul>
								{form.competences.map((item) => (
									<li className="list-disc ml-10" key={item}>
										{item}
									</li>
								))}
							</ul>
						</div>
					);
				});
		}
	};


	return <>{windowType({ type })}</>;
};

export default WindowContent;

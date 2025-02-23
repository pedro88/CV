import React from "react";
import data from "../data/data.js";

const WindowContent = ({ type }) => {



	const windowType = () => {
		switch (type) {
			case "competences":
				return (
					<ul className="mt-5 mb-5">
						{data.competences.competences.map((comp) => (
							<li className="list-disc ml-15 mr-30" key={comp}>
								<img src={"comp.logo"} alt="" />
								<div className=" flex flex-row justify-between ">

								{comp.skill}
								<input type="range" value={comp.level} min="0" max="5" 
								className="appearance-none h-2 border-2 accent-[#119DA4] rounded-none 
								shadow-[3px_2px_0px_#13505B] bg-white hover:scale-105 duration-100 ease-out" />
								</div>
							</li>
						))}
					</ul>
				);

			case "coordonnate":
				return (
					<>
						<div className="shadow-[3px_2px_0px_#13505B] hover:scale-102 
						duration-300 ease-out bg-[url(../public/ressources/photo/DSC_6335_1.webp)]
						hover:bg-[url(../public/ressources/photo/DSC_6335-2_2.webp)]
						bg-cover bg-center col-start-1 col-end-2 m-5 border-2"></div>
						<div className="col-start-2 col-end-3 mt-5 mb-5 pl-10 border-l-3 border-dashed">
							<div>
								<h2 className="underline font-medium text-lg" >Coordonnates</h2>
							</div>
							<div className="flex">
								<img src={data.coordonnate.nameLogo} alt="" />
								<h3 className="underline font-medium">name </h3>
								<h3>
									{" : "}
									{data.coordonnate.name}{" "}
									{data.coordonnate.lastName}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.GSMLogo} alt="" />
								<h3 className="underline font-medium">GSM </h3>
								<h3>
									{" : "}
									{data.coordonnate.GSM}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.emailLogo} alt="" />
								<h3 className="underline font-medium">email </h3>
								<h3>
									{" : "}
									{data.coordonnate.email}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.adressLogo} alt="" />
								<h3 className="underline font-medium">address </h3>
								<h3>
									{" : "}
									{data.coordonnate.address}
								</h3>
							</div>
							<div className="flex justify-center  mt-5 mb-5 -ml-10 ">
								{data.coordonnate.social.map((el) => (
									<div key={el} className="flex flex-col items-center underline relative">
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
								<h2 className="underline font-medium text-lg">Interest</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.interest.map(
										(item, index) => (
											<li key={index} className="list-disc" >
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
								<h2 className="underline font-medium text-lg mt-5">Language</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.language.map(
										(item, index) => (
											<li key={index} className="list-disc">
												{item.flag} 
												<div className="flex flex-row justify-between">
												{item.language} :{" "}
												<input type="range" value={item.level} min="0" max="5" 
												className="mr-30 appearance-none h-2 border-2 accent-[#119DA4] rounded-none 
												shadow-[3px_2px_0px_#13505B] bg-white hover:scale-110 duration-105 ease-out"/>
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
							key={exp.date} 
						>
							<div className="flex flex-row justify-between  mt-5 mb-2">
								<h3 className="ml-5 text-lg underline font-medium">{exp.function}</h3>
								<h4 className="mr-10 text-base italic">{exp.date}</h4>
							</div>
								<h3 className="text-lg ml-5 italic">{exp.location}</h3>
							<p className="mb-2 ml-5 whitespace-pre-line">{exp.description}</p>
							<ul>
								{exp.competences.map((item) => (
									<li className="list-disc ml-10" key={item}>
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
							<div className="flex flex-row justify-between  mt-5 mb-2">
								<h3 className="ml-5 text-lg underline font-medium">{form.title}</h3>
								<h4 className="mr-10 text-base italic">{form.date}</h4>
							</div>
							<p className="mb-2 ml-5 italic text-lg">{form.location}</p>
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

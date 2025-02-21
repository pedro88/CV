import React from "react";
import data from "../data/data.js";

const WindowContent = ({ type }) => {
	const windowType = () => {
		switch (type) {
			case "competences":
				return (
					<ul>
						{data.competences.competences.map((comp) => (
							<li className="list-disc ml-15" key={comp}>
								<img src={"comp.logo"} alt="" />
								{comp.skill}
							</li>
						))}
					</ul>
				);

			case "coordonnate":
				return (
					<>
						<div className="bg-[url(../public/ressources/photo/DSC_6335.webp)] bg-cover bg-center col-start-1 col-end-2 "></div>
						<div className="col-start-2 col-end-3 mt-5 mb-5 pl-10">
							<div>
								<h2>Coordonnates</h2>
							</div>
							<div className="flex">
								<img src={data.coordonnate.nameLogo} alt="" />
								<h3>name </h3>
								<h3>
									{" : "}
									{data.coordonnate.name}{" "}
									{data.coordonnate.lastName}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.GSMLogo} alt="" />
								<h3>GSM </h3>
								<h3>
									{" : "}
									{data.coordonnate.GSM}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.emailLogo} alt="" />
								<h3>email </h3>
								<h3>
									{" : "}
									{data.coordonnate.email}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.adressLogo} alt="" />
								<h3>address </h3>
								<h3>
									{" : "}
									{data.coordonnate.address}
								</h3>
							</div>
						</div>
						<div className="col-start-3 col-end-4 border-l-3 border-dashed mt-5 mb-5 pl-10 ">
							<div>
								<h2>Interest</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.interest.map(
										(item, index) => (
											<li key={index}>
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
								<h2>Language</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.language.map(
										(item, index) => (
											<li key={index}>
												{item.flag} {item.language} :{" "}
												{item.level}
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</>
				);
			case "experiences":
				return data.experiences.experiences.map((exp) => {
					return (
						<div
							className="ml-5 mr-5 border-b-3 border-dashed pb-5  "
							key={exp.date}
						>
							<div className="flex flex-row justify-between  mt-5 mb-2">
								<h3 className="ml-5 text-lg">{exp.function}</h3>
								<h3 className="ml-5 text-lg">{exp.location}</h3>
								<h4 className="mr-10 text-base">{exp.date}</h4>
							</div>
							<p className="mb-2">{exp.description}</p>
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
				return data.formations.formations.map((form) => {
					return (
						<div
							className="ml-5 mr-5 border-b-3 border-dashed pb-5 "
							key={form.date}
						>
							<div className="flex flex-row justify-between  mt-5 mb-2">
								<h3 className="ml-5 text-lg">{form.title}</h3>
								<h4 className="mr-10 text-base">{form.date}</h4>
							</div>
							<p className="mb-2 ml-5">{form.location}</p>
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

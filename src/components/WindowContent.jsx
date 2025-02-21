import React from "react";
import data from "../data/data.js";

const WindowContent = ({ type }) => {
	const windowType = () => {
		switch (type) {
			case "range":
				console.log(data.coordonnate.name);
				return <h1>range</h1>;
			case "coordonnate":
				return (
					<>
                        <div className="bg-[url(../public/ressources/photo/DSC_6335.webp)] bg-cover bg-center col-start-1 col-end-2 ">
                        </div>
						<div className="col-start-2 col-end-3 mt-5 mb-5 pl-5">
							<div>
								<h2>Coordonnates</h2>
							</div>
							<div className="flex">
								<img src={data.coordonnate.nameLogo} alt="" />
								<h3>name </h3>
								<h3>
                                {" : "}{data.coordonnate.name}{" "}
									{data.coordonnate.lastName}
								</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.GSMLogo} alt="" />
								<h3>GSM </h3>
								<h3>
                                {" : "}{data.coordonnate.GSM}</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.emailLogo} alt="" />
								<h3>email </h3>
								<h3>
                                {" : "}{data.coordonnate.email}</h3>
							</div>
							<div className="flex">
								<img src={data.coordonnate.adressLogo} alt="" />
								<h3>address </h3>
								<h3>
                                {" : "}{data.coordonnate.address}</h3>
							</div>
						</div>
						<div className="col-start-3 col-end-4 border-l-3 border-dashed mt-5 mb-5 pl-5 ">
							<div>
								<h2>Interest</h2>
							</div>
							<div>
								<ul>
									{data.coordonnate.interest.map(
										(item, index) => (
											<li key={index}>
                                                <img src={data.coordonnate.interestLogo[{index}]} alt="" />
                                                {item}</li>
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
                                               {item.flag} {item.language} : {item.level}
                                                </li>
										)
									)}
								</ul>
							</div>
						</div>
					</>
				);
			case "experiences":
				return <h1>experiences</h1>;
            case "function" :
                return 
		}
	};

	return <>{windowType({type})}</>;
};

export default WindowContent;

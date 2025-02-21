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
                        <div className="column-1">
                        </div>
						<div className="column-2">
							<div>
								<h2>Coordonnates</h2>
							</div>
							<div className="coordonnate-item">
								<img src={data.coordonnate.nameLogo} alt="" />
								<h3>name </h3>
								<h3>
                                {" : "}{data.coordonnate.name}{" "}
									{data.coordonnate.lastName}
								</h3>
							</div>
							<div className="coordonnate-item">
								<img src={data.coordonnate.GSMLogo} alt="" />
								<h3>GSM </h3>
								<h3>
                                {" : "}{data.coordonnate.GSM}</h3>
							</div>
							<div className="coordonnate-item">
								<img src={data.coordonnate.emailLogo} alt="" />
								<h3>email </h3>
								<h3>
                                {" : "}{data.coordonnate.email}</h3>
							</div>
							<div className="coordonnate-item">
								<img src={data.coordonnate.adressLogo} alt="" />
								<h3>address </h3>
								<h3>
                                {" : "}{data.coordonnate.address}</h3>
							</div>
						</div>
						<div className="column-3">
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

import React from "react";
import data from "../../Data/data.json"
import employeeDir from "../../Resources/EmpDirCapture.PNG";
import burger from "../../Resources/BurgerCapture.PNG";
import covid from "../../Resources/CovidCapture.PNG";
import parrot from "../../Resources/parrot-passion.PNG";
import passwordPic from "../../Resources/PassGenCapture.PNG";
import weather from "../../Resources/WeatherCapture.PNG";


function Portfolio() {
    const portfolio = data;
    return(
        <div>
            <div>
                <h1>My Portfolio</h1>
            </div>
        <div className="container">
            <div className="row">
                {portfolio.map(item =>
                    <div key={item.title.value} class="col-md-6">
                        <div className="port-item">
                            <h2>{item.title}</h2>
                            <p>{item.summary}</p>
                            <img src={item.image} alt={item.title}/>
                            <button className="deploy-btn" onclick={window.open(item.github)} target="_blank">Github App</button>
                            <button className="deploy-btn" onclick={window.open(item.deploy)} target="_blank">Deployed Site</button>
                        </div>
                    </div>
                )}

            </div>
           
        </div>
        </div>
    )
};

export default Portfolio;
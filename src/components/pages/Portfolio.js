import React from "react";
import data from "../../Data/data.json"


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
                            <img src={process.env.PUBLIC_URL + '/Resources/' + item.image} alt={item.title} width="500"/>
                            <button className="deploy-btn" onClick={() => window.open(item.github)} >Github App</button>
                            <button className="deploy-btn" onClick={() => window.open(item.deploy)} >Deployed Site</button>
                        </div>
                    </div>
                )}

            </div>
           
        </div>
        </div>
    )
};

export default Portfolio;
import React, {useState, useEffect, useRef} from "react";

function CodingFacts(){
    return(
        <div className="coding-facts-page">
            <div className="line-container">
                <div className="line"></div>
                <hr className="short-horizontal-line"/>
            </div>
            <h1 className="why">why?</h1>
            {/* facts */}
            <div className="autoBlur fact fact1">
                <i class="fa-solid fa-people-group"></i>
                <div className="inner-fact">
                    <h1 className="fact-text text-left">Around <span className="gradient-text-color">26.4 million</span> software developers exist around the world</h1>
                    <p className="fact-subtext">2.9 million of those are from Indonesia</p>
                </div>
            </div>
            <div className="autoBlur fact fact2">
                <i class="fa-solid fa-arrow-trend-up"></i>
                <div className="inner-fact">
                    <h1 className="fact-text text-left">the tech market is expected to create around <span className="gradient-text-color">10 million</span> jobs</h1>
                    <p className="fact-subtext">92% of all stable jobs worldwide require some form of digital skills​</p>
                </div>
            </div>
            <div className="autoBlur fact fact3">
            <i class="fa-solid fa-graduation-cap"></i>
                <div className="inner-fact">
                    <h1 className="fact-text text-left">It takes <span className="gradient-text-color">6 months</span> to 2 years to become a programmer</h1>
                    <p className="fact-subtext">It varies depending on the consistency, resource, and dedication of the person​</p>
                </div>
            </div>
            <div className="autoBlur fact fact2">
            <i class="fa-solid fa-sack-dollar"></i>
                <div className="inner-fact">
                    <h1 className="fact-text text-left">Salary reaching <span className="gradient-text-color">Rp103,000,000</span> Yearly</h1>
                    <p className="fact-subtext">This is 1.7 to 3.5 times higher than the average minimum wage worker​</p>
                </div>
            </div>
        </div>
    )
} 
export default CodingFacts;
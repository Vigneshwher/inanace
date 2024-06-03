import React from "react";
import "./Style.css";
import worker from "../assets/2.jpg";

function Aboutus(){
    return(
        <section className="Aboutus">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="details">
                            <h2>ABOUT US</h2>
                           <p>Repair and maintenance are used hand-in-hand, but they refer to different things in the asset management space. Repairs are restoration work for when an asset breaks, gets damaged, or stops working. Maintenance refers to routine activities and/or corrective or preventive repair done on assets to prevent damage and prolong the life expectancy. Examples include regular cleaning of air-conditioning units, grease traps, repainting, and routine inspections.</p>
                            <button className="readmore">READ MORE</button>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="detail">
                            <img src={worker} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Aboutus;
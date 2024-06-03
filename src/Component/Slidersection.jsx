import React from "react";
import "./Style.css";
import worker from "../assets/1.png";

function Slidersection(){
    return(
        <section className="slidersection">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="deatilbox">
                        <h1>Repair and
                            <br/>
                           Maintenance<br/>
                            Services</h1>
                            <p>Repair and maintenance are used hand-in-hand, but they refer to different things in the asset management space. Repairs are restoration work for when an asset breaks, gets damaged, or stops working. Maintenance refers to routine activities and/or corrective or preventive repair done on assets to prevent damage and prolong the life expectancy.</p>

                            <button className="contact">CONTACT US</button>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="imgbox">
                            <img src={worker} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>

    )
}
export default Slidersection;
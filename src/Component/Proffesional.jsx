import React from "react";
import "./Style.css";
import worker from "../assets/3.png";

function Proffestional(){
    return(
        <section className="Proffestionalsection">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="imgbox">
                            <img src={worker} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detailbox">
                        <h2>We Provide Professional<br/> Home Services.</h2>
                        <p>Home Services means services for home projects, such as maintenance, remodeling, construction, inspection, cleaning, and gardening. A home service is any task or day-to-day activity that you are usually unable to perform yourself due to your schedule, limitations in your ability, health reasons etc.</p>
                        <button className="read">Read More</button>


                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Proffestional;
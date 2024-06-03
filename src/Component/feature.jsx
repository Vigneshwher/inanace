import React from "react";
import "./Style.css";


function Features(){
    return(
        <section className="featuresection">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="imgbox">
                        <i class="bi bi-slash"></i>
                        <h5>Repair</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imgebox">
                        <i class="bi bi-house-door-fill"></i>
                        <h5>improve</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imgbox">
                        <i class="bi bi-house"></i>
                        <h5>Maintain</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Features;
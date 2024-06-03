import React from "react";
import "./Style.css";
import worker from "../assets/4.png";

function Service(){
    return(
        <section className="servicesection" id="service">
            <div className="container">
           <div className="heading">
            <h2> Our Services</h2>
           </div>
           <div className="row">
           <div className="col-md-4">
                        <div className="imgbox">
                        <i class="bi bi-wrench-adjustable"></i>
                        <h5>Maintenance</h5>
                        <p> repairs are done after downtime to minimize losses, while maintenance is done to prevent unexpected asset downtime</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imgbox">
                        <i class="bi bi-plug"></i>
                        <h5>Electrical</h5>
                        <p>Electrical maintenance is the process of ensuring that electrical equipment is kept in good working order</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imgbox">
                      <img src={worker} alt="" />
                        <h5>Plumbing</h5>
                        <p>Plumbing work fixtures, and other systems used for water distribution and sewage disposal in buildings</p>
                        </div>
                        </div>
           </div>
           <div className="btnbox">
           <button className="read">VIEW MORE</button>
           </div>
           </div>
        </section>
    )
}
export default Service;
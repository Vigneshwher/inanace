import React from "react";
import "./Style.css";

function Info(){
    return(
        <section className="infosection">
            <div className="container">
            <h4>Get In Touch</h4>
            <div className="row">
                <div className="col-lg-10">
                    <div className="infoitem">
                        <div className="row">
                         <div className="col-md-4">
                         <div className="item">
                          <div className="imgbox">  
                          <i class="bi bi-geo-alt"></i>
                             </div>
                             <p>Location</p>

                            </div>
                            </div>
                            <div className="col-md-4">
                         <div className="item">
                          <div className="imgbox">  
                          <i class="bi bi-telephone-fill"></i>
                             </div>
                             <p>91+7695934190</p>

                            </div>
                            </div>
                            <div className="col-md-4">
                         <div className="item">
                          <div className="imgbox">  
                          <i class="bi bi-envelope"></i>
                             </div>
                             <p>Vigneshwher2@gmail.com</p>

                            </div>
                            </div>
                            </div>
                            </div>

                            </div>

                             </div>
                <div className="socialbox">
                <h4>Follow Us</h4>
                <div className="box">
                    <a href=""><i class="bi bi-facebook"></i></a>
                    <a href=""><i class="bi bi-twitter"></i></a>
                    <a href=""><i class="bi bi-youtube"></i></a>
                    <a href=""><i class="bi bi-instagram"></i></a>
                </div>
                </div>

                             </div>
        </section>
    )
}
export default Info;
import React from "react";
import "./Style.css";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import worker from "../assets/5.jpg";
import robert from "../assets/7.jpg";

import workers from "../assets/6.jpg";

function Clients(){
    return(
        <section className="clientsection">
            <div className="container">
                <div className="headingsection">
                    <h2>What Our Clients Say</h2>
                </div>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
       <div className="row">
        <div className="col-sm-6">
        <Card className="card">
            
     
      <Card.Body>
      <div className="img">
        <Card.Img variant="top" src={worker} />
        <h6>Jack <br />
        <span>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        </span>
        
        </h6>
        <h5><i class="bi bi-quote"></i></h5> 
        
        </div>
        
        <Card.Text>
        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
        </Card.Text>
        
      </Card.Body>
    </Card>
        </div>
        <div className="col-sm-6">
        <Card className="card">
     
      <Card.Body>
      <div className="img">
        <Card.Img variant="top" src={robert} />
        <h6>Madhavan <br />
        <span>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        </span>
        </h6>
        
        <h5><i class="bi bi-quote"></i></h5> 
        </div>
        <Card.Text>
        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        </div>  
    
          
          
      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
        <div className="col-sm-6">
        <Card className="card">
      
      <Card.Body>
      <div className="img">
        <Card.Img variant="top" src={workers} />
        <h6>Mahendran <br />
        <span>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        </span>
        </h6>
        <h5><i class="bi bi-quote"></i></h5> 
        </div>
        
        <Card.Text>
        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
        </Card.Text>
     
      </Card.Body>
    </Card>
        </div>
        <div className="col-sm-6">
        <Card className="card">
     
      <Card.Body>
      <div className="img">
        <Card.Img variant="top" src={worker} />
        <h6>KarthicK<br />
        <span>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        </span>
        </h6>
        <h5><i class="bi bi-quote"></i></h5> 
        </div>
        <Card.Text>
        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        </div>  
     
       
      </Carousel.Item>
      <Carousel.Item>
      <div className="row">
        <div className="col-sm-6">
        <Card className="card">
    
      <Card.Body>
      <div className="img">
        <Card.Img variant="top" src={worker} />
        <h6>Suriya <br /> 
        <span>

        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        </span>
        </h6>
        <h5><i class="bi bi-quote"></i></h5> 
        </div>
        
        <Card.Text>
        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div className="col-sm-6">
        <Card className="card">
      
      <Card.Body>
        <div className="img">
        <Card.Img variant="top" src={workers} />
        <h6>Sampath <br />
        <span>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        </span>
        

        </h6>
        <h5><i class="bi bi-quote"></i></h5> 
        </div>
     
        <Card.Text>
        chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        </div> 
      
     
      </Carousel.Item>
      

    </Carousel>

            </div>

        </section>
    )
}
export default Clients;
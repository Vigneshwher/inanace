import React from "react";
import "./Style.css";

function Contacts(){
    return(
          <section className="contactsection" id="contact">
            <div className="container">
                <div className="heading">
                    <h2>Contact Us</h2>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                    <input type="text" placeholder="Name" />
                    <br />
                    <input type="text" placeholder="Phone Number" />
                    <br />
                    <input type="text" placeholder="Email" />
                    <br />
                    <textarea name="text" id="text" placeholder="Message"></textarea>

                    <div className="btnbox">
           <button className="read">send</button>
           </div>


                        </form>
                    </div>
                    <div className="col-md-6">
                        <br />
                        <br />
                    <div className="maps">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96714.68291250926!2d-74.05953969406828!3d40.75468158321536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nowy%20Jork%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1672242259543!5m2!1spl!2spl"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
                    </div>
                </div>

            </div>
          </section>
        
    )
}
export default Contacts;
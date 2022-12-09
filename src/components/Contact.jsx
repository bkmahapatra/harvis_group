import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact_body" id="contact">
      <div className="contact_addr">
        <div>
          <h3 className="contact_title">HARVIS</h3>
          <p className="contact_address">
            62, LEVEL, 3, S, KARIAPPA RD, BASAVANAGUDI, BENGALURU, KARNATAKA
            560004, INDIA
          </p>
          <div className="contact_btns">
            <div className="contact_us">
              <a href="tel:+918040356827">Contact Us</a>
            </div>
            <div className="mail_us">
              <a href="mailto:harviisinfra@gmail.com">Mail Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_mapview">
        <div className="mapouter">
          <div className="map-responsive">
            <iframe
              title="mymap"
              className="gmap_iframe"
              width="550"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              // width="600"
              // height="450"
              // frameborder="0"
              // style={{ border: "0" }}
              // allowfullscreen
              src="https://maps.google.com/maps?width=550&amp;height=400&amp;hl=en&amp;q=HARVIS, Kariappa Road, Basavanagudi, Bengaluru, Karnataka&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

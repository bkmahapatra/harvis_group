import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact_body" id="contact">
      <div className="contact_addr">
        <div>
          <h3 className="contact_title">HARVIS</h3>
          <p className="contact_address">
            62, LEVEL, 3, S, KARIAPPA RD, BASAVANAGUDI, BERNGALURU, KARNATAKA
            560004, INDIA
          </p>
        </div>
      </div>
      <div className="contact_mapview">
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              class="gmap_iframe"
              width="100%"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=550&amp;height=400&amp;hl=en&amp;q=HARVIS, Kariappa Road, Basavanagudi, Bengaluru, Karnataka&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <a href="https://formatjson.org/"></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

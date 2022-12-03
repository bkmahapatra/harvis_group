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
              width="550"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=550&amp;height=400&amp;hl=en&amp;q=HARVIS, Kariappa Road, Basavanagudi, Bengaluru, Karnataka&amp;t=&amp;z=18&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5167014209537!2d77.5730148141897!3d12.938754319100491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15923cab2abb%3A0x799ccfdcb45f59bb!2sHARVIS!5e0!3m2!1sen!2sin!4v1670061357682!5m2!1sen!2sin"
              width="550"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

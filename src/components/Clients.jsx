import React from "react";
import '../styles/Clients.css'

const Clients = () => {
  return (
    <section className="clients_body" id="clients">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">Our Clients </div>
        </div>
        <div></div>
        <p className="component_desc">
         
        </p>
      </div>
      <div className="section_body client_section_body">
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
      </div>
    </section>
  );
};

export default Clients;

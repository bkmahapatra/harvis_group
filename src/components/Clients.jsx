import React from "react";
import '../styles/Clients.css'

const Clients = () => {
  return (
    <section className="clients_body" id="clients">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">Our Esteemed Clients </div>
        </div>
        <div></div>
        <p className="component_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
        </p>
      </div>
      <div className="section_body client_section_body">
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
        <div className="client_images"></div>
      </div>
    </section>
  );
};

export default Clients;

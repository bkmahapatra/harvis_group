import React,     {useEffect} from "react";
import "../styles/GetQuote.css";
import {Link} from 'react-router-dom'
import {BsArrowRightCircle} from 'react-icons/bs'

const GetQuote = () => {
  // document.querySelector(".Nav_body").classList.add("white_bg");
  
  return (
    <section className="getquote_body" id="getquote">
      <div className="section_header">
        <div>
          <div className="component_heading_bar"></div>
          <div className="component_title">Request A Quote</div>
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
      <div className="section_body">
        <div className="quote_image">
          <img src="" alt="" />
        </div>
        <div></div>
        <div className="quote_form">
          <div className="form_title">Let's Talk .</div>
          <input
            type="text"
            name=""
            id="name"
            placeholder="Hey, tell us your name"
          />
          <input
            type="text"
            name=""
            id="email"
            placeholder="What's your mail is"
          />
          <input type="text" name="" id="number" placeholder="Your number" />
          <input
            type="text"
            name=""
            id="copany_name"
            placeholder="Company name"
          />
          <input
            type="text"
            name=""
            id="project_detail"
            placeholder="Tell us about your project"
          />
          <div className="form_agreement">
            By submitting this form I consent to processing my personal data as
            described in the <Link className="form_privacy" to={'/privacy'}>Privacy Policy</Link>.
          </div>
          <div className="form_submit">
            <span>Submit</span><BsArrowRightCircle/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;

import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="ELectrothon 5.0"
        text="Electrothon is a student-run hackathon, under the aegis of the National Institute of Technology Hamirpur, India. An exceptional place for young and dedicated minds, a platform for organizations to meet a wide range of talented, and with over 1700+ registrations, Electrothon serves as a hub of ingenious ideas, innovation, entrepreneurship and technical skills."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>
        Explore the <b> Problem Statements</b>{" "}
      </p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Ideathon"
        text="Electrothon 5.0 encourages not only technical hacks, but also commercial concepts and research opportunities. This hackathon is a one-stop destination for fresh, creative concepts that can be developed into useful goods that can actually serve as the country's assets."
      />
      <Feature
        title="Diversity and Inclusivity"
        text="Diversity within nations, regions, faiths, and cultures honors the inclusion of less recognized communities."
      />
      <Feature
        title="Incubation"
        text="Our partnering firms will have the opportunity to collaborate with the ideas that harbor the potential to become products."
      />
    </div>
  </div>
);

export default WhatGPT3;

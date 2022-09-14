import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Pandemic/Natural Disasters",
    text: "Integrate an approach that helps people build up resilience to cope with the inevitable new normal by figuring strategies in the wake of pandemic.",
  },
  {
    title: "Block-Chain",
    text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    title: "Cyber Bullying",
    text: "Build prudent solutions to help prevent people from succumbing to the spiral of cyberbullying and to combat misuse of technology and online harassment.",
  },
  {
    title: "Open Innovation",
    text: "Let your imagination go haywire as you envision ideas that hold the capability to solve any problem that has been distressing mankind for ages.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        The Future is Now and You Just Need to Realize It.{" "}
      </h1>

      <h1 className="gradient__text">Explore the problem statements .</h1>
      <p>Register Now and Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

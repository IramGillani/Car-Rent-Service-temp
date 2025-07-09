import React from "react";
import Header from "../Header";
import SectionAbout from "../SectionAbout";

import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <Header pageTitle="About" />
      <SectionAbout
        title="About"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
      />
      <CountUp />
      <div className="bg-breadcrumb">
        <SectionAbout
          title="Process"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
        />
      </div>
    </>
  );
};

export default About;

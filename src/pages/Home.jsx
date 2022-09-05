import React from "react";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBarComp from "../components/NavBarComp/NavBarComp";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4/Section4";
import Section5 from "../components/Section5";
import Section6 from "../components/Section6";

const Home = () => {
  return (
    <>
      <NavBarComp />
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* <Blog /> */}
      <Section6 />
      <Footer />
    </>
  );
};

export default Home;

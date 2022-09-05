import React from "react";
import EarnSec1 from "../components/EarnComponents/EarnSec1";
import EarnSec2 from "../components/EarnComponents/EarnSec2";
import EarnSec3 from "../components/EarnComponents/EarnSec3";
import EarnSec4 from "../components/EarnComponents/EarnSec4";
import EarnSec5 from "../components/EarnComponents/EarnSec4/EarnSec5";
import EarnSec6 from "../components/EarnComponents/EarnSec6";
import EarnHero from "../components/EarnHero/EarnHero";
import UkFooter from "../components/Footer/UkFooter";
import NavBarComp from "../components/NavBarComp/NavBarComp";

const Earn = () => {
  return (
    <>
      <NavBarComp />
      <EarnHero />
      <EarnSec1 />
      <EarnSec2 />
      {/* <EarnSec3 />
      <EarnSec4 />
      <EarnSec5 />
      <EarnSec6 /> */}
      <UkFooter />
    </>
  );
};

export default Earn;

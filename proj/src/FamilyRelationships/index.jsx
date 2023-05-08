import Sticky from "react-stickynode";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import SameSexMarriageViz from "../viz/SameSexMarriageViz";
import { useState } from "react";
import PuttingOffParenthood from "../PuttingOffParenthood";
import marriageAgeChange from "../assets/marriage-age.svg";
import BridgingHouseholdGap from "../viz/BridgingHouseholdGap";

const FamilyRelationships = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease",
      once: false,
      mirror: true,
    });
  });

  return (
    <>
      <div
        className="center snap-y snap-mandatory scroll-smooth"
        id="content-familyrelationships"
      >
        <SameSexMarriageViz />

        {/* <iframe
          width="100%"
          height="1084"
          frameborder="0"
          src="https://observablehq.com/embed/d98d229f68b277cf@125?cells=myRadarChart"
        ></iframe> */}
      </div>

      <div>
        <h3
          className="center text-2xl font-bold"
          id="header"
          style={{ color: "#246a73", marginTop: "50px" }}
        >
          <u>
            Forever Can Wait: The Saga of Later Marriages and Individual
            Escapades
          </u>
        </h3>
        <div className="center-100">
          <img src={marriageAgeChange} />
        </div>
      </div>

      <BridgingHouseholdGap />

      <div
        className="center snap-y snap-mandatory scroll-smooth"
        id="content-familyrelationships"
      >
        <h3
          className="center text-2xl font-bold"
          id="header"
          style={{ color: "#246a73", marginTop: "50px" }}
        >
          <u>
            Baby, Maybe? The Shift in Millennial Attitudes Towards Parenthood
          </u>
        </h3>
        <PuttingOffParenthood />
      </div>
    </>
  );
};
export default FamilyRelationships;

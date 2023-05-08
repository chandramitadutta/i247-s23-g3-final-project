import { Button, Grid } from "@mui/material";
import Sticky from "react-stickynode";
import FiveYrChangeHomeOwner from "./FiveYrChangeHomeOwner";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import BridgingHouseholdGap from "./viz/BridgingHouseholdGap";

export default function Housing() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease",
      once: false,
      mirror: false,
    });
  });

  return (
    <>
      <div className="center snap-y snap-mandatory scroll-smooth">
        <FiveYrChangeHomeOwner />
        <div style={{ height: 50 }}></div>
      </div>
    </>
  );
}

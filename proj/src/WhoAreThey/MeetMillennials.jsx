import "./WhoAreThey.css";
import Sticky from "react-stickynode";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import fromTo from "../assets/from-to.png";
import populationPercentage from "../assets/26percent.png";
import workforceSpending from "../assets/workforce-spending.png";
import timeline from "../assets/timeline.jpg";

import { useEffect } from "react";
import { Grid } from "@mui/material";
import Population from "../Population";

const WhoAreThey = () => {
  const stickyTopOffset = 0;

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
      <Sticky
        top={stickyTopOffset}
        bottomBoundary="#workforce-spending"
        innerZ={9999}
        className="center"
      >
        <div
          style={{
            background: "white",
            marginBottom: "50px",
            paddingTop: "20px",
          }}
        >
          <h1 className="center text-4xl font-bold" id="header">
            Meet Millennials
          </h1>
        </div>
      </Sticky>

      <div className="center snap-y snap-mandatory scroll-smooth">
        <div id="content-intro" className="snap-always snap-center ">
          <p className="insight">
            Born between 1980 and 1996 in a rapidly changing world, millennials
            have witnessed the world transcend like no other generation.
          </p>

          <img
            src={fromTo}
            alt="fromTo"
            id="fromTo"
            style={{ width: "700px", height: "400px" }}
            className="center-100"
          />

          {/* <p className="insight">
            {" "}
            With one of the largest generations at their helm, the economy is on
            the brink of a transformation, driven by their distinct experiences
            that will revolutionize the landscape of buying and selling. <br />
            Uncover the key events shaping their worldview and unlock the
            untapped potential for businesses to thrive.
          </p> */}
          <p className="insight">
            As the largest generation in the workforce and at their prime
            spending age, millennials are shaping various aspects of society
            with their values, preferences, and behaviors.
          </p>
        </div>
      </div>
      <div id="population">
        <img
          src={populationPercentage}
          style={{ width: "900px", height: "600px" }}
          className="center-100"
        />
      </div>
      <div>
        <Population />
      </div>
      <div id="workforce-spending">
        <img
          src={workforceSpending}
          style={{ width: "900px", height: "600px" }}
          className="center-100"
        />
      </div>

      {/* MILLENNIAL ERA */}
      <Sticky
        top={stickyTopOffset}
        bottomBoundary="#timeline"
        innerZ={9999}
        className="center"
      >
        <div
          style={{
            background: "white",
            marginBottom: "50px",
            paddingTop: "20px",
          }}
        >
          <h1 className="center text-4xl font-bold" id="header">
            The Millennial Era
          </h1>
        </div>
      </Sticky>

      <div className="center snap-y snap-mandatory scroll-smooth">
        <div id="timeline" className="snap-always snap-center">
          <p className="insight">
            Over the last four decades, Millennials have grown up in a rapidly
            changing and digitally connected world, shaping their worldview and
            values. Let’s take a look at the events that shaped the unique
            worldview of this influential generation
          </p>
          <div style={{ height: 50 }}></div>
          <img src={timeline} />
        </div>
      </div>
    </>
  );
};
export default WhoAreThey;

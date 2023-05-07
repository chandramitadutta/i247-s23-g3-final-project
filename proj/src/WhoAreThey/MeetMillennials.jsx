import "./WhoAreThey.css";
import Sticky from "react-stickynode";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import fromTo from "../assets/from-to.png";
import populationPercentage from "../assets/26percent.png";
import workforceSpending from "../assets/workforce-spending.png";

import { useEffect } from "react";
import { Grid } from "@mui/material";

const WhoAreThey = () => {
  const stickyTopOffset = 200;

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
      <Grid container spacing={2}>
        <Grid item xs={2} style={{ verticalAlign: "center" }}>
          <Sticky
            top={stickyTopOffset}
            bottomBoundary="#workforce-spending"
            innerZ={9999}
            className="center"
          >
            <h1 className="center text-4xl font-bold" id="header">
              Meet Millennials
            </h1>
          </Sticky>
        </Grid>

        <Grid item xs={10}>
          <div
            className="center snap-y snap-mandatory scroll-smooth"
            data-aos="zoom-in-up"
          >
            <div id="content-intro" className="snap-always snap-center ">
              <p className="insight">
                Born between 1980 and 1996 in a rapidly changing world,
                millennials have witnessed the world transcend like no other
                generation.
              </p>

              <img
                src={fromTo}
                alt="fromTo"
                id="fromTo"
                style={{ width: "100%" }}
              />

              <br />
              <p className="insight">
                {" "}
                With one of the largest generations at their helm, the economy
                is on the brink of a transformation, driven by their distinct
                experiences that will revolutionize the landscape of buying and
                selling. <br />
                Uncover the key events shaping their worldview and unlock the
                untapped potential for businesses to thrive.
              </p>
            </div>
          </div>
          <div id="population" data-aos="zoom-in-up">
            <img src={populationPercentage} />
          </div>
          <div id="workforce-spending" data-aos="zoom-in-up">
            <img src={workforceSpending} />
          </div>
        </Grid>
      </Grid>

      <div style={{ height: 200 }}></div>
      {/* MILLENNIAL ERA */}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sticky
            top={stickyTopOffset}
            bottomBoundary="#timeline"
            innerZ={9999}
            className="center"
          >
            <h1 className="center text-4xl font-bold" id="header">
              The Millennial Era
            </h1>
          </Sticky>
        </Grid>

        <Grid item xs={10}>
          <div className="center snap-y snap-mandatory scroll-smooth">
            <div id="timeline" className="snap-always snap-center">
              <p className="insight">
                Over the last four decades, Millennials have grown up in a
                rapidly changing and digitally connected world, shaping their
                worldview and values. Let’s take a look at the events that
                shaped the unique worldview of this influential generation
              </p>
              <div style={{ height: 50 }}></div>
              <iframe
                src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1JUl7ELC-AImV7NfwoAAA9zl8PDWBgN1DS-R5hzmhWaM&font=Default&lang=en&initial_zoom=2&height=650"
                width="100%"
                height="650"
                webkitallowfullscreen
                mozallowfullscreen
                allowFullScreen
                frameBorder="0"
                data-aos="zoom-in-up"
              ></iframe>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default WhoAreThey;

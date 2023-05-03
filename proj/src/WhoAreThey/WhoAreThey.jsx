import "./WhoAreThey.css";
import millennialMan from "../assets/millennial-man.png";
import millennialWoman from "../assets/millennial-woman.png";
import Sticky from "react-stickynode";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { useEffect } from "react";

const WhoAreThey = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
      once: false,
    });
  });

  return (
    <>
      <div className="center" snap-y snap-mandatory scroll-smooth>
        <Sticky top={10} bottomBoundary="#content-whoarethey" innerZ={9999}>
          <h1 className="center text-6xl font-bold" id="header">
            Who Are They?
          </h1>
        </Sticky>
        <div id="content-whoarethey" className="snap-always snap-center">
          <br />
          <p>
            Born between 1980 and 1996, millennials are a digital tribe that has
            grown up in a rapidly changing world, with access to information
            like never before. Millennials are now the largest generation, known
            for their digital fluency, entrepreneurial spirit, and
            socially-conscious values, and have already started to reshape the
            world we live in.
          </p>

          <div className="row center sixty" data-aos="zoom-in-up">
            <div className="column center">
              <img
                src={millennialMan}
                alt="millennialMan"
                id="millennialMan"
                style={{ width: "100%" }}
              />
            </div>
            <div className="column center">
              <img
                src={millennialWoman}
                alt="millennialWoman"
                id="millennialWoman"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <br />
          <p>
            They are expected to significantly impact the economy and bring
            about changes in buying and selling practices, pushing companies to
            reevaluate their business strategies for years to come.
          </p>

          <div id="timeline" className="snap-always snap-center">
            <br />
            <br />
            <p>Some story about lets see what all happened</p>
            <iframe
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1JUl7ELC-AImV7NfwoAAA9zl8PDWBgN1DS-R5hzmhWaM&font=Default&lang=en&initial_zoom=2&height=650"
              width="100%"
              height="650"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              frameborder="0"
              data-aos="zoom-in-up"
            ></iframe>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};
export default WhoAreThey;

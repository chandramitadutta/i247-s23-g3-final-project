import "./WhoAreThey.css";
import millennialMan from "../assets/millennial-man.png";
import millennialWoman from "../assets/millennial-woman.png";
import Sticky from "react-stickynode";
const WhoAreThey = () => {
  return (
    <>
      <div className="center">
        <Sticky top={10} bottomBoundary="#content-whoarethey">
          <h1 className="center" id="header">
            Who Are They?
          </h1>
        </Sticky>
        <div id="content-whoarethey">
          <br />
          <p>
            Born between 1980 and 1996, millennials are a digital tribe that has
            grown up in a rapidly changing world, with access to information
            like never before. Millennials are now the largest generation, known
            for their digital fluency, entrepreneurial spirit, and
            socially-conscious values, and have already started to reshape the
            world we live in.
          </p>
          <br />
          <br />
          <div className="row center sixty">
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

          <div id="timeline">
            <br />

            <p>Some story about lets see what all happened</p>
            <br />
            <iframe
              src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1JUl7ELC-AImV7NfwoAAA9zl8PDWBgN1DS-R5hzmhWaM&font=Default&lang=en&initial_zoom=2&height=650"
              width="100%"
              height="650"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
              frameborder="0"
            ></iframe>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};
export default WhoAreThey;

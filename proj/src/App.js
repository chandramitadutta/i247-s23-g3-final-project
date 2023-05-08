import "./App.css";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/MeetMillennials";
import Housing from "./Housing";
import FamilyRelationships from "./FamilyRelationships";
import PuttingOffParenthood from "./PuttingOffParenthood";
import SpendingHabits from "./SpendingHabits";
import LivingWithParents from "./LivingWithParents";
import Population from "./Population";
import Sticky from "react-stickynode";
import consumerism from "./assets/consumerism.svg";
import takeaways from "./assets/takeaways.png";

function App() {
  return (
    <>
      <div className="center">
        <img src={appLogo} alt="Logo" id="logo" />
        <div style={{ height: 120 }}></div>

        <WhoAreThey />
        <div style={{ height: 120 }}></div>

        <div>
          <Sticky
            innerZ={9999}
            className="center"
            bottomBoundary="#lifestyleend"
          >
            <div
              style={{
                background: "white",
                marginBottom: "50px",
                paddingTop: "20px",
              }}
            >
              <h1 className="center text-4xl font-bold" id="header">
                The Millennial Lifestyle
              </h1>
            </div>
          </Sticky>

          <p className="insight">
            Understanding the complex interplay between lifestyle choices and
            consumer behavior is crucial for businesses to cater to the diverse
            needs and preferences of millennials. We delve deeper into this
            topic by exploring millennials' family and relationship choices,
            their housing preferences, and how these factors impact their
            consumer behavior.
          </p>
        </div>
        <FamilyRelationships />

        <div style={{ height: 120 }}></div>

        <Housing />
        <LivingWithParents />
        <div style={{ height: 120 }} id="lifestyleend"></div>

        <div>
          <Sticky
            innerZ={9999}
            className="center"
            bottomBoundary="#consumersend"
          >
            <div
              style={{
                background: "white",
                marginBottom: "50px",
                paddingTop: "20px",
              }}
            >
              <h1 className="center text-4xl font-bold" id="header">
                Millennials as Consumers
              </h1>
            </div>
          </Sticky>
        </div>
        <p className="insight">
          Millennials have been dealt a rough hand when it comes to economic
          development, having weathered major recessions just as they were
          trying to establish themselves in the workforce. The Great Recession
          hit just as they were getting their feet wet, causing unemployment and
          sluggish wage growth that made it hard to build up a nest egg.
          <br />
          Now, just as they should be ascending into higher-paying roles, the
          pandemic has thrown a wrench into the works, with the U.S. economy
          contracting in 2020 and many millennials facing layoffs in the
          industry. It seems as though this generation just can't catch a break.{" "}
          <br />
          Let's delve into the economic terrain of the millennial generation.
        </p>

        <div style={{ height: 50 }}></div>

        <p className="insight">
          Millennials are highly educated, but their education comes at a cost -
          a burden of student debt that can lead to wealth inequality. With
          rising student debt, millennials entering the workforce face
          challenges in making significant purchases like homes or cars.
        </p>
        <iframe
          width="100%"
          height="683"
          frameborder="0"
          src="https://observablehq.com/embed/d98d229f68b277cf@133?cells=myRadarChart"
        ></iframe>

        <div style={{ height: 50 }}></div>

        <p className="insight">
          A recent McKinsey study shows millennials don’t shy away from spending
          money on both goods and experiences.
        </p>
        <h3
          className="center text-2xl font-bold"
          id="header"
          style={{ color: "#246a73", marginTop: "50px" }}
        >
          <u>Show Me the Money: A Visual Journey Through Consumer Habits</u>
        </h3>
        <img src={consumerism} />

        <p className="insight">
          Despite grappling with student loans and a sluggish journey to
          financial independence, millennials have an interesting way of
          spending their money. They are known for indulging in both
          experiential and materialistic purchases.
        </p>
        <SpendingHabits />

        <div id="consumersend" style={{ height: 50 }}></div>
      </div>
      <img src={takeaways} />
      <div style={{ height: 100 }}></div>
      <p className="insight center" style={{ marginBottom: 50 }}>
        Made with ❤️ <br />
        by Avash Adhikari, Chandramita Dutta and Gopika Kini <br />
        as a submission for our final Project for <br />
        Information Visualization and Presentation (INFO 247), Spring '23 <br />
        at the School of Information, UC Berkeley
      </p>
    </>
  );
}

export default App;

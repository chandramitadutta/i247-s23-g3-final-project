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
import takeaways from "./assets/takeaways.svg";

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
            <br />
            Millennials are challenging the traditional notion of relationships
            and marriage. They prioritize individuality, inclusivity, and
            flexibility in their romantic relationships. For them, marriage is
            not necessarily the end goal, and they are open to alternative forms
            of partnerships and family structures.
          </p>
        </div>
        <FamilyRelationships />

        <div style={{ height: 120 }}></div>

        {/* <Housing /> */}
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
          Millennials faced economic setbacks with the Great Recession as they
          entered the workforce and are now hit with the pandemic just as they
          should be advancing in their careers, causing layoffs, wage stagnation
          and increasing debts. This generation seems to have constant obstacles
          and heaps of debts to overcome.
          <br />
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
          height="684"
          frameborder="0"
          src="https://observablehq.com/embed/d98d229f68b277cf?cells=myRadarChart"
        ></iframe>
        <div style={{ height: 50 }}></div>

        <p className="insight">
          Despite grappling with student loans and a sluggish journey to
          financial independence, millennials don’t shy away from spending money
          on both goods and experiences.
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
          Millennials have an interesting way of spending their money. They are
          known for indulging in both experiential and materialistic purchases.
        </p>
        <SpendingHabits />

        <div id="consumersend" style={{ height: 50 }}></div>
        <img src={takeaways} style={{ width: "110%" }} />
      </div>
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

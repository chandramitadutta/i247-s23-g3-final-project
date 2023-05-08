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
function App() {
  return (
    <>
      <div className="center">
        <img src={appLogo} alt="Logo" id="logo" />
        <div style={{ height: 120 }}></div>

        <WhoAreThey />
        <div style={{ height: 120 }}></div>

        <div>
          <Sticky innerZ={9999} className="center">
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
        <SpendingHabits />
        <LivingWithParents />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/MeetMillennials";
import Housing from "./Housing";
import FamilyRelationships from "./FamilyRelationships";
import PuttingOffParenthood from "./PuttingOffParenthood";
import SpendingHabits from "./SpendingHabits";

function App() {
  return (
    <>
      <div className="center">
        <img src={appLogo} alt="Logo" id="logo" />
        <div style={{ height: 120 }}></div>

        <WhoAreThey />
        <div style={{ height: 120 }}></div>

        <FamilyRelationships />
        <div style={{ height: 120 }}></div>

        <Housing />
        <PuttingOffParenthood />
        <SpendingHabits />
        {/* <FamilyLiving />
        <BridgingHouseholdGap />
        <SameSexMarriageViz /> */}
      </div>
    </>
  );
}

export default App;

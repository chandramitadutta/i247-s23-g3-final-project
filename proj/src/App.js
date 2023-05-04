import "./App.css";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/MeetMillennials";
import BridgingHouseholdGap from "./viz/BridgingHouseholdGap";
import SameSexMarriageViz from "./viz/SameSexMarriageViz";
import FamilyLiving from "./FamilyLiving/FamilyLiving";
import FiveYrChangeHomeOwner from "./FiveYrChangeHomeOwner";
import Housing from "./Housing";

function App() {
  return (
    <>
      <div className="center">
        <img src={appLogo} alt="Logo" id="logo" />
        <div style={{ height: 120 }}></div>
        <WhoAreThey />
        <div style={{ height: 120 }}></div>

        <Housing />
        {/* <FamilyLiving />
        <BridgingHouseholdGap />
        <SameSexMarriageViz /> */}
      </div>
    </>
  );
}

export default App;

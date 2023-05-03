import "./App.css";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/WhoAreThey";
import BridgingHouseholdGap from "./viz/BridgingHouseholdGap";
import SameSexMarriageViz from "./viz/SameSexMarriageViz";
import FamilyLiving from "./FamilyLiving/FamilyLiving";

function App() {
  const style = { width: 1000, height: 150 };
  return (
    <>
      <div className="center">
        <img src={appLogo} alt="Logo" id="logo" />
        <WhoAreThey />
        <br />
        <FamilyLiving />
        <BridgingHouseholdGap />
        <SameSexMarriageViz />
      </div>
    </>
  );
}

export default App;

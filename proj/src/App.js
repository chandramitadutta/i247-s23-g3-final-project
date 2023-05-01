import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/WhoAreThey";
import MedianMarriageAge from "./WhoAreThey/MedianMarriageAge";
import SameSexMarriage from "./WhoAreThey/SameSexMarriage";
import BridgingHouseholdGap from "./viz/BridgingHouseholdGap";
import SameSexMarriageViz from "./viz/SameSexMarriageViz";
import FiveYrChangeHomeOwner from "./viz/FiveYrChangeHomeOwner";

function App() {
  const speed = 0.2;

  return (
    <div className="center">
      <img src={appLogo} alt="Logo" id="logo" />
      <WhoAreThey />
      <h1>Family and Living</h1>
      <FiveYrChangeHomeOwner />
      <MedianMarriageAge />
      <BridgingHouseholdGap />
      <SameSexMarriageViz />
    </div>
  );
}

export default App;

import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/WhoAreThey";
import MedianMarriageAge from "./WhoAreThey/MedianMarriageAge";
import SameSexMarriage from "./WhoAreThey/SameSexMarriage";
import BridgingHouseholdGap from "./viz/BridgingHouseholdGap";
import SameSexMarriageViz from "./viz/SameSexMarriageViz";

function App() {
  const speed = 0.2;

  return (
    // <Parallax pages={5} style={{ top: 0, left: 0 }}>
    //   <ParallaxLayer offset={0} speed={speed} className="center">
    //     <img src={appLogo} alt="Logo" id="logo" />
    //   </ParallaxLayer>

    //   <ParallaxLayer offset={1} speed={speed} className="center">
    //     <WhoAreThey />
    //   </ParallaxLayer>

    //   <ParallaxLayer
    //     offset={2}
    //     speed={speed}
    //     className="center"
    //     sticky={{ start: 2, end: 3.5 }}
    //   >
    //     <h1>Love and Marriage</h1>
    //   </ParallaxLayer>

    //   <ParallaxLayer offset={2.2} speed={0.05} className="center">
    //     <MedianMarriageAge />
    //   </ParallaxLayer>

    //   <ParallaxLayer offset={3} speed={0.05} className="center">
    //     <SameSexMarriage />
    //   </ParallaxLayer>
    // </Parallax>

    <div className="center">
      <img src={appLogo} alt="Logo" id="logo" />
      <WhoAreThey />
      <h1>Family and Living</h1>
      <MedianMarriageAge />
      {/* <SameSexMarriage /> */}
      <BridgingHouseholdGap />
      <SameSexMarriageViz />
    </div>
  );
}

export default App;

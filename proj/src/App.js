import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/WhoAreThey";
import LoveMarriage from "./LoveMarriage/LoveMarriage";

function App() {
  const speed = 1;

  return (
    <Parallax pages={3} style={{ top: 0, left: 0 }}>
      <ParallaxLayer offset={0} speed={speed} className="center">
        <img src={appLogo} alt="Logo" id="logo" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={speed} className="center">
        <WhoAreThey />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={speed} className="center">
        <div className="center">
          <LoveMarriage />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;

import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import appLogo from "./assets/logo.png";
import WhoAreThey from "./WhoAreThey/WhoAreThey";
import LoveMarriage from "./LoveMarriage/LoveMarriage";

function App() {
  return (
    <Parallax pages={3} style={{}}>
      <ParallaxLayer offset={0} speed={0.1} className="center">
        <img src={appLogo} alt="Logo" id="logo" />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.1} className="center">
        <WhoAreThey />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={0.1} className="center">
        <LoveMarriage />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;

import "./App.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import appLogo from "./assets/logo.png";

function App() {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={2}>
    //     <Grid md={12}>HEADER GOES HERE</Grid>
    //     <Grid md={12}>TIMELINE HERE</Grid>
    //     <Grid md={12}>STATS HERE</Grid>
    //     <Grid md={12}>NEWS OVERLAY HERE</Grid>
    //     <Grid md={12}>ALL SECTORS HERE</Grid>
    //     <Grid md={12}>TAKEAWAYS HERE</Grid>
    //   </Grid>
    // </Box>
    <Parallax pages={3} style={{ top: "0", left: "0" }}>
      <ParallaxLayer offset={0} speed={2.5}>
        <img src={appLogo} alt="Logo" />;
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2.5}>
        <h1>second page</h1>
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={2.5}>
        <h1>third page</h1>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;

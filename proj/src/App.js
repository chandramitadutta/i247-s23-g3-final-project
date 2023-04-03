import "./App.css";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid md={12}>HEADER GOES HERE</Grid>
        <Grid md={12}>TIMELINE HERE</Grid>
        <Grid md={12}>STATS HERE</Grid>
        <Grid md={12}>NEWS OVERLAY HERE</Grid>
        <Grid md={12}>ALL SECTORS HERE</Grid>
        <Grid md={12}>TAKEAWAYS HERE</Grid>
      </Grid>
    </Box>
  );
}

export default App;

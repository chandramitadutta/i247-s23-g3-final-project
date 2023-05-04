import { Button, Grid } from "@mui/material";
import Sticky from "react-stickynode";
import FiveYrChangeHomeOwner from "./FiveYrChangeHomeOwner";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function Housing() {
  const stickyTopOffset = 200;
  const [currentPage, setCurrentPage] = useState("fiveYearChange");

  useEffect(() => {
    AOS.init({
      duration: 2500,
      easing: "ease",
      once: false,
      mirror: true,
    });
  });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Sticky
            top={stickyTopOffset}
            bottomBoundary="#content"
            innerZ={9999}
            className="center"
          >
            <h1 className="center text-4xl font-bold" id="header">
              Housing
            </h1>
            <div id="buttons" style={{ marginTop: 30 }}>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#F4A019",
                  borderColor: "black",
                  marginTop: "20px",
                }}
                onClick={() => setCurrentPage("fiveYearChange")}
              >
                Home Ownership
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#F4A019",
                  borderColor: "black",
                  marginTop: "20px",
                }}
                onClick={() => setCurrentPage("livingWithParents")}
              >
                Living With Parents
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "#F4A019",
                  borderColor: "black",
                  marginTop: "20px",
                }}
                onClick={() => setCurrentPage("bridgingTheGap")}
              >
                Married vs. Non-married couple households
              </Button>
            </div>
          </Sticky>
        </Grid>

        <Grid item xs={10}>
          <div
            className="center snap-y snap-mandatory scroll-smooth"
            data-aos="zoom-in-up"
            id="content"
          >
            {currentPage === "fiveYearChange" && <FiveYrChangeHomeOwner />}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

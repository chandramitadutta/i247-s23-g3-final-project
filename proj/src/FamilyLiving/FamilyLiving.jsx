import FiveYrChangeHomeOwner from "./FiveYrChangeHomeOwner";
import MedianMarriageAge from "./MedianMarriageAge";
import Sticky from "react-stickynode";

export default function FamilyLiving() {
  return (
    <>
      <div>
        <Sticky top={10} bottomBoundary="#content-familyliving" innerZ={9999}>
          <h1>Family and Living</h1>
        </Sticky>
        <div id="content-familyliving">
          <br />
          <FiveYrChangeHomeOwner />
          <br />
          <MedianMarriageAge />
          <br />
        </div>
      </div>
    </>
  );
}

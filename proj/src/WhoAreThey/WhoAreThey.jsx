import "./WhoAreThey.css";
import millennialMan from "../assets/millennial-man.png";
import millennialWoman from "../assets/millennial-woman.png";
const WhoAreThey = () => {
  return (
    <>
      <div className="center">
        <h1 className="center">Who Are They?</h1>
        <br />

        <br />
        <p>
          Born between 1980 and 1996, millennials are a digital tribe that has
          grown up in a rapidly changing world, with access to information like
          never before. Millennials are now the largest generation, known for
          their digital fluency, entrepreneurial spirit, and socially-conscious
          values, and have already started to reshape the world we live in.
          <br />
          <br />
          <div className="row center sixty">
            <div className="column center">
              <img
                src={millennialMan}
                alt="millennialMan"
                id="millennialMan"
                style={{ width: "100%" }}
              />
            </div>
            <div className="column center">
              <img
                src={millennialWoman}
                alt="millennialWoman"
                id="millennialWoman"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <br />
          They are expected to significantly impact the economy and bring about
          changes in buying and selling practices, pushing companies to
          reevaluate their business strategies for years to come.
        </p>
      </div>
    </>
  );
};
export default WhoAreThey;

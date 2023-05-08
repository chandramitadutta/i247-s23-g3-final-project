import { useEffect } from "react";

export default function BridgingHouseholdGap() {
  useEffect(() => {
    const divElement = document.getElementById("viz1683447817518");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.height = "850px";
    vizElement.style.width = "950px";
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });

  return (
    <div>
      <h3
        className="center text-2xl font-bold"
        id="header"
        style={{ color: "#246a73", marginTop: "50px" }}
      >
        <u>Knot or Not: Untangling the Declining Divide in Modern Unions</u>
      </h3>
      <div
        className="tableauPlaceholder center-100"
        id="viz1683447817518"
        data-aos="zoom-in-up"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="Dashboard 1 "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;Livingconditionsovertheyears&#47;Dashboard1&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object class="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param
            name="path"
            value="views&#47;Livingconditionsovertheyears&#47;Dashboard1?:language=en-US&amp;:embed=true"
          />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Li&#47;Livingconditionsovertheyears&#47;Dashboard1&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </div>
  );
}

import { useEffect } from "react";

export default function FiveYrChangeHomeOwner() {
  useEffect(() => {
    let divElement = document.getElementById("viz1683235565664");
    let vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "950px";
    vizElement.style.height = "750px";
    let scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });

  return (
    <>
      <p style={{ textAlign: "justify", fontSize: "1.3em" }}>
        Homeownership has changed a lot over the last 5 years.
        <br />
        In the dashboard below, click on different generations below to see how
        the home-ownership landscape has changed
      </p>

      <div style={{ height: 50 }}></div>
      <div
        className="tableauPlaceholder"
        id="viz1683235565664"
        style={{ position: "relative" }}
      >
        <noscript>
          <a href="#">
            <img
              alt="5yrchange "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ma&#47;map-5year-change&#47;5yrchange&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="map-5year-change&#47;5yrchange" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ma&#47;map-5year-change&#47;5yrchange&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
        </object>
      </div>
    </>
  );
}

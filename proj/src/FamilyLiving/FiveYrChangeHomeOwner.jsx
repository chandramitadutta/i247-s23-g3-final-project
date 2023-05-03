import { useEffect } from "react";

export default function FiveYrChangeHomeOwner() {
  useEffect(() => {
    const divElement = document.getElementById("viz1682902884393");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.height = "800px";
    vizElement.style.width = "100%";
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });

  return (
    <div>
      <p>
        Homeownership has changed a lot over the last 5 years.
        <br />
        In the dashboard below, click on different generations in the dropdown
        to see how the home-ownership landscape has changed
      </p>
      <div
        class="tableauPlaceholder"
        id="viz1682902884393"
        // style="position: relative"
      >
        <noscript>
          <a href="#">
            <img
              alt="5-Year Change in home ownership in the 50 Largest U.S. Metro Areas (Select a generation in the dropdown to see how it has changed) "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ma&#47;map-5year-change&#47;map&#47;1_rss.png"
              style="border: none"
            />
          </a>
        </noscript>
        <object class="tableauViz">
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="map-5year-change&#47;map" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;ma&#47;map-5year-change&#47;map&#47;1.png"
          />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-US" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>
  );
}

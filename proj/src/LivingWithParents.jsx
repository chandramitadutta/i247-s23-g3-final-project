import { useEffect } from "react";

export default function LivingWithParents() {
  useEffect(() => {
    const divElement = document.getElementById("viz1683435347354");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.width = "950px";
    vizElement.style.height = "750px";
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });

  return (
    <div>
      <div className="tableauPlaceholder center-100" id="viz1683435347354">
        <noscript>
          <a href="#">
            <img
              alt="Dashboard 1 "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;P9&#47;P9XHPWT8M&#47;1_rss.png"
              style={{ border: "none" }}
            />
          </a>
        </noscript>
        <object class="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="path" value="shared&#47;P9XHPWT8M" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;P9&#47;P9XHPWT8M&#47;1.png"
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

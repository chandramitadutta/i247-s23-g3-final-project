import { useEffect } from "react";

export default function SameSexMarriageViz() {
  useEffect(() => {
    const divElement = document.getElementById("viz1682381428865");
    const vizElement = divElement.getElementsByTagName("object")[0];
    vizElement.style.height = divElement.offsetWidth * 0.75 + "px";
    vizElement.style.width = "100%";
    const scriptElement = document.createElement("script");
    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  });

  return (
    <div>
      <p>Some quote about same sex marriage</p>
      <div className="tableauPlaceholder" id="viz1682381428865">
        <noscript>
          <a href="#">
            <img
              alt="Same sex marriages over the years "
              src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sa&#47;Samesexmarriagesovertheyears&#47;Sheet1&#47;1_rss.png"
              style="border: none"
            />
          </a>
        </noscript>
        <object className="tableauViz">
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="Samesexmarriagesovertheyears&#47;Sheet1" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param
            name="static_image"
            value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Sa&#47;Samesexmarriagesovertheyears&#47;Sheet1&#47;1.png"
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

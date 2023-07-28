import React from "react";
import Panel from "./Panel";
import yticon from "../icons/yt-icon.png";
import netflix from "../icons/netflix-icon.png";

export default function EntertainmentTabPanel() {
  return (
    <div className="panelContainer">
      <Panel icon={yticon} text="YouTube" link="https://www.youtube.com" />
      <Panel icon={netflix} text="Netflix" link="https://www.netflix.com" />
    </div>
  );
}

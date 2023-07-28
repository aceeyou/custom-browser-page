import React from "react";
import Panel from "./Panel";
import addIcon from "../icons/add-icon.png";

export default function CodingTabPanel() {
  return (
    <div className="panelContainer">
      <Panel text="Add Item" icon={addIcon} link="#" />
    </div>
  );
}

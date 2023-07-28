import React from "react";
import Panel from "./Panel";
import freeCodeCamp from "../icons/fcc-icon.png";
import udemy from "../icons/udemy-icon.png";

export default function EducationTabPanel() {
  return (
    <div className="panelContainer">
      <Panel
        icon={freeCodeCamp}
        text="freeCodeCamp"
        link="https://www.freecodecamp.org/learn"
      />
      <Panel
        icon={udemy}
        text="Udemy"
        link="https://www.udemy.com/home/my-courses/learning/"
      />
    </div>
  );
}

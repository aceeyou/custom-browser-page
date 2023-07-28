import React, { useState } from "react";
import Tab from "./Tab";
import PersonalTabPanel from "./PersonalTabPanel";
import EntertainmentTabPanel from "./EntertainmentTabPanel";
import EducationTabPanel from "./EducationTabPanel";
import CodingTabPanel from "./CodingTabPanel";
// import "../App.css";

export default function Tabs(props) {
  const [activeTab, setActiveTab] = useState("Personal");

  const handleReturn = (text) => {
    // alert(text);
    setActiveTab(text);
    console.log(window.history.length);
  };

  // styling
  let beige = {
    backgroundColor: "#F2C078",
    color: "#000",
  };

  let blue = {
    backgroundColor: "#1616df",
    color: "#fff",
  };

  let green = {
    backgroundColor: "#17A07F",
    color: "#fff",
  };

  let orange = {
    backgroundColor: "#F46036",
    color: "#fff",
  };

  let defaultStyle = {
    backgroundColor: "#FFF",
    color: "#000",
  };

  return (
    <div className="section-container">
      <div className="Tabs-Container">
        <Tab
          text="Personal"
          hoverColor={"#F2C078"}
          handleClick={handleReturn}
          className={activeTab !== "Personal" ? defaultStyle : beige}
        />
        <Tab
          text="Education"
          hoverColor={"#1616df"}
          handleClick={handleReturn}
          className={activeTab !== "Education" ? defaultStyle : blue}
        />
        <Tab
          text="Entertainment"
          hoverColor={"#17A07F"}
          handleClick={handleReturn}
          className={activeTab !== "Entertainment" ? defaultStyle : green}
        />
        <Tab
          text="Coding"
          hoverColor={"#F46036"}
          handleClick={handleReturn}
          className={activeTab !== "Coding" ? defaultStyle : orange}
        />
      </div>

      {/* Panels */}
      <div>
        {activeTab === "Personal" && <PersonalTabPanel />}
        {activeTab === "Entertainment" && <EntertainmentTabPanel />}
        {activeTab === "Education" && <EducationTabPanel />}
        {activeTab === "Coding" && <CodingTabPanel />}
      </div>
    </div>
  );
}

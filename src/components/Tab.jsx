import React, {useState} from 'react'
import "../default.css"

export default function Tab(props) {

  const [hover, setHover] = useState(false)
  // const [activeTab, setActiveTab] = useState("Personal")

  return (
    <div 
      className='tab-component' 
      onMouseOver={() => setHover(true)} 
      onMouseLeave={() => setHover(false)} 
      style={
        // hover ? 
        // {
        //   backgroundColor: props.hoverColor,
        //   color: props.text === "Personal" ? "#000" : "#FFF",
        // } 
        // : 
        // {
        //   backgroundColor: "#fff",
        //   color: "#000"
        // }
        props.className
      } 
      onClick={() => {
        // setActiveTab(props.text)
        props.handleClick(props.text)

      }}
    >
        {props.text}
    </div>
  )
}

import React from 'react'

export default function Panel(props) {
  return (
    <div className='panelBox' onClick={() => window.location.href = props.link}>
        <div className='panel'>
            <img src={props.icon} className='panelIcon'/>
        </div>
        <p className='panelText'>{props.text}</p>
    </div>
  )
}

import React from 'react'
import Panel from './Panel'
import gmailIcon from "../icons/gmail-icon.png"
import buLogo from "../icons/bu-logo.png"
import keepIcon from "../icons/google-keep-icon.png"


export default function Panels() {
  return (
    <div className='panelContainer'>
        <Panel icon={gmailIcon} text="Gmail" link="https://mail.google.com/mail/u/1/#inbox" />
        <Panel icon={buLogo} text="University" link="https://mail.google.com/mail/u/0/#inbox" />
        <Panel icon={keepIcon} text="Google Keep" link="https://keep.google.com/u/1/" />
    </div>
  )
}

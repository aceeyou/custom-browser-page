import React from 'react'
import Panel from './Panel'
import gmailIcon from "../icons/gmail-icon.png"
import buLogo from "../icons/bu-logo.png"
import keepIcon from "../icons/google-keep-icon.png"
import messenger from "../icons/fb-messenger-icon.png"
import facebook from "../icons/fb-icon.png"


export default function Panels() {
  return (
    <div className='panelContainer'>
        <Panel icon={gmailIcon} text="Gmail" link="https://mail.google.com/mail/u/1/#inbox" />
        <Panel icon={facebook} text="Facebook" link="https://www.facebook.com" />
        <Panel icon={messenger} text="Messenger" link="https://www.messenger.com" />
        <Panel icon={keepIcon} text="Google Keep" link="https://keep.google.com/u/1/" />
        <Panel icon={buLogo} text="University" link="https://mail.google.com/mail/u/0/#inbox" />
    </div>
  )
}

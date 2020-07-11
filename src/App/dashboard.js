import React, { useRef, useState } from 'react'
import ControlPanel from '../ControlPanel'
import './styles.css'
import Console from '../Console'
import { ReactComponent as Rocket } from '../assets/rocket.svg'

export const DashBoard = () => {
    const childRef = useRef();
    const [launchPad, setLaunchPadDetails] = useState({})
    const getLaunchPadDetails = value => {
        setLaunchPadDetails(value);
    }
    return (
        <div>
            <div className="row">
                <Console launchPadDetail={launchPad} className="scrollable-otp" ref={childRef} />
            </div>
            <div className="row-panel">
                <div className= "col">
                    <button onClick={() => {
                        setLaunchPadDetails({})
                        childRef.current.getCapsules()
                    }}>Capsules</button>
                </div>
                <div className= "col">
                  <Rocket />
                </div>
                <div className= "col">
                    <ControlPanel getLaunchPadDetails={getLaunchPadDetails} />
                </div>
            </div>
        </div>

    )
}


export default DashBoard;
import React, { useRef } from 'react'
import ControlPanel from '../ControlPanel'
import './styles.css'
import Console from '../Console'
import { ReactComponent as Rocket } from '../assets/rocket.svg'

export const DashBoard = () => {
    const childRef = useRef();
    return (
        <div>
            <div className="row">
                <Console className="scrollable-otp" ref={childRef} />
            </div>
            <div className="row-panel">
                <div className= "col">
                    <button onClick={() => childRef.current.getCapsules()}>Capsules</button>
                </div>
                <div className= "col">
                  <Rocket />
                </div>
                <div className= "col">
                    <ControlPanel />
                </div>
            </div>
        </div>

    )
}


export default DashBoard;
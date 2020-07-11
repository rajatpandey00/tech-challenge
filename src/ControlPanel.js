
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import axios from 'axios';

const ControlPanel = (props) => {
    const [isInputIDValid , setInputVaidation] = useState(true);
    const [launchpadDetails , setlaunchpadDetails] = useState({});
    const [lanchID, setLaunchID ] = useState(null)
    const getLaunchPadRequest = e => {
        e.preventDefault();
        e.stopPropagation();
        axios
            .get(`http://localhost:4000/launchpads/${lanchID}`)
            .then(res => {
                setlaunchpadDetails(res.data);
                setlaunchpadDetails(launchpadDetails);
                props.getLaunchPadDetails(res.data);
                });
            }
    return (
        <form onSubmit={e =>getLaunchPadRequest(e)}>
            <input maxLength={15} onChange={e => {
                setInputVaidation(checkNonVaildCharacter(e.target.value));
                setLaunchID(e.target.value);
            }}/>
            {!isInputIDValid && <div style={{color: 'red' }}>'Please enter valid ID'</div>}
            <button disabled={!isInputIDValid}>Launchpad Pad</button>
        </form>
    )
}

const checkNonVaildCharacter = text => {
    // eslint-disable-next-line
    const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    return !format.test(text);
}

export default ControlPanel;
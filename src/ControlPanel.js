
import React, { useState } from 'react';

const ControlPanel = () => {
    const [isInputIDValid , setInputVaidation] = useState(true);
    return (
        <form>
            <input maxLength={15} onChange={(e) => setInputVaidation(checkNonVaildCharacter(e.target.value))}/>
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
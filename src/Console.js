import React, { useState, forwardRef, useImperativeHandle } from 'react'
import axios from 'axios';

// We have to bind capsule button from Parent to Console log
const Console = forwardRef((props, ref) => {
    const [capsules, setCapsules] = useState([]);
    const getAllCaps = () => {
        return axios.get('http://localhost:4000/getAllCapsules').then(res => {
            setCapsules(res.data);
        })
    }
    
    useImperativeHandle(ref, () => ({
        getCapsules() {
            getAllCaps();
        }

    }));
    const details = (props.launchPadDetail.data || capsules)
    return (
        <div><pre>{JSON.stringify(details, null, 2)}</pre></div>
    )
});


export default Console


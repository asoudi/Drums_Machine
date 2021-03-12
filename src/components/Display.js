import React, {useEffect, useState} from 'react';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import {BankActivate, OnOff, VolumeChanged} from './redux/Manage';

import { useSelector, useDispatch } from "react-redux";
/*
Find a way to combine the ban btn status with vol value into display title
*/
function Display() {
    const [displayTitle, setDisplayTitle] = useState('');
    const dispatchAction = useDispatch();
    const poweroff = useSelector(state => state.pwr); 
    const PowerOnOff = () => {
        dispatchAction(OnOff());
        setDisplayTitle('ON');
    }
    const ActiveBank = (e) => {
        dispatchAction(BankActivate());
        e.target.checked === true ? setDisplayTitle('Piano') : setDisplayTitle('Drum') ;
    }
    const btnDesc = useSelector(state => state.btn);
    const VolumeSlider = (e, vv) => {
        setDisplayTitle(`Volume: ${vv}`);
        dispatchAction(VolumeChanged(vv/100));
    }

    useEffect(() => {
        setDisplayTitle( btnDesc.id ); // on button pressed set the desc of the btn
      },[btnDesc]); // take bid from outside

    return (
        <div id='display'>
            <div>
                <p>Power</p>
                <Switch onChange={PowerOnOff} name="chk-pwr"></Switch>
            </div>
            <div id='display-title'><span>{poweroff ? "" : displayTitle }</span></div>
            <div id='vol'><Slider disabled = {poweroff ? true: false} onChange={VolumeSlider} min={0} max={100} aria-labelledby="continuous-slider" /></div>
            <div>
                <p>Type</p>
                <Switch disabled = {poweroff ? true: false}  onChange={ActiveBank} name="chk-bank" ></Switch>
            </div>
        </div>
    )
}

export default Display

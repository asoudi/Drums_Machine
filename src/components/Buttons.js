import React from 'react'
import {ButtonClicked} from './redux/Manage'
import { useDispatch, useSelector } from "react-redux";

function Buttons() {
    const dispathBtn = useDispatch();
    const isBank = useSelector(state => state.bank);
    const Power = useSelector(state => state.pwr);
    const volume = useSelector(state => state.vol.num);
    /* on key press click on the matching button */
    const KEYPAD = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c']
    document.addEventListener('keydown', function(event){
		if( KEYPAD.includes(event.key) ) 
            document.getElementById(`btn-${event.key.toString()}`).click();
    });
    // end of listener
    const btnClicked = e => {
        dispathBtn( ButtonClicked(e.target.lastChild.getAttribute('desc')) );
        
        if(! Power)
            {
                e.target.lastChild.volume = volume; // set the custom volume level
                e.target.lastChild.play();
            }
    }
    return (
        <div id='buttons' onKeyDown={console.log(12, 'up')}>
            <button id='btn-q' className='drum-pad' onClick={btnClicked}  >Q
            {isBank ? 
                <audio id='audio-q' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/P1.WAV
            " desc='P1'></audio> 
            : 
                <audio id='audio-q' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/INSTRUM/BAIXO.WAV" desc='BAIXO'></audio> }                
            </button>

            <button id='btn-w' className='drum-pad' onClick={btnClicked}>W
            {isBank ? 
             <audio id='audio-w' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/P2.WAV
             " desc='P2'></audio>
            : 
                <audio id='audio-w' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/TONGO.WAV" desc='TONGO'></audio>}
            </button>

            <button id='btn-e' className='drum-pad' onClick={btnClicked}>E
            {isBank ? 
             <audio id='audio-e' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/P3.WAV
             " desc='P3'></audio>
            : 
                <audio id='audio-e' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/TAP1.WAV" desc='TAP1'></audio>}
            </button>

            <button id='btn-a' className='drum-pad' onClick={btnClicked}>A
            {isBank ? 
             <audio id='audio-a' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/P4.WAV
             " desc='P4'></audio>
            : 
                <audio id='audio-a' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/SD7575.WAV" desc='SD7575'></audio>}
            </button>

            <button id='btn-s' className='drum-pad' onClick={btnClicked}>S
            {isBank ? 
             <audio id='audio-s' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/P5.WAV
             " desc='P5'></audio>
            : 
                <audio id='audio-s' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/RBALL3.WAV" desc='RBALL3'></audio>}
            </button>

            <button id='btn-d' className='drum-pad' onClick={btnClicked}>D
            {isBank ? 
             <audio id='audio-d' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/P6.WAV
             " desc='P6'></audio>
            : 
                <audio id='audio-d' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/KOOK.WAV" desc='KOOK'></audio>}
            </button>

            <button id='btn-z' className='drum-pad' onClick={btnClicked}>Z
            {isBank ? 
             <audio id='audio-z' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/ELECPIAN.WAV
             " desc='ELECPIAN'></audio>
            : 
                <audio id='audio-z' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/KLING.WAV" desc='KLING'></audio>}
            </button>

            <button id='btn-x' className='drum-pad' onClick={btnClicked}>X
            {isBank ? 
             <audio id='audio-x' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/GRAND1HI.WAV
             " desc='GRAND1HI'></audio>
            : 
                <audio id='audio-x' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/DING.WAV" desc='DING'></audio>}
            </button>

            <button id='btn-c' className='drum-pad' onClick={btnClicked}>C
            {isBank ? 
                <audio id='audio-c' className='clip' src="https://og.kervella.org/synth/fairlight_cmi/songs/pianos/Samples/TOYPIAN.WAV
             " desc='TOYPIAN'></audio>
            : 
                <audio id='audio-c' className='clip' src="http://cd.textfiles.com/maxsounds/WAV/EFEITOS/BOOP.WAV" desc='BOOP'></audio>}
            </button>
            
        </div>
    )
}

export default Buttons

import React, { useState, useEffect } from 'react';
import './Style.css';

import CallEndIcon from '@mui/icons-material/CallEnd';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';

import MicOffIcon from '@mui/icons-material/MicOff';
import MicIcon from '@mui/icons-material/Mic';

import BackspaceIcon from '@mui/icons-material/Backspace';
import { useSelector, useDispatch } from 'react-redux'

import { makeCall, dial } from '../redux/ExtensionSlice'

import useSound from 'use-sound';
import dialTone from '../utils/audio/dialTone.mp3';
import cannotReach from '../utils/audio/cannotReach.mp3';

function Keypad() {

    const dispatch = useDispatch();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [dialing, setDialing] = useState(false)
    const [mic, setMic] = useState(false)

    const [playDial] = useSound(dialTone);
    const [cannotReachTone] = useSound(cannotReach);

    // const [audio] = useState(new Audio('../utils/audi'))

    const callSuccess = useSelector((state) => state.extension.callSuccess);

    useEffect(() => {
        if (callSuccess == 'correct' && dialing) {
            playDial()
            // cannotReachTone()
        }
        else if (callSuccess == 'incorrect' && dialing) {
            cannotReachTone()
        }
    }, [callSuccess])


    const handleInput = (value) => {
        // console.log(value, 'value');
        if (value == 'makecall') {
            if (phoneNumber.length > 0)

            // const serializedHeaders = JSON.stringify(phoneNumber.headers);
            setDialing(true)
            dispatch(makeCall({
                phoneNumber
            }));

            // dispatch(makeCall(phoneNumber));
            // dispatch(dial());

        }
        else {
            setPhoneNumber(prevNumber => prevNumber + value);

        }
    }

    const handleKeyPress = (event) => {
        const numericKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        if (event.key === 'Enter') {
            if (phoneNumber.length > 0) {
                dispatch(makeCall(phoneNumber))
                // dispatch(dial())
                setDialing(true)
            }

        }
        else if (numericKeys.includes(event.key)) {
            setPhoneNumber(prevNumber => prevNumber + event.key);
            console.log(event.key, 'event key')
        }
    }

    // console.log(phoneNumber,'phoneNumber')
    const buttonValue = [
        'ABC',
        "DEF",
        "GHI",
        "JKL",
        "MNO",
        "PQRS",
        "TUV",
        "WXYZ"
    ]

    const removeLastNumber = () => {
        if (phoneNumber.length > 0) {
            setPhoneNumber(prevNumber => prevNumber.slice(0, -1));

        }
    }
    return (
        <div className='keypad'>
            {
                dialing ?
                    <div>
                        <p>{phoneNumber}</p>

                    </div>

                    :
                    <div className='keypad-header'>
                        <h2>User Name</h2>
                        <div>
                            <input
                                type="text"
                                placeholder='Enter Phone Number'
                                value={phoneNumber}
                                onKeyDown={handleKeyPress}
                            />
                            <BackspaceIcon onClick={removeLastNumber} />

                        </div>
                    </div>

            }

            <div className='keypad-body'>
                <button className='circular-button' onClick={() => handleInput(1)}>
                    1
                </button>
                {buttonValue.map((value, index) => (
                    <button key={index} className='circular-button' onClick={() => handleInput(index + 2)}>
                        {index + 2}
                        <p className='alphabet'>{value} </p>
                    </button>
                ))}
                <button className='circular-button' onClick={() => handleInput('*')}>
                    *
                </button>
                <button className='circular-button' onClick={() => handleInput(0)}>
                    0
                </button>
                <button className='circular-button' onClick={() => handleInput('#')}>
                    #
                </button>
                <button className='circular-button' onClick={() => handleInput('reject')}>
                    <PhoneCallbackIcon />
                </button>
                <button className='circular-button' onClick={() => handleInput('makecall')}>
                    <CallEndIcon />
                </button>
                <button className='circular-button' onClick={() => handleInput('recortcall')}>
                    <RecordVoiceOverIcon />
                </button>
            </div>

            {
                dialing ?
                    <MicIcon />
                    :




                    <div className='keypad-lastsection'>


                        <QueryBuilderIcon />
                        <MessageIcon />
                        <KeyboardIcon />
                        <SettingsIcon />


                    </div>
            }


        </div>
    )
}

export default Keypad

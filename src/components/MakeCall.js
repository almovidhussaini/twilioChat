import React from 'react'
import './Style.css'

import CallEndIcon from '@mui/icons-material/CallEnd';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import MessageIcon from '@mui/icons-material/Message';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';

import BackspaceIcon from '@mui/icons-material/Backspace';

function MakeCall() {
  return (
    <div className='keypad'>
            <div className='keypad-header'>
                <div>
                 <input
                type="text"
                placeholder='Enter Phone Number'
                value={phoneNumber}
                onKeyDown={handleKeyPress}
                />
                <BackspaceIcon onClick={removeLastNumber}/>

                </div>
                {/* <div>  */}
                {/* <p>{phoneNumber}</p>
                <BackspaceIcon onClick={removeLastNumber}/>
                </div> */}
                
            </div>
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
            <div className='keypad-lastsection'>
                {/* <div>
                <QueryBuilderIcon/>
                <p>Recent</p>
                </div> */}
                <QueryBuilderIcon/>

                {/* <div>
                <MessageIcon/>
                <p>Messages</p>
                </div> */}
                <MessageIcon/>
                
                {/* <div>
                <KeyboardIcon/>
                <p>Keypad</p>
                </div> */}

                <KeyboardIcon/>
                {/* <div>
                <SettingsIcon/>
                Settings
                </div> */}

                <SettingsIcon/>
                
              
            </div>


        </div>
  )
}

export default MakeCall

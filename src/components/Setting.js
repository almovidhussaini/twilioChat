import React, { useState } from 'react'

function Setting() {
    const [enablesms, setEnablesms] = useState(false);

    const handlesms = () => {
        setEnablesms(enablesms);
    }
    return (
        <div className='setting'>
            <div>
                <h2>Settings</h2>
            </div>

            <div className='settingBody'>
                <div className='enablesms'>
                    <div>
                        <h3>Enable SMS</h3>
                        <button onClick={handlesms}>
                            {enablesms ? 'ON' : 'OFF'}
                        </button>
                    </div>
                    <div>
                        <p> Action on clicking number:</p>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Setting

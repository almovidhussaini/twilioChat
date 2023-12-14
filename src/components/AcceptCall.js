import React from 'react'
import './Style.css'
import RingVolumeIcon from '@mui/icons-material/RingVolume';
import PhoneLockedIcon from '@mui/icons-material/PhoneLocked';

function AcceptCall({props}) {

  const acceptCall = () => {
    // if (connection) {
    //   connection.accept();
    // }
    console.log('accept call')
  };

  const rejectCall = () => {
    // if (connection) {
    //   connection.reject();
    // }
    console.log('reject call')
  };

  return (
    <div className='acceptcall'> 
      <h3>+123412312312 </h3>
      <h3>myName</h3>
      <p > twelo number +124324234</p>
      <div className='accpetcallIcons'>
        <RingVolumeIcon onClick = {acceptCall}/>
        <PhoneLockedIcon onClick = {rejectCall}/>
      </div>
    </div>
  )
}

export default AcceptCall

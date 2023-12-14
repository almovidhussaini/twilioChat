import Keypad from "./components/Keypad";
import React, { useEffect, useState } from 'react';
import Setting from "./components/Setting";
// import MakeCall from "./components/MakeCall";

import { useSelector } from 'react-redux';



function App() {

  // const dialCall = useSelector((state) => state.dialCall)

  // console.log(dialCall,'dialCAll')

  const [connection, setConnection] = useState(null);
  return (
    <div >
      <Keypad/>    
      {/* <AcceptCall/>   */}
      {/* <Setting/> */}
    </div>
  );
}

export default App;

import React, { useState } from "react";
import OnBoard from "./components/OnBoard";
import Home from "./components/Home";


const App = () => {
  const [ShowOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }

  return (
  <> 
    {ShowOnboard && <OnBoard handleDone={handleOnboardFinish} />}
    {!ShowOnboard && <Home />}
  </>);
};


export default App;
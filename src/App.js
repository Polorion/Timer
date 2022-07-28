import React from "react";
import CloclContainer from "./components/Clock/CloclContainer";
import TimerContainer from "./components/Timer/TimerContainer";
import "./global.css";

function App() {
  return (
    <div className="App">
      <div className={"r"}>
        <CloclContainer />
      </div>
      <div>
        <TimerContainer />
      </div>
    </div>
  );
}

export default App;

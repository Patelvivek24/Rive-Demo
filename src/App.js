import React from "react";
import { useRive } from "rive-react";
const RIVE_FILE = "./spece.riv"; // Example Rive file
const STATE_MACHINE_NAME = "State Machine 1";

function App() {
  const { rive, RiveComponent } = useRive({
    src: RIVE_FILE,
    stateMachines: STATE_MACHINE_NAME,
    animations: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const handlePlay = () => {
    rive && rive.play(STATE_MACHINE_NAME);
  };

  const handlePause = () => {
    rive && rive.pause(STATE_MACHINE_NAME);
  };

  const handleStop = () => {
    rive && rive.stop(STATE_MACHINE_NAME);
  };

  const handleReset = () => {
    if (rive) {
      rive.stop(STATE_MACHINE_NAME);          // Stop the animation
      rive.reset();                       // Reset the timeline
    }
  };

  return (
    <>
      {/* <div style={{ textAlign: "center", marginTop: "30px" }}>
        <RiveComponent style={{ width: "100px", height: "100px" }} />
      </div> */}

      <div className="flex flex-col items-center p-4 space-y-4">
        <RiveComponent style={{ width: "60vh", height: "60vh" }} />
        <div className="flex gap-4">
          <button onClick={handlePlay} className="px-4 py-2 bg-green-500 text-white rounded">Play</button>
          <button onClick={handlePause} className="px-4 py-2 bg-yellow-500 text-white rounded">Pause</button>
          <button onClick={handleStop} className="px-4 py-2 bg-red-500 text-white rounded">Stop</button>
          <button onClick={handleReset} className="px-4 py-2 bg-blue-500 text-white rounded">Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;

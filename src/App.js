import React from "react";
import { useRive } from "rive-react";
const STATE_MACHINE_NAME = "State Machine 1";

function App() {
  const { RiveComponent } = useRive({
    src: "/spece.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <RiveComponent style={{ width: "90vh", height: "90vh" }} />
    </div>
  );
}

export default App;

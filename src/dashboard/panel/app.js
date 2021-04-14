import React, { useState, useEffect } from "react";
import NCGStore, { replicate } from "../../stores/NodecgStore";


function App() {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("champSelectUpdate");
    replicate("champInfo");
    replicate("summInfo");
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);

  const {
    replicants: { champSelectUpdate, champInfo, summInfo },
  } = state || {};

  return (
    <div id="app">
        <p>Holaaaa</p>
    </div>
  );
}

export default App;

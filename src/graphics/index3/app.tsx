import React, {FC, useEffect, useState} from 'react';
import NCGStore, { replicate } from "../../stores/NodecgStore";

const app:FC = () => {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("Replicant"); // You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);

  const {
    replicants: { Replicant }, // Used to take out a replicant from the replicants object
  } = state || {};
  console.log(Replicant)

  return (
    <div>
      <h1>Hello, this is one of your graphics</h1>    
      <p>To edit me, open "<span id="path" className="monospace">{__filename}</span>" in your favorite text editor or IDE.</p>
    </div>
  );
};

export default app;


import NCGStore, { replicate } from "../../stores/NodecgStore";
import React, {useEffect, useState} from 'react';

const app = () => {
  const [state, setState] = useState({
    replicants: NCGStore.getReplicants(),
  });

  useEffect(() => {
    replicate("Replicant"); //You can subscribe to replicants with this method
  }, []);

  useEffect(() => {
    NCGStore.on("change", () => {
      setState({
        replicants: NCGStore.getReplicants(),
      });
    });
  }, []);

  const {
    replicants: { Replicant }, //Used to take out a replicant from the replicants object
  } = state || {};

  return (
    <div>
      <h1>Hello, this is one of your graphics</h1>    
    </div>
  );
};

export default app;

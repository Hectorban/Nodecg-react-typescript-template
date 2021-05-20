/// <reference path="../../../../../types/browser.d.ts" />
import {NodeCGConfig} from '../../../../../types/browser';
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { QueryClient, QueryClientProvider } from "react-query";
import 'regenerator-runtime/runtime';

const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);

export const config: NodeCGConfig = nodecg.config;
import React from "react"
import ReactDOM from "react-dom"
import { QueryClient, QueryClientProvider } from "react-query"

import App from "./app"
import 'regenerator-runtime/runtime'

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);

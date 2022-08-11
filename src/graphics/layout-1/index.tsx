import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'

const queryClient = new QueryClient()
const container = document.getElementById('root')
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)

root.render(
    <QueryClientProvider client={queryClient}>
        <StrictMode>
            <App />
        </StrictMode>
    </QueryClientProvider>
)

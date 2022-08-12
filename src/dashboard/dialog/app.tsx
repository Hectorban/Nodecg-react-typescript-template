import React, { ReactElement, useEffect } from 'react'

function App(): ReactElement {
    useEffect(() => {
        const { document } = window || globalThis || {}
        document.addEventListener('dialog-opened', () => {
            // eslint-disable-next-line no-console
            console.log('dialog-opened')
            nodecg.sendMessage(
                'dialog-opened',
                { status: 'Opened' },
                (err: Error) => {
                    // eslint-disable-next-line no-console
                    console.error('Error sending message:', err)
                }
            )
        })

        document.addEventListener('dialog-confirmed', () => {
            // eslint-disable-next-line no-console
            console.log('dialog-confirmed')
            nodecg.sendMessage(
                'dialog-confirmed',
                { status: 'Confirmed' },
                (err: Error) => {
                    // eslint-disable-next-line no-console
                    console.error('Error sending message:', err)
                }
            )
        })

        document.addEventListener('dialog-dismissed', (e) => {
            // eslint-disable-next-line no-console
            console.log({ e })
            // The user pressed the dismiss button.
            // eslint-disable-next-line no-console
            console.log('dialog-dismissed')
            nodecg.sendMessage(
                'dialog-dismissed',
                { status: 'Closed or Canceled' },
                (err: Error) => {
                    // eslint-disable-next-line no-console
                    console.error('Error sending message:', err)
                }
            )
        })
    }, [])

    return (
        <div>
            <h2>Dialog dashboard</h2>
            <p>This is a dialog dashboard that should be opened externally</p>
        </div>
    )
}

export default App

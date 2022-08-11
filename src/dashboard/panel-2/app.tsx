import React, { ReactElement, useEffect } from 'react'

function App(): ReactElement {
    const [dialogStatus, setDialogStatus] = React.useState<
        'closed' | 'open' | 'confirmed' | 'dismissed'
    >('closed')

    useEffect(() => {
        const { nodecg } = window || globalThis || {}

        nodecg.listenFor('dialog-dismissed', (message) => {
            // eslint-disable-next-line no-console
            console.log({ message })
            setDialogStatus('dismissed')
        })
        nodecg.listenFor('dialog-confirmed', (message) => {
            // eslint-disable-next-line no-console
            console.log({ message })
            setDialogStatus('confirmed')
        })
        nodecg.listenFor('dialog-opened', (message) => {
            // eslint-disable-next-line no-console
            console.log({ message })
            setDialogStatus('open')
        })

        nodecg.unlisten('dialog-dismissed', () => {
            // eslint-disable-next-line no-console
            console.log('dialog-dismissed unlisten')
        })
    }, [])

    return (
        <div>
            <h1>Hello, i{`'`}m one of your dashboards</h1>
            <p>
                To edit me, open {`"`}
                <span id="path" className="monospace">
                    {__filename}
                </span>
                {`"`} in your favorite text editor or IDE.
            </p>

            <p>
                You can open a dialog by clicking on button, currently the
                dialog is {dialogStatus}
            </p>

            <button type="button" nodecg-dialog="custom-dialog-name">
                Open the dialog
            </button>
        </div>
    )
}

export default App

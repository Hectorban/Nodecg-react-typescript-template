import React, { ReactElement } from 'react'

function App(): ReactElement | null {
    return (
        <div>
            <h1>Hello, this is one of your graphics</h1>
            <p>
                To edit me, open {`"`}
                <span id="path" className="monospace">
                    {__filename}
                </span>
                {`"`} in your favorite text editor or IDE.
            </p>
        </div>
    )
}

export default App

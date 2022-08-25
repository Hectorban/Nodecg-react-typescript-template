import { ReactElement } from 'react'

function App(): ReactElement {
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
        </div>
    )
}

export default App

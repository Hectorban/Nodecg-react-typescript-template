// eslint-disable-next-line import/no-import-module-exports
import { NodeCG } from 'nodecg/types/server'
// eslint-disable-next-line import/no-import-module-exports
import { set } from './utils/nodecg-api-context'

const init = async (nodecg: NodeCG) => {
    nodecg.log.info('Initializing backend...')
    nodecg.log.info("Hello, from your bundle's extension!")
    nodecg.log.info("I'm where you put all your server-side code.")

    // You can load your modules with require("") here
}

function main(nodecg: NodeCG) {
    // Set the context api so all the modules can access it
    set(nodecg)
    init(nodecg)
        .then(() => {
            nodecg.log.info('Initialization successful.')
        })
        .catch((error) => {
            nodecg.log.error('Failed to initialize:', error)
        })
}

module.exports = main

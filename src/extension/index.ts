import {NodeCG} from "../types/nodecgServer"
import * as nodecgApiContext from './utils/nodecg-api-context'

module.exports = (nodecg:NodeCG) => {
	// Set the context api so all the modules can access it
	nodecgApiContext.set(nodecg)
	init().then(() => {
		nodecg.log.info('Initialization successful.');
	})
	.catch(error => {
		nodecg.log.error('Failed to initialize:', error);
	});
}

const init = async () => {
	const nodecg = nodecgApiContext.get()
	nodecg.log.info("Initializing backend...")
	nodecg.log.info('Hello, from your bundle\'s extension!');
	nodecg.log.info('I\'m where you put all your server-side code.');
	nodecg.log.info(`To edit me, open "${__filename}" in your favorite text editor or IDE.`)

	// You can load your modules with require("") here
}
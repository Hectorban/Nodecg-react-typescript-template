'use strict'

const nodecgApiContext = require('./utils/nodecg-api-context');

module.exports = nodecg => {
	//Set the context api so all the modules can access it
	nodecgApiContext.set(nodecg)
    nodecg.log.info("Test")
}
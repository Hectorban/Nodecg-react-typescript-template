#!/usr/bin/env node
/* eslint-disable no-console */
import { exec } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

if (
  !process?.env?.npm_config_local_prefix ||
  !existsSync(process.env.npm_config_local_prefix)
)
  throw new Error("This script must be run with npm when use `npm install`");

const PROJECT_PATH_PREFIX = process.env.npm_config_local_prefix;
const NODECG_PROJECT_PATH = join(PROJECT_PATH_PREFIX, ".nodecg");
const PACKAGE_JSON_FILEPATH = join(NODECG_PROJECT_PATH, "package.json");

function replaceAllObjectValue(obj, match, replace) {
  const result = JSON.parse(JSON.stringify(obj));
  Array.from(Object.keys(result.scripts)).forEach((key) => {
    if (typeof result.scripts[key] === typeof '') {
      result.scripts[key] = result.scripts[key].toString().replaceAll(match, replace);
    }
  });
  return result;
}

function replaceNodeForBunInPackagJsonObject(packageJsonObject) {
  const nodePackageJson = replaceAllObjectValue(packageJsonObject, 'node ', 'bun ');
  return replaceAllObjectValue(nodePackageJson, 'npm ', 'bun ');
}

function replaceBunForNodeInPackagJsonObject(packageJsonObject) {
  const obj = {...packageJsonObject};
  obj.scripts.start = 'node index.js';
  obj.scripts.instrument = 'nyc instrument ./src ./instrumented && node test/helpers/retarget-browser-coverage.js'
  const npmIPackageJson = replaceAllObjectValue(obj, 'bun i', 'npm i');
  const npmRunPackageJson = replaceAllObjectValue(npmIPackageJson, 'bun run', 'npm run');
  return replaceAllObjectValue(npmRunPackageJson, 'bun ', 'npm ');
}

function modifyPackageJsonAfterCallBack(packageJsonFilePath, callback) {
  try {
    const packageJsonContent = readFileSync(packageJsonFilePath, "utf8");
    const packageJsonObject = JSON.parse(packageJsonContent);
    const newPackageJson = callback(packageJsonObject);

    writeFileSync(packageJsonFilePath, JSON.stringify(newPackageJson, null, 2));
  } catch (error) {
    console.error("Could not modify package.json of .nodecg to use Bun");
  }
}

function modifyNodeCGPackageJSONForBun(packageJsonFilePath) {
  modifyPackageJsonAfterCallBack(packageJsonFilePath, replaceNodeForBunInPackagJsonObject)
}

if (!existsSync(NODECG_PROJECT_PATH)) {
  console.log("Installing nodecg");
  exec("include-nodecg postinstall", (err, stdout, stderr) => {
    if (err) {
      console.error({ err });
      process.exit(1);
    }

    if (stderr) {
      console.error(stderr);
    }

    console.log(stdout);
    
    if (process?.isBun) {
      console.info("Modifying the package.json of .nodecg to use Bun");
      modifyNodeCGPackageJSONForBun(PACKAGE_JSON_FILEPATH);
      console.info("Done");
    }
  });
} else {
  console.log("nodecg already installed, ignoring the postinstall process");
}

// If arguments then it just a bun or node replacement
if (process.argv.includes("--bun")) {
  console.log('bun')
  modifyNodeCGPackageJSONForBun(PACKAGE_JSON_FILEPATH);
  process.exit()
}

if(process.argv.includes("--node")) {
  console.log('node')
  modifyPackageJsonAfterCallBack(PACKAGE_JSON_FILEPATH, replaceBunForNodeInPackagJsonObject)
  process.exit()
}

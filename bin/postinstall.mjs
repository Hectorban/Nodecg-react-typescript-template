#!/usr/bin/env node
import { exec } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";

if (
  !process?.env?.npm_config_local_prefix ||
  !existsSync(process.env.npm_config_local_prefix)
)
  throw new Error("This script must be run with npm when use `npm install`");

const PROJECT_PATH_PREFIX = process.env.npm_config_local_prefix;
const NODECG_PROJECT_PATH = join(PROJECT_PATH_PREFIX, ".nodecg");

if (!existsSync(NODECG_PROJECT_PATH)) {
  console.log('Installing nodecg')
  exec("include-nodecg postinstall", (err, stdout, stderr) => {
    if (err) {
      console.error({ err });
      process.exit(1);
    }

    if (stderr) {
      console.error(stderr);
    }

    console.log(stdout);
  });
} else {
  console.log("nodecg already installed, ignoring the postinstall process");
}

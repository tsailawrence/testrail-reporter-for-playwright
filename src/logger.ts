import chalk from "chalk";
import stringify from "json-stringify-safe";

function logger(msg:any) {
	const msgOut = msg instanceof Object ? stringify(msg, null, 2) : msg;
	console.log(`[${chalk.cyan("testrail-reporter-for-playwright")}] ${msgOut}`);
  }

export default logger;
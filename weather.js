#!/usr/bin/env node
import { getArgs } from "./helpers/args.js";
import {printHelp, printSuccess, printError} from "./services/log.service.js";
import {saveKeyValue, TOKEN_DICTIONARY} from './services/storage.service.js';
import {getWether} from './services/api.service.js';

// db7c082d05dbf48a5e5946e1386f4b3e - token

const saveToken = async (token) => {
	if (!token.length) {
		printError("token - neperedan")
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
		printSuccess(' Token save')
	} catch (err) {
		printError(err.message)
	}
}

const initCLI = () => {
	const args = getArgs(process.argv)
//   console.log(args);
  if (args.h){
	printHelp()
  }
  if (args.s){
	//save city
	
  }
  if (args.t){
	// sve token
	return saveToken(args.t)
  }
  getWether('London')
  // vivod wether
};

initCLI();

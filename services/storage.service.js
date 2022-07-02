import { homedir } from "os";
import { join, basename, dirname, relative } from "path";
import { promises } from "fs";

// const filePath = join(homedir(), "./Desktop/try/90/weather-data.json");
const filePath = join(process.env.PWD, "weather-data.json");

const TOKEN_DICTIONARY = {
	token: 'token',
	city: 'city',
}

const saveKeyValue = async (key, value) => {
  // console.log(relative(filePath, dirname(dirname(filePath))))
  let data = {};
  if (await isExist(filePath)) {
    const file = await promises.readFile(filePath);
    data = JSON.parse(file);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
	// console.log('filePath', filePath)
    const file = await promises.readFile(filePath);
    const data = JSON.parse(file);
    return data[key];
  }
  return undefined;
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (err) {
    return false;
  }
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };

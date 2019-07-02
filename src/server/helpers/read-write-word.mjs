import fs from 'fs';
import { readFromFile} from './readFile.mjs';

const DEPTH_LEVEL = 4;

export const createWordFile = (dir, word, definition) => {
	if (!fs.existsSync(dir)){
    	fs.mkdirSync(dir);
	}

	fs.writeFile(`${dir}/${word}.json`, JSON.stringify(definition), function (err) {
	  if (err) throw err;
	  
	});
}

export const readWordFile = (dir, word) => {

	const data = readFromFile(`${dir}/${word}.json`);

	if (data) {
		return JSON.parse(data);
	}


}


export function locateAndCreateWord(depthLevel, baseDir, word, definition) {
	if (!fs.existsSync(baseDir)){
    	fs.mkdirSync(baseDir);
	}

	if(depthLevel < DEPTH_LEVEL && word.length > depthLevel) {
		return locateAndCreateWord(depthLevel + 1, `${baseDir}/${word[depthLevel]}`, word, definition);
	}

	createWordFile(baseDir, word, definition);
}


export function locateAndReadWord(depthLevel, baseDir, word) {
	if (!fs.existsSync(baseDir)){
    	fs.mkdirSync(baseDir);
	}

	if(depthLevel < DEPTH_LEVEL && word.length > depthLevel) {
		return locateAndReadWord(depthLevel + 1, `${baseDir}/${word[depthLevel]}`, word);
	}

	if (!fs.existsSync(baseDir)){
		return readWordFile(baseDir, word);
	}

	return null;
}

// export const doNewPersoArabic = (persoArabic, definition) => {
// 	return locateAndCreateWord(0, PA_BASE_DIR, persoArabic, definition);
// };

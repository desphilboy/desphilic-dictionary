import fs from 'fs';
 

export function appendToFile(fileName, data) {
	fs.appendFile(fileName, data, 'utf8', (err) => {
		if (err) {
			throw err;
		}  
	});
}

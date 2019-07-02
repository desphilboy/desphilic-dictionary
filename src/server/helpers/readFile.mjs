import fs from 'fs';

export function readFromFile(fileName) {
    return fs.readFileSync(fileName, {encoding: 'utf-8'});
}

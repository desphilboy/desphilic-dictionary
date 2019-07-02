
import { PERSO_ARABIC_BASE, PERSO_ARABIC_TODO_WORDS } from './base.mjs';
import { appendToFile } from '../helpers/append-to-file.mjs';

const PA_BASE_DIR = PERSO_ARABIC_BASE;


export const saveInPersoArabicToDo = (persoArabic) => {
	const fileName = PERSO_ARABIC_TODO_WORDS;
	appendToFile(fileName, `\n${persoArabic}\n`);
};
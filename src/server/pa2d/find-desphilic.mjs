
import { PERSO_ARABIC_BASE } from './base.mjs';
import { locateAndReadWord } from '../helpers/read-write-word.mjs';
import { saveInPersoArabicToDo } from './do-new-persoarabic.mjs';

export const lookupForDesphilic =  persoArabicWord => {
	const desphilicWord = locateAndReadWord(0, PERSO_ARABIC_BASE, persoArabicWord);

	if(!!desphilicWord) {
		return desphilicWord;
	}

	saveInPersoArabicToDo(persoArabicWord);

	return null; 
};



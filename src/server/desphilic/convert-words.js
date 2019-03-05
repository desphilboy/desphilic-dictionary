import { DESPHILIC } from './alphabet.constants';

export const persoArabicToDesphilic = (persoArabic) => {
	const lettersArray = persoArabic.split('');
	console.log(lettersArray);

	const convertedArray = lettersArray.map(l => DESPHILIC[l.toUpperCase()] || l);
	console.log(convertedArray);

	const convertedword = convertedArray.join().toLowerCase();
	console.log(convertedword);
	return convertedword;
};

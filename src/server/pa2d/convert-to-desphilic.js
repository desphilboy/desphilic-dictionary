export const convertToDesphilic = (findDesphilic, doNewPersoArabic) => persoArabicWord => {
	const desphilicWord = findDesphilic(persoArabicWord);

	if(!!desphilicWord) {
		return desphilicWord;
	}

	return doNewPersoArabic(persoArabicWord);
};
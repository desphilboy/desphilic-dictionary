import express from 'express';
import bodyParser from 'body-parser';
// import { test } from './product.controller';
// import dbConfig from '../../config/database.config';
// import noteRoutes from './notes.routes.js';
// import { persoArabicToDesphilic } from './desphilic/convert-words';
import { lookupForDesphilic } from './pa2d/find-desphilic.mjs';

// persoArabicToDesphilic('مجادله');

// persoArabicToDesphilic('تثبیت تصادف  اضظراب  ظبط و پخش. شقایق تغییر ')

// initialize our express app

function findPersoArabicWord(req, res) {
	const persoArabicword = req.params.word || '';
	if (!!persoArabicword) {
		const desphilic = lookupForDesphilic(persoArabicword);
		res.set('Access-Control-Allow-Origin', '*');
		res.send({ status: 200, data:{ desphilic }});
	} else {
		const desphilic = 'notfound'
		res.append('Access-Control-Allow-Origin', ['*']);
		res.send({ status: 207, data:{ desphilic }});

	}
}

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/perso-arabic/:word', (req, res) => findPersoArabicWord(req, res));
let port = 9090;

app.listen(port, () => {
	console.log('now listennig on port: ', port);
});
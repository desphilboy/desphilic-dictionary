import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { test } from './product.controller';
import dbConfig from '../../config/database.config';
import noteRoutes from './notes.routes.js';
import { persoArabicToDesphilic } from './desphilic/convert-words';

persoArabicToDesphilic('مجادله');

persoArabicToDesphilic('تثبیت تصادف  اضظراب  ظبط و پخش. شقایق تغییر ')

// initialize our express app
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/test', test)
let port = 3021;

app.listen(port, () => {
	console.log('now listennig on port: ', port);
});

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

noteRoutes(app);


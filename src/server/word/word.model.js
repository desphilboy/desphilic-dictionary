import mongoose from 'mongoose';

const wordShema = mongoose.Schema({
	persoArabic: String,
	desphilic: String,
	type: String,
    title: String,
    content: String,
    english: String,
    german: String,
    french: String,
}, {
    timestamps: true
});

export default mongoose.model('Word', wordShema);

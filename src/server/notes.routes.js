import { create, findAll, findOne, update, deleteNote } from  './notes.controller'

const routes = (app) => {

    // Create a new Note
    app.post('/notes', create);

    // Retrieve all Notes
    app.get('/notes', findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', deleteNote);
}

export default routes;

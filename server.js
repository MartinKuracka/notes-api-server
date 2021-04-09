const express = require('express');
const cors = require('cors');
const newNote = require('./controllers/post_note');
const editNote = require('./controllers/update_note');
const deletenote = require('./controllers/delete_note');

const app = express();
app.use(express.json())
app.use(cors());

db = [
    {
      "id": 1,
      "title": "Jogging in park"
    },
    {
      "id": 2,
      "title": "Pick-up posters from post-office"
    },
    {
      "id": 3,
      "title": "Go shopping after dinner"
    }
];

// Get the notes from server
app.get('/notes', (req, res) => {res.send(db)})

// Put a new note in the notes list
app.post('/notes', (req, res) => {newNote.addNote(res, req.body.title, db)})

// Edit a note in the notes
app.put('/notes/:id', (req, res) => {editNote.updateNote(req.params.id, req.body.title, res);
})

// Delete a note in the notes list
app.delete('/notes/:id', (req, res) => {deletenote.deleteNote(req.params.id, res)})

app.listen(3333, () => {
    console.log(`Server is listening on port 3333`);
  });

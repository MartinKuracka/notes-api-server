const addNote = (res, note) => {
    if (note.length == 0) {
        return res.send('can not save empty note');
    } 
    if (db.length == 0 ) {
        nextID = 1;
    } else { 
        nextID = db[db.length - 1].id + 1;}
    newNote = {
        "id" : nextID,
        "title" : note
    }
    db.push(newNote);
    res.send(db);
}

module.exports = {addNote: addNote}
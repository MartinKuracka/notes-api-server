const deleteNote = (id, res) => {
    let index = db.findIndex(noteID => {
    return noteID.id == id;
});
db.splice(index, 1);
res.send(db);
}

module.exports = {deleteNote:deleteNote}


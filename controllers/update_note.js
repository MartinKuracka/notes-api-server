const updateNote = (id, note, res) => {
    let index = db.findIndex(noteID => {
        return noteID.id == id;
   });
   db[index] = {
       id: Number(id),
       title : note
   }
   res.send(db)
}

module.exports = {updateNote:updateNote}
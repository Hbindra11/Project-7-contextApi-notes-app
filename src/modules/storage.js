export const storeNotes = (newNote) => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const storeCategories = (newCategory) => {
  const notes = JSON.parse(localStorage.getItem("categories")) || [];
  notes.push(newCategory);
  localStorage.setItem("categories", JSON.stringify(notes));
};
export function fetchAllStoredNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

export function deleteANote(noteContent) {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  //loop thru all notes till contents match to filter out
  const filtered = allNotes.filter(
    (toDelete) => toDelete.content !== noteContent
  );
  localStorage.setItem("notes", JSON.stringify(filtered));

  //return console.log(filtered);
}

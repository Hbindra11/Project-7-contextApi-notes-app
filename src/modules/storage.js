export const storeNotes = (newNote) => {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(newNote);
  localStorage.setItem("notes", JSON.stringify(notes));
};

export const storeCategories = (newCategory) => {
  const categories = JSON.parse(localStorage.getItem("categories")) || [];
  categories.push(newCategory);
  localStorage.setItem("categories", JSON.stringify(categories));
};

export function fetchCategories() {
  return JSON.parse(localStorage.getItem("categories")) || [];
}

export function fetchAllStoredNotes() {
  return JSON.parse(localStorage.getItem("notes")) || [];
}

export function deleteANote(noteTitle, noteContent) {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  //loop thru all notes till contents match to filter out
  const filtered = allNotes.filter(
    (toDelete) =>
      toDelete.content !== noteContent && toDelete.title !== noteTitle
  );
  localStorage.setItem("notes", JSON.stringify(filtered));
}

export function editStoredNote(editedNote) {
  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  //loop thru all notes till contents match to filter out
  allNotes.push(editedNote);
  localStorage.setItem("notes", JSON.stringify(allNotes));
}

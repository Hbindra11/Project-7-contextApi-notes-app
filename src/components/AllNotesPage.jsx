import { fetchAllStoredNotes, deleteANote, editStoredNote } from "../modules/storage";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";
import { useState } from "react";

const AllNotesPage = () => {
  // Sort notes in descending order by updatedAt or createdAt (newest first)
  const [notes, setNotes] = useState(
    fetchAllStoredNotes().sort((a, b) => {
      const dateA = new Date(a.updatedAt || a.createdAt || 0);
      const dateB = new Date(b.updatedAt || b.createdAt || 0);
      return dateB - dateA;
    })
  );
  const navigate = useNavigate();
  const { note, setNote, editNote, setEditNote } = useAppContext();

  // Modal state
  const [showModal, setShowModal] = useState(false);

  // For categories
  const allCategories = (notes[0]?.categories && Array.isArray(notes[0].categories))
    ? notes.reduce((acc, n) => {
        n.categories?.forEach((c) => !acc.includes(c) && acc.push(c));
        return acc;
      }, [])
    : [];

  function handelClick(editNoteTitle, editNoteContent, editNoteCategories, editNoteCreatedAt, editNoteUpdatedAt) {
    setNote({
      title: editNoteTitle,
      content: editNoteContent,
      categories: editNoteCategories || [],
      createdAt: editNoteCreatedAt,
      updatedAt: editNoteUpdatedAt,
    });
    setEditNote({
      title: editNoteTitle,
      content: editNoteContent,
      categories: editNoteCategories || [],
      createdAt: editNoteCreatedAt,
      updatedAt: editNoteUpdatedAt,
    });
    setShowModal(true);
  }

  function handelChange(e) {
    setEditNote((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCategoryCheckboxChange(category) {
    setEditNote((prev) => {
      const prevCategories = Array.isArray(prev.categories) ? prev.categories : [];
      if (prevCategories.includes(category)) {
        return { ...prev, categories: prevCategories.filter((c) => c !== category) };
      } else {
        return { ...prev, categories: [...prevCategories, category] };
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    deleteANote(note.title, note.content);
    // Always update the updatedAt timestamp on edit, retain createdAt if present
    const prevCreatedAt =
      editNote.createdAt ||
      note.createdAt ||
      new Date().toISOString();

    // If the note is being edited (title/content changed), updatedAt should be different from createdAt
    const updatedAt = new Date().toISOString();

    editStoredNote({
      ...editNote,
      createdAt: prevCreatedAt,
      updatedAt: updatedAt,
    });

    // Fetch and sort notes in descending order after edit
    setNotes(
      fetchAllStoredNotes().sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt || 0);
        const dateB = new Date(b.updatedAt || b.createdAt || 0);
        return dateB - dateA;
      })
    );
    setShowModal(false);
  }

  function handleDelete(title, content) {
    deleteANote(title, content);
    setNotes(
      fetchAllStoredNotes().sort((a, b) => {
        const dateA = new Date(a.updatedAt || a.createdAt || 0);
        const dateB = new Date(b.updatedAt || b.createdAt || 0);
        return dateB - dateA;
      })
    );
  }

  return (
    <div className="p-8 bg-stone-950 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-white mb-8">All Notes</h1>
      <div className="flex flex-wrap justify-center">
        {notes.length === 0 && (
          <div className="text-white text-center">No notes found.</div>
        )}
        {notes.map((note, idx) => (
          <div
            key={note.title + idx}
            className="card bg-base-100 w-72 shadow-xl m-2 p-4"
          >
            {/* Show updated or created date/time and delete button on the same row */}
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs text-gray-500">
                {/* Show 'Updated:' if updatedAt exists and is different from createdAt, otherwise 'Created:' */}
                {note.updatedAt && note.createdAt && note.updatedAt !== note.createdAt
                  ? "Updated: " + new Date(note.updatedAt).toLocaleString()
                  : "Created: " + (note.createdAt ? new Date(note.createdAt).toLocaleString() : "N/A")}
              </div>
              <button
                className="btn btn-square btn-sm"
                onClick={() => handleDelete(note.title, note.content)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h2 className="card-title">{note.title}</h2>
            </div>
            <div className="card-body">
              <p>{note.content}</p>
              {/* Show categories as highlighted and circled list */}
              {Array.isArray(note.categories) && note.categories.length > 0 && (
                <ul className="flex flex-wrap gap-2 mt-4 justify-center list-none p-0">
                  {note.categories.map((cat, cidx) => (
                    <li
                      key={cat + cidx}
                      className="inline-block px-3 py-1 bg-blue-200 text-blue-800 rounded-full border border-blue-400 font-semibold text-xs"
                    >
                      {cat}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => {
                  handelClick(
                    note.title,
                    note.content,
                    note.categories,
                    note.createdAt,
                    note.updatedAt
                  );
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal for editing note */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="card bg-base-100 w-96 m-10 p-10">
            <h3 className="font-bold text-lg">Edit Note</h3>
            <div className="card-body">
              <form method="dialog" onSubmit={handleSubmit}>
                <label className="form-control w-full max-w-xs">
                  <span className="label-text">Title: </span>
                  <input
                    type="text"
                    className="input input-bordered input-accent w-full max-w-xs "
                    name="title"
                    value={editNote.title || ""}
                    onChange={handelChange}
                    required
                  ></input>
                </label>
                <br />
                <label className="form-control w-full max-w-xs">
                  <span className="label-text">Content </span>
                  <textarea
                    className="textarea textarea-accent"
                    name="content"
                    value={editNote.content || ""}
                    onChange={handelChange}
                    required
                  ></textarea>
                </label>
                <br />
                {/* Categories as ticked/unticked list */}
                <div className="mb-4">
                  <span className="label-text font-bold">Categories:</span>
                  <ul className="mt-2">
                    {allCategories.map((cat) => (
                      <li key={cat} className="flex items-center mb-1">
                        <input
                          type="checkbox"
                          checked={Array.isArray(editNote.categories) && editNote.categories.includes(cat)}
                          onChange={() => handleCategoryCheckboxChange(cat)}
                          className="mr-2"
                        />
                        <span>{cat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button type="submit" className="mr-24 btn btn-accent mt-5">
                  Save
                </button>
                <button
                  type="button"
                  className="btn ml-4"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllNotesPage;


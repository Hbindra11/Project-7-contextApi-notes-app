import {
  fetchAllStoredNotes,
  deleteANote,
  editStoredNote,
} from "../modules/storage";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext.js";
import Hero from "./Hero";
import { fetchCategories } from "../modules/storage"; // Import to get all categories

const Home = () => {
  const navigate = useNavigate();
  const { note, setNote, editNote, setEditNote } = useAppContext();

  // Get all available categories
  const allCategories = fetchCategories().map((cat) => cat.category);

  function handelClick(editNoteTitle, editNoteContent, editNoteCategories) {
    setNote({ title: editNoteTitle, content: editNoteContent, categories: editNoteCategories || [] });
    setEditNote({ title: editNoteTitle, content: editNoteContent, categories: editNoteCategories || [] });
    document.getElementById("my_modal_5").showModal();
  }

  function handelChange(e) {
    setEditNote((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      // categories handled separately
    }));
  }

  // Handle category checkbox change in edit modal
  function handleCategoryCheckboxChange(category) {
    setEditNote((prev) => {
      const prevCategories = Array.isArray(prev.categories) ? prev.categories : [];
      if (prevCategories.includes(category)) {
        // Untick: remove category
        return { ...prev, categories: prevCategories.filter((c) => c !== category) };
      } else {
        // Tick: add category
        return { ...prev, categories: [...prevCategories, category] };
      }
    });
  }

  function handleSubmit() {
    deleteANote(note.title, note.content);
    // Update the note with a new updatedAt timestamp
    editStoredNote({
      ...editNote,
      updatedAt: new Date().toISOString(),
    });
    navigate("/");
  }

  return (
    <>
      {
        <div className="flex flex-wrap justify-center bg-stone-950 ">
          <Hero />
          {/* All notes/cards are removed, only Hero is shown */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="card bg-base-100 w-96 m-10 p-10 ">
              <h3 className="font-bold text-lg">Edit Note</h3>
              <div className="card-body">
                <h2></h2>
                <form method="dialog" onSubmit={handleSubmit}>
                  {/* Show current values in the input fields using value attribute */}
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
                  <br></br>
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
                  <br></br>
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
                </form>
                <form>
                  <button className="btn ml-40">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      }
    </>
  );
};

export default Home;

import { fetchAllStoredNotes, deleteANote, editNote } from "../modules/storage";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Home = () => {
  const allNotes = fetchAllStoredNotes();
  const navigate = useNavigate();
  const { note, setNote } = useAppContext();

  function handelClick(editNoteTitle, editNoteContent) {
    setNote({ title: editNoteTitle, content: editNoteContent });
    document.getElementById("my_modal_5").showModal();
  }

  function handelChange(editNote) {
    console.log(editNote.title);
    console.log(editNote.content);
  }

  return (
    <>
      {
        <div className="flex flex-wrap justify-center p-48">
          {allNotes.map((aNote) => (
            <div
              className="card bg-base-100 w-96 shadow-xl m-2 p-10 "
              key={crypto.randomUUID()}
            >
              <div className="card-actions justify-end">
                <button
                  className="btn btn-square btn-sm"
                  onClick={() => {
                    deleteANote(aNote.title, aNote.content);
                    navigate("/");
                  }}
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
                <h2 className="card-title">{aNote.title}</h2>
              </div>

              <div className="card-body">
                <p>{aNote.content}</p>
              </div>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    handelClick(aNote.title, aNote.content);
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}

          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="card bg-base-100 w-96 m-10 p-10 ">
              <h3 className="font-bold text-lg">Edit Note</h3>

              <div className="card-body">
                <h2></h2>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <label className="form-control w-full max-w-xs">
                    <span className="label-text">Title: </span>
                    <input
                      type="text"
                      className="input input-bordered input-accent w-full max-w-xs "
                      //placeholder={note.title}
                      placeholder={note.title}
                      name="title"
                      onChange={handelChange(note)}
                    ></input>
                  </label>
                  <br></br>
                  <label className="form-control w-full max-w-xs">
                    <span className="label-text">Content </span>
                    <textarea
                      type="text"
                      className="textarea textarea-accent"
                      //placeholder={note.content}
                      placeholder={note.content}
                      name="content"
                      onChange={handelChange(note)}
                    ></textarea>
                  </label>
                  <br></br>
                  <button className="btn">Close</button>
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

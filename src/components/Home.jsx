import { fetchAllStoredNotes, deleteANote } from "../modules/storage";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const allNotes = fetchAllStoredNotes();
const navigate = useNavigate();

  return (
    <>
      {
        <div className="flex flex-wrap justify-center" >
          {allNotes.map((aNote) => (
            <div
              className="card bg-base-100 w-96 shadow-xl m-2 p-10 "
              key={crypto.randomUUID()}
            >
              <div className="card-actions justify-end">
                <button className="btn btn-square btn-sm" onClick={ () => {deleteANote(aNote.content);navigate("/")}} >
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
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default Home;
